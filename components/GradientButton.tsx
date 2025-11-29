import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'purple' | 'emerald';
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

const gradients = {
  gold: 'from-accent-500 via-accent-600 to-amber-600',
  purple: 'from-primary-600 via-primary-700 to-indigo-700',
  emerald: 'from-secondary-500 via-secondary-600 to-teal-600',
};

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function GradientButton({
  href,
  children,
  size = 'md',
  variant = 'gold',
  fullWidth = false,
  icon,
  className = '',
  ...props
}: GradientButtonProps) {
  const baseStyles = `
    group relative inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    bg-gradient-to-r ${gradients[variant]}
    text-white
    shadow-lg hover:shadow-xl
    transition-all duration-300
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-4 focus:ring-accent-300/50
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    overflow-hidden
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const shimmerEffect = `
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-200%]
    hover:before:translate-x-[200%]
    before:transition-transform before:duration-700
  `;

  const combinedStyles = `${baseStyles} ${shimmerEffect}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
