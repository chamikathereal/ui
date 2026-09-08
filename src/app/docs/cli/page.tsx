'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Sparkles, Check, ArrowRight, ShieldCheck, Box } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function CliReferencePage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'CLI Overview' },
    { id: 'add', title: 'deneb add' },
    { id: 'validate', title: 'deneb validate' },
    { id: 'create', title: 'create-template' },
  ];

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">CLI Reference</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              CLI Reference
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              @deneb-ui/cli
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Command line tools for managing components, scaffolding storefront templates, and validating template compliance.
          </p>
        </div>

        {/* deneb add */}
        <section id="add" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>deneb add</span>
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Add specific components directly into your project&apos;s <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">src/components/ui/</code> directory:
          </p>

          <CodeBlock
            code={`# List all available components:\nnpx @deneb-ui/cli add list\n\n# Add individual smart action components:\nnpx @deneb-ui/cli add contact-actions\nnpx @deneb-ui/cli add whatsapp-button\nnpx @deneb-ui/cli add location-card\nnpx @deneb-ui/cli add product-card\n\n# Install the entire component suite at once:\nnpx @deneb-ui/cli add all`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* create-template */}
        <section id="create" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Box className="w-5 h-5 text-[#818CF8]" />
            <span>@deneb-ui/create-template</span>
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Scaffold a full Next.js or React storefront with built-in visual editing bindings and pre-configured smart action modules:
          </p>

          <CodeBlock
            code={`# Scaffold via create-template\nnpx @deneb-ui/create-template my-storefront\n\n# Or with shorthand alias\nnpx create-deneb my-storefront`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* deneb validate */}
        <section id="validate" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#818CF8]" />
            <span>deneb validate</span>
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Run compliance and preflight validation checks against your template to verify data bindings, field paths, and zero broken links:
          </p>

          <CodeBlock
            code={`npx @deneb-ui/cli validate . --skip-install`}
            language="bash"
            filename="terminal"
          />
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-end">
          <Link
            href="/docs/components/button"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Browse Components</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
