import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export interface FramingDefinition {
  id: string;
  name: string;
  shortLabel: string;
  subtitle: string;
  phaseAngle: string;
  solarStatus: string;
  altitude: string;
  speed: string;
  description: string;
  camPos: THREE.Vector3;
  camTarget: THREE.Vector3;
  sunPos: THREE.Vector3;
  flareIntensity: number;
}

export const SOLVED_FRAMINGS: FramingDefinition[] = [
  {
    id: 'daylight',
    name: 'Daylight Orbit',
    shortLabel: '01 · Daylight',
    subtitle: 'Full Hemispheric Insolation',
    phaseAngle: '14° Subsolar',
    solarStatus: 'Direct Ocean Glint & Cloud Shadows',
    altitude: '422 km LEO',
    speed: '7.67 km/s',
    description: 'High-inclination orbital pass across the sunlit face of Earth. Broad oceans catch direct specular reflection, while dynamic cloud layers cast soft shadows over mountain ranges and continental landmasses under deep blue atmospheric Rayleigh scattering.',
    camPos: new THREE.Vector3(0.0, 1.3, 5.2),
    camTarget: new THREE.Vector3(0.0, 0.0, 0.0),
    sunPos: new THREE.Vector3(3.2, 2.5, 4.8),
    flareIntensity: 0.15
  },
  {
    id: 'night-limb',
    name: 'Night Limb & Terminator',
    shortLabel: '02 · Night Limb',
    subtitle: 'Twilight Horizon & City Lights',
    phaseAngle: '88° Grazing Vector',
    solarStatus: 'Terminator Dividing Line · Amber Twilight',
    altitude: '395 km LEO',
    speed: '7.69 km/s',
    description: 'Camera sweeps close to the day-night divide along the planetary curve. The grazing sun casts elongated shadows across mountain ridges, while millions of golden city light constellations ignite across Europe, Asia, and the Americas.',
    camPos: new THREE.Vector3(-2.2, 0.4, 3.4),
    camTarget: new THREE.Vector3(-0.45, 0.0, 0.1),
    sunPos: new THREE.Vector3(4.8, 0.3, 0.2),
    flareIntensity: 0.35
  },
  {
    id: 'crescent',
    name: 'Orbital Crescent',
    shortLabel: '03 · Crescent',
    subtitle: 'Deep Space Planetary Silhouette',
    phaseAngle: '152° Phase Angle',
    solarStatus: 'Slender Luminous Blue Atmospheric Arc',
    altitude: '448 km LEO',
    speed: '7.64 km/s',
    description: 'Key light swings 152° behind the planet, plunging the globe into dark silhouette. Earth appears as a razor-thin, brilliant electric blue crescent rimmed by the glowing atmospheric envelope against the silent cosmic starfield.',
    camPos: new THREE.Vector3(1.9, -0.65, 4.5),
    camTarget: new THREE.Vector3(0.2, 0.1, 0.0),
    sunPos: new THREE.Vector3(-2.6, 0.5, -4.2),
    flareIntensity: 0.55
  },
  {
    id: 'sun-horizon',
    name: 'Sun Below Horizon',
    shortLabel: '04 · Sun Below Horizon',
    subtitle: 'Orbital Sunrise & Anamorphic Corona',
    phaseAngle: '178° Solar Eclipse Alignment',
    solarStatus: 'Solar Corona & Anamorphic Lens Flare Burst',
    altitude: '410 km LEO',
    speed: '7.68 km/s',
    description: 'The blinding key light dips right below the curved limb of the dark globe. Photons erupt through the upper stratosphere, producing a brilliant solar corona, anamorphic blue horizontal streaks, and an incandescent rim flare.',
    camPos: new THREE.Vector3(0.0, 0.15, 3.8),
    camTarget: new THREE.Vector3(0.0, 0.45, 0.0),
    sunPos: new THREE.Vector3(0.0, 1.95, -4.6),
    flareIntensity: 1.0
  }
];

interface EarthOrbitCanvasProps {
  progress: number; // 0.0 to 1.0
  onFramingChange?: (index: number) => void;
  className?: string;
}

