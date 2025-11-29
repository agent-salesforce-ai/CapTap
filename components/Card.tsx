import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  hover?: boolean;
}

const variants = {
  default: 'bg-white border border-gray-100',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20',
  gradient: 'bg-gradient-to-br from-white via-white to-primary-50 border border-primary-100',
  elevated: 'bg-white border border-gray-100 shadow-card',
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6
        ${variants[variant]}
        ${hover ? 'hover-lift' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardIcon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
