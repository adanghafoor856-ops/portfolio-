import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  GitFork,
  Star,
  Code2,
  ExternalLink,
  Sparkles,
  Terminal,
  FolderGit2,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { teamMembers } from '../data/team';
import { ProfileAvatar } from '../components/ui/ProfileAvatar';
import { Button } from '../components/ui/Button';
import { GitHubRepo } from '../types';

export const GitHubPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [memberRepos, setMemberRepos] = useState<Record<string, GitHubRepo[]>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  // Fallback showcase repositories for initial placeholder state
  const fallbackRepos: Record<string, GitHubRepo[]> = {
    'adan-ghafoor': [
      {
        name: 'fullstack-nextjs-enterprise-starter',
        description: 'Production-ready Next.js 14 template with TypeScript, Tailwind CSS, and API routes.',
        language: 'TypeScript',
        stars: 12,
        forks: 4,
        url: 'https://github.com'
      },
      {
        name: 'node-express-microservices-template',
        description: 'Scalable REST API architecture with JWT authentication, rate limiting, and MongoDB.',
        language: 'JavaScript',
        stars: 8,
        forks: 2,
        url: 'https://github.com'
      }
    ],
    'muhammad-sameer-ali': [
      {
        name: 'scalable-backend-auth-engine',
        description: 'Robust authentication and authorization microservice using Node.js, Express, and PostgreSQL.',
        language: 'TypeScript',
        stars: 15,
        forks: 5,
        url: 'https://github.com'
      },
      {
        name: 'python-async-data-pipeline',
        description: 'High-throughput asynchronous ETL pipeline for structured database ingestion.',
        language: 'Python',
        stars: 10,
        forks: 3,
        url: 'https://github.com'
      }
    ],
    'ahmad-shehzad': [
      {
        name: 'flutter-cross-platform-ui-kit',
        description: 'Modern 60fps Flutter component library with smooth animations and responsive layouts.',
        language: 'Dart',
        stars: 14,
        forks: 6,
        url: 'https://github.com'
      },
      {
        name: 'react-native-firebase-starter',
        description: 'Cross-platform mobile application starter with offline synchronization and push notifications.',
        language: 'JavaScript',
        stars: 9,
        forks: 2,
        url: 'https://github.com'
      }
    ],
    'asad-abdullah': [
      {
        name: 'solidity-smart-contract-vault',
        description: 'Auditable EVM smart contracts for cryptographic asset proof and decentralized escrow.',
        language: 'Solidity',
        stars: 18,
        forks: 7,
        url: 'https://github.com'
      },
      {
        name: 'web3-ethers-wallet-connector',
        description: 'Lightweight library for connecting React frontends to EVM decentralized networks.',
        language: 'TypeScript',
        stars: 11,
        forks: 3,
        url: 'https://github.com'
      }
    ]
  };

  useEffect(() => {
    // Attempt dynamic fetch if a real valid GitHub username is supplied
    teamMembers.forEach((member) => {
      const username = member.githubUsername;
      const isPlaceholder = !username || username.includes('_USERNAME');

      if (!isPlaceholder) {
        setLoading((prev) => ({ ...prev, [member.slug]: true }));
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`)
          .then((res) => {
            if (!res.ok) throw new Error('GitHub API rate limit or user not found');
            return res.json();
          })
          .then((data: any[]) => {
            const formatted: GitHubRepo[] = data.map((r) => ({
              name: r.name,
              description: r.description || 'Public GitHub repository by ' + member.name,
              language: r.language || 'Code',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              url: r.html_url
            }));
            setMemberRepos((prev) => ({ ...prev, [member.slug]: formatted }));
          })
          .catch(() => {
            // Graceful fallback to initial placeholders
            setMemberRepos((prev) => ({
              ...prev,
              [member.slug]: fallbackRepos[member.slug] || []
            }));
          })
          .finally(() => {
            setLoading((prev) => ({ ...prev, [member.slug]: false }));
          });
      } else {
        setMemberRepos((prev) => ({
          ...prev,
          [member.slug]: fallbackRepos[member.slug] || []
        }));
      }
    });
  }, []);

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'typescript':
        return 'bg-blue-600';
      case 'javascript':
        return 'bg-amber-500';
      case 'python':
        return 'bg-emerald-600';
      case 'dart':
        return 'bg-indigo-600';
      case 'solidity':
        return 'bg-purple-600';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-4"
          >
            <Github className="w-3.5 h-3.5 text-indigo-600" />
            OPEN SOURCE & REPOSITORY MATRIX
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Explore <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Our Code
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Vertex Technologies engineers build transparent, maintainable, and type-safe open-source repositories. Explore individual team member codebases, featured templates, and technical experiments.
          </motion.p>
        </div>

        {/* 4 Member GitHub Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const repos = memberRepos[member.slug] || fallbackRepos[member.slug] || [];
            const isPlaceholderUsername = member.githubUsername.includes('_USERNAME');
            const isGithubPlaceholder = member.github === 'ADD_GITHUB_URL';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Member Info */}
                  <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <ProfileAvatar
                        name={member.name}
                        initials={member.initials}
                        imageSrc={member.image}
                        size="md"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs text-indigo-600 font-mono font-medium">{member.role}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 font-mono">
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                          <span>@{member.githubUsername}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={isGithubPlaceholder ? `https://github.com` : member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                      title="Visit GitHub Profile"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Programming Languages */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Primary Ecosystems
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.slice(0, 5).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Repositories */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5 text-indigo-700 font-bold">
                        <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
                        Featured Repositories
                      </span>
                      {isPlaceholderUsername && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                          Showcase Mode
                        </span>
                      )}
                    </div>

                    {repos.map((repo, rIdx) => (
                      <a
                        key={rIdx}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white transition-all group/repo shadow-xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-900 group-hover/repo:text-indigo-600 transition-colors font-mono line-clamp-1">
                            {repo.name}
                          </span>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover/repo:text-indigo-600 shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed mb-3 line-clamp-2">
                          {repo.description}
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
                          <span className="flex items-center gap-1.5 font-medium text-slate-700">
                            <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                            <span>{repo.language}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-500" />
                            <span>{repo.stars}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3 text-indigo-500" />
                            <span>{repo.forks}</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* View Member Profile Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Vertex Technologies Core Engineer
                  </span>
                  <button
                    onClick={() => onNavigate(`/team/${member.slug}`)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    View Full Profile →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Open Source Culture Note */}
        <div className="rounded-2xl p-8 bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <Terminal className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Configurable Repository Sync
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
            The Vertex Technologies portfolio is engineered to automatically fetch live public repository statistics, stars, and language breakdowns as soon as your active GitHub username is configured in the centralized data file.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onNavigate('/contact')}
          >
            Collaborate on an Open Source Project
          </Button>
        </div>
      </div>
    </div>
  );
};