export const EarthOrbitCanvas: React.FC<EarthOrbitCanvasProps> = ({
  progress,
  onFramingChange,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const onFramingChangeRef = useRef(onFramingChange);
  onFramingChangeRef.current = onFramingChange;

  const [hasLoadedTextures, setHasLoadedTextures] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // --- Scene, Camera, Renderer ---
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02040b, 0.02);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.copy(SOLVED_FRAMINGS[0].camPos);
    camera.lookAt(SOLVED_FRAMINGS[0].camTarget);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setClearColor(0x02040a, 1.0);
    container.appendChild(renderer.domElement);

    // --- Texture Loading with Procedural Fallbacks ---
    const textureLoader = new THREE.TextureLoader();

    // Helper to create a procedural night canvas fallback if needed
    const createProceduralNight = () => {
      const c = document.createElement('canvas');
      c.width = 1024;
      c.height = 512;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#000005';
        ctx.fillRect(0, 0, c.width, c.height);
        // Add random golden clusters
        for (let i = 0; i < 400; i++) {
          const x = Math.random() * c.width;
          const y = 100 + Math.random() * 300;
          const r = Math.random() * 2.5;
          ctx.fillStyle = Math.random() > 0.4 ? '#ffcc66' : '#ffeeaa';
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    };

    // Helper to create fallback day texture
    const createProceduralDay = () => {
      const c = document.createElement('canvas');
      c.width = 1024;
      c.height = 512;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0a2a50';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#1c3d25';
        ctx.fillRect(100, 100, 350, 200);
        ctx.fillRect(600, 120, 300, 180);
      }
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    };

    const dayTexture = textureLoader.load(
      '/textures/earth/earth_day.jpg',
      () => setHasLoadedTextures(true),
      undefined,
      () => {
        // Fallback
        const fallback = createProceduralDay();
        earthMaterial.uniforms.uDayMap.value = fallback;
      }
    );
    dayTexture.wrapS = THREE.RepeatWrapping;
    dayTexture.wrapT = THREE.ClampToEdgeWrapping;

    const nightTexture = textureLoader.load(
      '/textures/earth/earth_night.jpg',
      undefined,
      undefined,
      () => {
        const fallback = createProceduralNight();
        earthMaterial.uniforms.uNightMap.value = fallback;
      }
    );
    nightTexture.wrapS = THREE.RepeatWrapping;
    nightTexture.wrapT = THREE.ClampToEdgeWrapping;

    const specTexture = textureLoader.load('/textures/earth/earth_specular.jpg');
    specTexture.wrapS = THREE.RepeatWrapping;
    specTexture.wrapT = THREE.ClampToEdgeWrapping;

    const cloudsTexture = textureLoader.load('/textures/earth/earth_clouds.png');
    cloudsTexture.wrapS = THREE.RepeatWrapping;
    cloudsTexture.wrapT = THREE.ClampToEdgeWrapping;

    // --- Starfield Background ---
    const starsCount = 2800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);
    const starSizes = new Float32Array(starsCount);

    const tempColor = new THREE.Color();
    for (let i = 0; i < starsCount; i++) {
      const radius = 250 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      // Varied star spectral classes: blue-white, white, warm amber
      const rand = Math.random();
      if (rand > 0.8) tempColor.setHex(0x99ccff);
      else if (rand > 0.3) tempColor.setHex(0xffffff);
      else tempColor.setHex(0xffddaa);

      starColors[i * 3] = tempColor.r;
      starColors[i * 3 + 1] = tempColor.g;
      starColors[i * 3 + 2] = tempColor.b;

      starSizes[i] = 1.0 + Math.random() * 2.2;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: false
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // --- Realistic Earth Sphere & Custom Multi-Map Shader ---
    const EARTH_RADIUS = 2.0;
    const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64);

    const currentSunDir = new THREE.Vector3().copy(SOLVED_FRAMINGS[0].sunPos).normalize();

    const earthVertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const earthFragmentShader = `
      uniform sampler2D uDayMap;
      uniform sampler2D uNightMap;
      uniform sampler2D uSpecularMap;
      uniform vec3 uSunDirection;
      uniform vec3 uCameraPosition;
      uniform float uNightLightsMultiplier;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 sunDir = normalize(uSunDirection);
        vec3 viewDir = normalize(uCameraPosition - vWorldPosition);

        // Dot product between surface normal and sun direction
        float dotNL = dot(normal, sunDir);

        // Day/Night textures
        vec3 dayColor = texture2D(uDayMap, vUv).rgb;
        vec3 nightColor = texture2D(uNightMap, vUv).rgb;
        float specMask = texture2D(uSpecularMap, vUv).r;

        // Smooth transition across terminator line (-0.12 to 0.12)
        float dayFactor = smoothstep(-0.12, 0.14, dotNL);
        float nightFactor = 1.0 - smoothstep(-0.16, 0.08, dotNL);

        // Ambient deep space light on dark side
        vec3 ambientSpace = vec3(0.015, 0.02, 0.035);

        // Direct diffuse daylight
        float diffuse = max(dotNL, 0.0);
        vec3 sunLight = vec3(1.0, 0.98, 0.92) * diffuse;

        // Golden/Amber twilight band directly on the terminator line
        float twilightFactor = exp(-pow(dotNL * 11.0, 2.0));
        vec3 twilightGlow = vec3(1.0, 0.44, 0.16) * twilightFactor * 0.48;

        // Ocean specular glint from the sun
        vec3 halfVector = normalize(sunDir + viewDir);
        float NdotH = max(dot(normal, halfVector), 0.0);
        float specularHighlight = pow(NdotH, 45.0) * specMask * 1.8 * dayFactor;
        vec3 specular = vec3(1.0, 0.96, 0.88) * specularHighlight;

        // Golden city lights network on the dark hemisphere
        vec3 cityLights = nightColor * uNightLightsMultiplier * nightFactor;

        // Rayleigh atmosphere limb reflection on the globe edge
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
        vec3 limbGlow = vec3(0.12, 0.52, 1.0) * fresnel * (dayFactor * 0.75 + 0.18);

        // Composite planet surface
        vec3 compositeColor = (dayColor * (sunLight + ambientSpace))
                            + twilightGlow
                            + cityLights
                            + specular
                            + limbGlow;

        gl_FragColor = vec4(compositeColor, 1.0);
      }
    `;

    const earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayMap: { value: dayTexture },
        uNightMap: { value: nightTexture },
        uSpecularMap: { value: specTexture },
        uSunDirection: { value: currentSunDir },
        uCameraPosition: { value: camera.position },
        uNightLightsMultiplier: { value: 2.2 }
      }
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    // Earth axial tilt (23.4 degrees)
    earthMesh.rotation.z = THREE.MathUtils.degToRad(23.4);
    scene.add(earthMesh);

    // --- Dynamic Clouds Layer ---
    const cloudsGeometry = new THREE.SphereGeometry(EARTH_RADIUS * 1.012, 64, 64);
    const cloudsVertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const cloudsFragmentShader = `
      uniform sampler2D uCloudMap;
      uniform vec3 uSunDirection;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 sunDir = normalize(uSunDirection);
        float dotNL = dot(normal, sunDir);

        float dayFactor = smoothstep(-0.1, 0.22, dotNL);
        float cloudDensity = texture2D(uCloudMap, vUv).r;

        // Clouds are bright white on sun side, soft transparent on night side
        vec3 cloudColor = vec3(1.0, 0.98, 0.96) * (dayFactor * 0.95 + 0.08);
        float alpha = cloudDensity * (0.15 + dayFactor * 0.55);

        gl_FragColor = vec4(cloudColor, alpha);
      }
    `;

    const cloudsMaterial = new THREE.ShaderMaterial({
      vertexShader: cloudsVertexShader,
      fragmentShader: cloudsFragmentShader,
      uniforms: {
        uCloudMap: { value: cloudsTexture },
        uSunDirection: { value: currentSunDir }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMesh.rotation.z = THREE.MathUtils.degToRad(23.4);
    scene.add(cloudsMesh);

    // --- Atmosphere Outer Shell (Electric Blue Rayleigh Scattering) ---
    const atmosphereGeometry = new THREE.SphereGeometry(EARTH_RADIUS * 1.045, 64, 64);
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const atmosphereFragmentShader = `
      uniform vec3 uSunDirection;
      uniform vec3 uCameraPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
        vec3 normal = normalize(vNormal);
        vec3 sunDir = normalize(uSunDirection);

        // Fresnel falloff along grazing edge
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.4);

        // Directional Rayleigh scattering
        float sunFacing = max(dot(normal, sunDir), 0.0);
        // Forward scattering when looking toward sun through limb
        float forwardScatter = pow(max(dot(viewDir, -sunDir), 0.0), 3.8);

        // Color shifts from electric blue to warm sunset amber during forward scattering
        vec3 blueAtmos = vec3(0.18, 0.58, 1.0);
        vec3 sunsetAtmos = vec3(1.0, 0.45, 0.18);
        vec3 finalColor = mix(blueAtmos, sunsetAtmos, forwardScatter * 0.4);

        float alpha = fresnel * (0.35 + sunFacing * 0.65 + forwardScatter * 1.2);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: { value: currentSunDir },
        uCameraPosition: { value: camera.position }
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false
    });

    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // --- Key Light & Sun Object ---
    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    keyLight.position.copy(SOLVED_FRAMINGS[0].sunPos);
    scene.add(keyLight);

    // Ambient space fill
    const ambientLight = new THREE.AmbientLight(0x0a1020, 0.35);
    scene.add(ambientLight);

    // Sun Visual Billboard / Corona Flare
    const sunCanvas = document.createElement('canvas');
    sunCanvas.width = 256;
    sunCanvas.height = 256;
    const sctx = sunCanvas.getContext('2d');
    if (sctx) {
      const grad = sctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      grad.addColorStop(0.15, 'rgba(255, 240, 200, 0.9)');
      grad.addColorStop(0.4, 'rgba(255, 160, 60, 0.4)');
      grad.addColorStop(0.7, 'rgba(100, 180, 255, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 256, 256);
    }
    const sunTexture = new THREE.CanvasTexture(sunCanvas);

    const sunMaterial = new THREE.SpriteMaterial({
      map: sunTexture,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      transparent: true,
      depthWrite: false
    });
    const sunSprite = new THREE.Sprite(sunMaterial);
    sunSprite.scale.set(3.5, 3.5, 1);
    sunSprite.position.copy(SOLVED_FRAMINGS[0].sunPos);
    scene.add(sunSprite);

    // Anamorphic horizontal streak for Framing 4
    const streakCanvas = document.createElement('canvas');
    streakCanvas.width = 512;
    streakCanvas.height = 64;
    const stctx = streakCanvas.getContext('2d');
    if (stctx) {
      const sgrad = stctx.createLinearGradient(0, 32, 512, 32);
      sgrad.addColorStop(0, 'rgba(0, 150, 255, 0)');
      sgrad.addColorStop(0.4, 'rgba(0, 200, 255, 0.4)');
      sgrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
      sgrad.addColorStop(0.6, 'rgba(0, 200, 255, 0.4)');
      sgrad.addColorStop(1, 'rgba(0, 150, 255, 0)');
      stctx.fillStyle = sgrad;
      stctx.fillRect(0, 0, 512, 64);
    }
    const streakTexture = new THREE.CanvasTexture(streakCanvas);
    const streakMaterial = new THREE.SpriteMaterial({
      map: streakTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      opacity: 0.0
    });
    const streakSprite = new THREE.Sprite(streakMaterial);
    streakSprite.scale.set(8.0, 0.5, 1);
    streakSprite.position.copy(SOLVED_FRAMINGS[0].sunPos);
    scene.add(streakSprite);

    // --- Dynamic Interpolation Helpers ---
    const curCamPos = new THREE.Vector3().copy(SOLVED_FRAMINGS[0].camPos);
    const curCamTarget = new THREE.Vector3().copy(SOLVED_FRAMINGS[0].camTarget);
    const curSunPos = new THREE.Vector3().copy(SOLVED_FRAMINGS[0].sunPos);

    let lastCalculatedFraming = -1;

    // --- Render Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Earth slow planetary rotation
      earthMesh.rotation.y = elapsedTime * 0.025;
      // Clouds rotate slightly faster for atmospheric realism
      cloudsMesh.rotation.y = elapsedTime * 0.032;

      // Calculate Interpolation based on progress (0.0 to 1.0)
      const p = Math.max(0, Math.min(1, progressRef.current));
      const totalStages = SOLVED_FRAMINGS.length - 1; // 3 segments
      const segmentFloat = p * totalStages;
      const stageIndex = Math.min(Math.floor(segmentFloat), totalStages - 1);
      const segmentT = segmentFloat - stageIndex;

      // Smooth step easing between framings
      const smoothT = segmentT * segmentT * (3 - 2 * segmentT);

      const fA = SOLVED_FRAMINGS[stageIndex];
      const fB = SOLVED_FRAMINGS[stageIndex + 1];

      // Target vectors
      const targetCamPos = new THREE.Vector3().lerpVectors(fA.camPos, fB.camPos, smoothT);
      const targetCamTarget = new THREE.Vector3().lerpVectors(fA.camTarget, fB.camTarget, smoothT);
      const targetSunPos = new THREE.Vector3().lerpVectors(fA.sunPos, fB.sunPos, smoothT);

      // Smooth damping to targets for cinematic motion
      curCamPos.lerp(targetCamPos, 0.12);
      curCamTarget.lerp(targetCamTarget, 0.12);
      curSunPos.lerp(targetSunPos, 0.12);

      camera.position.copy(curCamPos);
      camera.lookAt(curCamTarget);

      // Update Sun and Light position
      keyLight.position.copy(curSunPos);
      sunSprite.position.copy(curSunPos);
      streakSprite.position.copy(curSunPos);

      const sunDirNormalized = new THREE.Vector3().copy(curSunPos).normalize();

      // Update Shader Uniforms
      earthMaterial.uniforms.uSunDirection.value.copy(sunDirNormalized);
      earthMaterial.uniforms.uCameraPosition.value.copy(camera.position);

      cloudsMaterial.uniforms.uSunDirection.value.copy(sunDirNormalized);
      atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirNormalized);
      atmosphereMaterial.uniforms.uCameraPosition.value.copy(camera.position);

      // Calculate Active Framing Index for UI notification
      const activeIdx = Math.round(segmentFloat);
      if (activeIdx !== lastCalculatedFraming) {
        lastCalculatedFraming = activeIdx;
        if (onFramingChangeRef.current) {
          onFramingChangeRef.current(activeIdx);
        }
      }

      // Dynamic Flare & Anamorphic Streak for Framing 4 (Sun Below Horizon)
      const targetFlare = THREE.MathUtils.lerp(fA.flareIntensity, fB.flareIntensity, smoothT);
      sunMaterial.opacity = 0.2 + targetFlare * 0.8;
      const sunScale = 2.2 + targetFlare * 3.2;
      sunSprite.scale.set(sunScale, sunScale, 1);

      // Anamorphic horizontal streak activates dramatically in Framing 4
      const streakOpacity = Math.max(0, (p - 0.75) / 0.25) * 0.95;
      streakMaterial.opacity = streakOpacity;
      streakSprite.scale.set(9.0 + streakOpacity * 4.0, 0.4 + streakOpacity * 0.4, 1);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container || isDisposed) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D WebGL Canvas Mount */}
      <div ref={containerRef} className="w-full h-full select-none" />

      {/* Subtle Loading overlay if textures still uploading */}
      {!hasLoadedTextures && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#02040a] text-cyan-400 font-mono text-xs z-10 transition-opacity duration-700 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>CALIBRATING ORBITAL TELEMETRY & TEXTURES...</span>
          </div>
        </div>
      )}
    </div>
  );
};
