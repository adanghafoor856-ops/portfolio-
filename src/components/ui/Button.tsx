import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'min-h-[38px] sm:min-h-[36px] px-3.5 py-2 sm:py-1.5 text-xs font-medium gap-1.5 rounded-lg',
    md: 'min-h-[44px] px-5 py-2.5 text-sm font-medium gap-2 rounded-xl',
    lg: 'min-h-[48px] px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold gap-2.5 rounded-xl'
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 border border-transparent',
    secondary:
      'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-indigo-500/50 shadow-sm hover:shadow-indigo-500/10',
    outline:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent'
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center cursor-pointer transition-all duration-200 select-none whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </motion.button>
  );
};
