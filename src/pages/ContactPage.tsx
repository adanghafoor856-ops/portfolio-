import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  Phone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  UserCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const ContactPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const projectTypes = [
    'Web Development',
    'Backend Systems',
    'Mobile Application',
    'Blockchain & Web3',
    'AI Solution',
    'Technical Consultation'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief message describing your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        projectType: 'Web Development',
        message: ''
      });
      setErrors({});
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-50 border border-indigo-200/80 text-indigo-700 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            DIRECT CONTACT & INQUIRIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Let&apos;s Build <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Something Exceptional.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Looking to hire a high-performance software development team, discuss a new startup build, or consult with our leads? Reach out through our direct phone numbers, WhatsApp, or the inquiry form below.
          </motion.p>
        </div>

        {/* Direct Contacts Highlight Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Adan Ghafoor Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm shrink-0">
                  AG
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-slate-900 truncate">Adan Ghafoor</h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                      Full Stack Lead
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">Primary Client & Technical Contact</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between min-h-[44px]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                  <a
                    href="tel:+923020537184"
                    className="text-xs font-mono font-bold text-slate-900 hover:text-indigo-600 transition-colors truncate"
                  >
                    0302-0537184
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard('03020537184', 'adan_phone')}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedItem === 'adan_phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href="https://wa.me/923020537184"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300 flex items-center justify-center gap-2 text-xs font-semibold transition-all shadow-xs min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono flex-wrap gap-1">
              <span className="truncate">adanghafoor856@gmail.com</span>
              <button
                onClick={() => onNavigate('/team/adan-ghafoor')}
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline flex items-center gap-1 shrink-0"
              >
                View Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>

          {/* Muhammad Sameer Ali Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-base shadow-sm shrink-0">
                  SA
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-slate-900 truncate">Muhammad Sameer Ali</h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      Backend Lead
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">Backend Architecture & Systems Contact</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between min-h-[44px]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href="tel:+923161882970"
                    className="text-xs font-mono font-bold text-slate-900 hover:text-blue-600 transition-colors truncate"
                  >
                    0316-1882970
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard('03161882970', 'sameer_phone')}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedItem === 'sameer_phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href="https://wa.me/923161882970"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300 flex items-center justify-center gap-2 text-xs font-semibold transition-all shadow-xs min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono flex-wrap gap-1">
              <span className="truncate">alishameer@gmail.com</span>
              <button
                onClick={() => onNavigate('/team/muhammad-sameer-ali')}
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1 shrink-0"
              >
                View Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Aureon Technologies. Adan Ghafoor, Muhammad Sameer Ali, or our specialized lead will review your requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Send a Project Brief</h2>
                  <p className="text-xs text-slate-500">Fill out this quick form and our engineering team will get back to you promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-2">
                      Full Name <span className="text-indigo-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.fullName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Innovations"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-2">
                    Email Address <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-2">
                    Project Type <span className="text-indigo-600">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-mono font-medium transition-all text-left truncate cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                              : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-2">
                    Project Overview & Requirements <span className="text-indigo-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, tech preferences, target timeline, or how you want Aureon Technologies to collaborate..."
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.message
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Send Message to Aureon Technologies'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details & Direct Outreach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Engineering Email</h3>
                  <p className="text-xs text-slate-500">Fast response within 24 business hours</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 mb-6">
                <span className="text-xs font-mono text-indigo-700 font-semibold truncate">
                  adanghafoor856@gmail.com
                </span>
                <button
                  onClick={() => copyToClipboard('adanghafoor856@gmail.com', 'main_email')}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-400 transition-colors shadow-xs"
                  title="Copy email"
                >
                  {copiedItem === 'main_email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Availability: Active & open for new client & startup projects</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>NDA & Confidentiality friendly from day one</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated technical leads for full stack & backend</span>
                </div>
              </div>
            </div>

            {/* Team Roles & Contact Directory */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm">
              <span className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider block mb-4">
                Team Directory
              </span>
              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <div className="font-bold text-slate-900">Adan Ghafoor</div>
                    <div className="text-[11px] text-slate-500 font-mono">0302-0537184</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-50 text-purple-700 border border-purple-200">
                    Full Stack Lead
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <div className="font-bold text-slate-900">Muhammad Sameer Ali</div>
                    <div className="text-[11px] text-slate-500 font-mono">0316-1882970</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200">
                    Backend Lead
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <div className="font-bold text-slate-900">Ahmad Shehzad</div>
                    <div className="text-[11px] text-slate-500 font-mono">Mobile Specialist</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Mobile & Flutter
                  </span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <div>
                    <div className="font-bold text-slate-900">Asad Abdullah</div>
                    <div className="text-[11px] text-slate-500 font-mono">Blockchain Specialist</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                    Solidity & Web3
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

