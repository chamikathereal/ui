'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  className = '',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className={`relative w-full min-w-0 max-w-full rounded-xl border border-[#23283B] bg-[#0A0D17] font-mono text-sm overflow-hidden shadow-lg group ${className}`.trim()}
    >
      {filename && (
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 border-b border-[#23283B] bg-[#0E1220]/60 text-xs text-[#94A3B8]">
          <span className="font-mono truncate mr-2">{filename}</span>
          <span className="shrink-0 uppercase text-[10px] text-[#818CF8] bg-[#818CF8]/10 px-2 py-0.5 rounded border border-[#818CF8]/20">
            {language}
          </span>
        </div>
      )}

      {/* Copy button is pinned to the outer card so horizontal scrolling never moves it off-screen */}
      <button
        onClick={handleCopy}
        className={`absolute ${filename ? 'top-10 sm:top-11' : 'top-2.5 sm:top-3'} right-2.5 sm:right-3 z-20 p-1.5 rounded-lg border border-[#23283B] bg-[#141827]/95 backdrop-blur-md text-[#94A3B8] hover:text-white hover:border-[#818CF8]/50 hover:bg-[#818CF8]/20 transition-all opacity-90 hover:opacity-100 focus:outline-none shadow-md`}
        title="Copy code"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <div className="flex items-center gap-1 text-[#4ADE80] text-xs font-sans px-1">
            <Check className="w-3.5 h-3.5" />
            <span>Copied</span>
          </div>
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Horizontal scrollable code container */}
      <div className="p-3 sm:p-4 overflow-x-auto w-full min-w-0">
        <pre className="text-xs sm:text-[13px] leading-relaxed text-[#E2E8F0] font-mono pr-12 sm:pr-14">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
