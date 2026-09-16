import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { TeamMember } from '../../types';
import { ProfileAvatar } from '../ui/ProfileAvatar';
import { Button } from '../ui/Button';

interface TeamCardProps {
  member: TeamMember;
  onNavigate: (path: string) => void;
  index?: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, onNavigate, index = 0 }) => {
  const isGithubPlaceholder = member.github === 'ADD_GITHUB_URL';
  const isLinkedinPlaceholder = member.linkedin === 'ADD_LINKEDIN_URL';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 overflow-hidden"
    >
      {/* Background Spotlight on Hover */}
      <div className="absolute -inset-24 bg-gradient-to-tr from-purple-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative accent top line */}
      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${member.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

      <div>
        {/* Profile Avatar & Header info */}
        <div className="flex items-start gap-4 mb-5">
          <ProfileAvatar
            name={member.name}
            initials={member.initials}
            imageSrc={member.image}
            size="md"
            showUploadHint={false}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 font-semibold">
                {member.leadSpecialization}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors line-clamp-1">
              {member.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
              {member.role}
            </p>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {member.shortBio}
        </p>

        {/* Phone Contact Badge if available */}
        {member.phone && (
          <div className="mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Contact:</span>
            <a
              href={`tel:${member.phone}`}
              className="font-bold text-slate-900 hover:text-indigo-600 transition-colors"
            >
              {member.phone}
            </a>
          </div>
        )}

        {/* Skills Pills */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Code2 className="w-3 h-3 text-indigo-500" />
              Core Stack
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              +{member.skills.length} skills
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.slice(0, 5).map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono group-hover:border-slate-300 transition-colors"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 5 && (
              <span className="text-[10px] px-2 py-0.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono">
                +{member.skills.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer: Social Buttons & View Profile */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-2">
          {/* GitHub button */}
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
            aria-label={`${member.name} GitHub`}
            title={isGithubPlaceholder ? 'Configure GitHub URL' : 'Visit GitHub Profile'}
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-400 hover:bg-slate-100 transition-all cursor-pointer group/social"
          >
            <Github className="w-4 h-4 transition-transform group-hover/social:scale-110" />
          </a>

          {/* LinkedIn button */}
          <a
            href={isLinkedinPlaceholder ? '#' : member.linkedin}
            target={isLinkedinPlaceholder ? '_self' : '_blank'}
            rel="noreferrer"
            onClick={(e) => {
              if (isLinkedinPlaceholder) {
                e.preventDefault();
                onNavigate(`/team/${member.slug}`);
              }
            }}
            aria-label={`${member.name} LinkedIn`}
            title={isLinkedinPlaceholder ? 'Configure LinkedIn URL' : 'Visit LinkedIn Profile'}
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-blue-400 hover:bg-slate-100 transition-all cursor-pointer group/social"
          >
            <Linkedin className="w-4 h-4 transition-transform group-hover/social:scale-110" />
          </a>
        </div>

        {/* View Profile CTA */}
        <Button
          variant="secondary"
          size="sm"
          className="text-xs font-semibold hover:border-indigo-400"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          onClick={() => onNavigate(`/team/${member.slug}`)}
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};
