'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DenebLogoProps {
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  className?: string;
  showVersion?: boolean;
  color?: 'blue' | 'white';
}

export function DenebStarIcon({
  className = 'w-4 h-4',
  color = 'blue',
  style,
}: {
  className?: string;
  color?: 'blue' | 'white';
  style?: React.CSSProperties;
}) {
  const iconSrc =
    color === 'white'
      ? '/assets/transperent-white-logo/1.png'
      : '/assets/transperent-blue-logo/1.png';

  return (
    <Image
      src={iconSrc}
      alt="Deneb Celestial Star"
      width={48}
      height={48}
      className={`inline-block object-contain ${className}`}
      style={style}
    />
  );
}

export function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function DenebLogo({
  size = 'md',
  asLink = true,
  className = '',
  showVersion = false,
  color = 'blue',
}: DenebLogoProps) {
  const logoDimensions = {
    sm: { width: 120, height: 24, className: 'h-6 w-auto' },
    md: { width: 155, height: 31, className: 'h-7.5 w-auto' },
    lg: { width: 210, height: 42, className: 'h-10 w-auto' },
  };

  const logoSrc =
    color === 'white'
      ? '/assets/transperent-white-cover-logo/3.png'
      : '/assets/transperent-blue-cover-logo/3.png';

  const { width, height, className: imgHeightClass } = logoDimensions[size];

  const content = (
    <div
      className={`inline-flex items-center gap-2 select-none group transition-all duration-200 ${className}`}
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Deneb UI"
          width={width}
          height={height}
          priority
          className={`${imgHeightClass} object-contain transition-all duration-200 group-hover:brightness-110 group-hover:drop-shadow-[0_0_14px_rgba(129,140,248,0.45)]`}
        />
      </div>

      {showVersion && (
        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#818CF8]/10 text-[#A5B4FC] border border-[#818CF8]/20 self-center">
          v2.0
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center transition-transform active:scale-95 focus:outline-none"
      >
        {content}
      </Link>
    );
  }

  return content;
}
