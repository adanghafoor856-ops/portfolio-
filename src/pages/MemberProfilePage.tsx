import React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowLeft,
  Sparkles,
  Layers,
  Code2,
  ExternalLink,
  CheckCircle2,
  FolderKanban,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare
} from 'lucide-react';
import { getMemberBySlug, teamMembers } from '../data/team';
import { getProjectsForMember } from '../data/projects';
import { ProfileAvatar } from '../components/ui/ProfileAvatar';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/projects/ProjectCard';

interface MemberProfilePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const MemberProfilePage: React.FC<MemberProfilePageProps> = ({ slug, onNavigate }) => {
  const member = getMemberBySlug(slug);

  if (!member) {
    return (
      <div className="pt-32 pb-24 text-center max-w-lg mx-auto px-4">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Team Member Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">
            The requested engineer profile could not be located.
          </p>
          <Button
            variant="primary"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            onClick={() => onNavigate('/team')}
          >
            Back to Team
          </Button>
        </div>
      </div>
    );
  }

  const memberProjects = getProjectsForMember(member.slug);
  const isGithubPlaceholder = member.github === 'ADD_GITHUB_URL';
  const isLinkedinPlaceholder = member.linkedin === 'ADD_LINKEDIN_URL';
  const isEmailPlaceholder = member.email === 'ADD_EMAIL';

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation Bar */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/team')}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Team Members</span>
          </button>
        </div>

        {/* PROFILE HERO */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 relative overflow-hidden mb-16 shadow-sm">
          {/* Subtle Ambient Background Gradient */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${member.accentColor} opacity-10 rounded-full blur-3xl pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Avatar */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <ProfileAvatar
                name={member.name}
                initials={member.initials}
                imageSrc={member.image}
                size="hero"
                showUploadHint={true}
                className="shadow-xl"
              />
            </div>

            {/* Right: Hero Information */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700">
                  Software Engineer
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-50 border border-purple-200 text-purple-700">
                  {member.leadSpecialization}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {member.name}
              </h1>

              {/* Role */}
              <p className="text-base sm:text-lg font-medium text-indigo-600 font-mono">
                {member.role}
              </p>

              {/* Short Introduction */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {member.shortBio}
              </p>

              {/* Social & Contact Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {/* Phone & WhatsApp if present */}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:text-indigo-600 hover:border-indigo-300 text-xs font-medium transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-indigo-600" />
                    <span className="font-mono">{member.phone}</span>
                  </a>
                )}

                {member.whatsapp && (
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-medium transition-all shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                )}

                {/* GitHub */}
                <a
                  href={isGithubPlaceholder ? '#' : member.github}
                  target={isGithubPlaceholder ? '_self' : '_blank'}
                  rel="noreferrer"
                  onClick={(e) => {
                    if (isGithubPlaceholder) {
                      e.preventDefault();
                      onNavigate('/github');
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4 text-slate-700" />
                  <span>{isGithubPlaceholder ? `@${member.githubUsername}` : 'GitHub Profile'}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={isLinkedinPlaceholder ? '#' : member.linkedin}
                  target={isLinkedinPlaceholder ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>

                {/* Email */}
                <a
                  href={isEmailPlaceholder ? '#' : `mailto:${member.email}`}
                  onClick={(e) => {
                    if (isEmailPlaceholder) {
                      e.preventDefault();
                      onNavigate('/contact');
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 text-xs font-medium transition-all max-w-full"
                >
                  <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="font-mono truncate">{member.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ABOUT / PROFESSIONAL BIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Professional Bio & Engineering Focus</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {member.fullBio}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Key Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {member.specializations.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-700 mb-3 font-semibold">
                Team Role & Association
              </h3>
              <div className="text-sm font-bold text-slate-900 mb-1">{member.role}</div>
              <div className="text-xs text-slate-500">Core Member of Aureon Technologies</div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="flex justify-between">
                  <span>GitHub Handle:</span>
                  <span className="font-mono text-indigo-600 font-semibold">@{member.githubUsername}</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct Contact:</span>
                  <span className="font-mono text-slate-800">{member.email}</span>
                </div>
                {member.phone && (
                  <div className="flex justify-between">
                    <span>Phone Number:</span>
                    <span className="font-mono font-bold text-slate-900">{member.phone}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 mb-3 font-semibold">
                Total Technical Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: EXPERTISE */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider font-semibold">
              Proficiency Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Categorized Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {member.categorizedSkills.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900 font-mono">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: PROJECTS INVOLVING THIS MEMBER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-purple-700 uppercase tracking-wider font-semibold">
                Engineering Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Collaborative Projects & Contributions
              </h2>
            </div>
            <Button
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('/projects')}
            >
              All Projects
            </Button>
          </div>

          {memberProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberProjects.map((project, pIdx) => {
                const contribution = project.contributions.find(
                  (c) => c.memberSlug.toLowerCase() === member.slug.toLowerCase()
                );
                return (
                  <div key={project.id} className="flex flex-col">
                    <ProjectCard project={project} onNavigate={onNavigate} index={pIdx} />
                    {contribution && (
                      <div className="mt-3 p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-slate-700">
                        <span className="font-semibold text-purple-900 block mb-0.5">
                          {member.name}&apos;s Contribution:
                        </span>
                        <p className="text-slate-600">{contribution.contribution}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 text-slate-500 text-xs">
              Currently preparing new project releases.
            </div>
          )}
        </div>

        {/* SECTION 5: CONTACT CTA */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-200 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-indigo-700 uppercase tracking-wider font-bold">
              COLLABORATION OPPORTUNITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Interested in working with {member.name}?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach out directly to discuss technical consulting, full stack architecture, mobile app builds, smart contracts, or comprehensive project development with Aureon Technologies.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onNavigate('/contact')}
              >
                Contact Aureon Technologies
              </Button>

              <a
                href={isGithubPlaceholder ? '#' : member.github}
                target={isGithubPlaceholder ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => {
                  if (isGithubPlaceholder) {
                    e.preventDefault();
                    onNavigate('/github');
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium transition-all shadow-xs"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={isLinkedinPlaceholder ? '#' : member.linkedin}
                target={isLinkedinPlaceholder ? '_self' : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

