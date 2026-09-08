'use client';

import React from 'react';
import Link from 'next/link';

interface DenebLogoProps {
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  className?: string;
  showVersion?: boolean;
}

export function DenebStarIcon({ className = 'w-4 h-4', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ color: '#818CF8', ...style }}
      aria-hidden="true"
    >
      {/* 4-point celestial star with subtle flares */}
      <path d="M12 0C12.4 6.6 17.4 11.6 24 12C17.4 12.4 12.4 17.4 12 24C11.6 17.4 6.6 12.4 0 12C6.6 11.6 11.6 6.6 12 0Z" />
    </svg>
  );
}

export function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function DenebLogo({ size = 'md', asLink = true, className = '', showVersion = false }: DenebLogoProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2.5',
  };

  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const badge = (
    <div
      className={`inline-flex items-center rounded-lg border border-[#23283B] bg-[#0A0D17]/90 backdrop-blur-md shadow-sm transition-all duration-200 hover:border-[#818CF8]/50 hover:shadow-[0_0_16px_rgba(129,140,248,0.25)] group select-none ${sizeClasses[size]} ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <DenebStarIcon className={`${starSizes[size]} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} />
        {/* Subtle star glow */}
        <span className="absolute inset-0 rounded-full blur-sm bg-[#818CF8]/40 -z-10" />
      </div>

      <span
        className="font-black tracking-wider uppercase text-white font-sans transition-all duration-200"
        style={{
          textShadow:
            '-1px 0 0.5px rgba(239,68,68,0.7), 1px 0 0.5px rgba(56,189,248,0.8), 0 0 10px rgba(129,140,248,0.4)',
          letterSpacing: '0.08em',
        }}
      >
        DENEB UI
      </span>

      {showVersion && (
        <span className="ml-1 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#818CF8]/10 text-[#A5B4FC] border border-[#818CF8]/20">
          v2.0
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-block transition-transform active:scale-95 focus:outline-none">
        {badge}
      </Link>
    );
  }

  return badge;
}
