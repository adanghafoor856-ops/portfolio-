import React, { useState } from 'react';
import { Upload, Sparkles } from 'lucide-react';

interface ProfileAvatarProps {
  name: string;
  initials: string;
  imageSrc: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showUploadHint?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  initials,
  imageSrc,
  size = 'md',
  className = '',
  showUploadHint = false
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-24 h-24 text-xl',
    lg: 'w-36 h-36 text-2xl',
    xl: 'w-48 h-48 text-3xl',
    hero: 'w-64 h-64 sm:w-72 sm:h-72 text-4xl'
  };

  const getGradientByName = (str: string) => {
    const gradients = [
      'from-purple-900 via-indigo-950 to-slate-900 border-purple-500/40 text-purple-200',
      'from-blue-900 via-slate-900 to-cyan-950 border-cyan-500/40 text-cyan-200',
      'from-emerald-950 via-teal-950 to-slate-900 border-emerald-500/40 text-emerald-200',
      'from-amber-950 via-slate-900 to-orange-950 border-amber-500/40 text-amber-200'
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <div className={`relative group shrink-0 rounded-2xl overflow-hidden ${sizeClasses[size]} ${className}`}>
      {/* Glow aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center shadow-inner">
        {!imageError && imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${getGradientByName(name)} flex flex-col items-center justify-center p-3 text-center select-none relative`}
          >
            {/* Tech subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />

            <span className="font-mono font-bold tracking-wider mb-1 z-10">{initials}</span>
            <span className="text-[11px] sm:text-xs font-semibold leading-tight text-slate-200 line-clamp-1 z-10 px-1">
              {name}
            </span>

            {showUploadHint && (size === 'xl' || size === 'hero' || size === 'lg') && (
              <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-cyan-300 font-medium bg-black/50 px-2 py-0.5 rounded-full border border-cyan-500/30 z-10">
                <Upload className="w-2.5 h-2.5" />
                <span>Custom Avatar</span>
              </div>
            )}
          </div>
        )}

        {/* Decorative corner indicator */}
        <div className="absolute top-2 right-2 flex items-center justify-center bg-white/70 backdrop-blur-xs p-1 rounded-full shadow-xs border border-white/80">
          <Sparkles className="w-3 h-3 text-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};
