'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Terminal,
  FolderGit2,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Zap,
  Code2,
  Layers,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function InstallationPage() {
  const [pm, setPm] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');
  const [framework, setFramework] = useState<'nextjs' | 'vite'>('nextjs');

  const tocItems: TocItem[] = [
    { id: 'quickstart', title: 'Quick Scaffolding' },
    { id: 'create-template', title: 'Use create-template' },
    { id: 'cli', title: 'Use the CLI' },
    { id: 'existing', title: 'Manual Installation' },
  ];

  const getCliCommand = () => {
    switch (pm) {
      case 'pnpm':
        return 'pnpm dlx @deneb-ui/cli init';
      case 'yarn':
        return 'yarn dlx @deneb-ui/cli init';
      case 'bun':
        return 'bunx @deneb-ui/cli init';
      default:
        return 'npx @deneb-ui/cli init';
    }
  };

  const getPackageInstall = () => {
    switch (pm) {
      case 'pnpm':
        return 'pnpm add @deneb-ui/ui';
      case 'yarn':
        return 'yarn add @deneb-ui/ui';
      case 'bun':
        return 'bun add @deneb-ui/ui';
      default:
        return 'npm install @deneb-ui/ui';
    }
  };

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Installation</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Installation
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1 shadow-[0_0_10px_rgba(129,140,248,0.2)]">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            How to install dependencies and structure your application with DENEB UI.
          </p>
        </div>

        {/* Recommended Highlight Banner (like shadcn/ui) */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          <strong className="font-semibold text-emerald-300">Recommended for new projects:</strong> Use <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-white">create-deneb</code> to build your preset visually and generate the right setup command for your framework.
        </div>

        {/* 3 Pathway Cards (like shadcn/ui) */}
        <div id="quickstart" className="space-y-3">
          <p className="text-sm font-medium text-white">
            Choose the setup that matches your starting point.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pathway 1 */}
            <a
              href="#create-template"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Use create-template</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Build your storefront preset visually and generate a full production template.
                </p>
              </div>
            </a>

            {/* Pathway 2 */}
            <a
              href="#cli"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Use the CLI</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Scaffold a supported template directly from the terminal.
                </p>
              </div>
            </a>

            {/* Pathway 3 */}
            <a
              href="#existing"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Existing Project</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Add @deneb-ui/ui to an app you already created.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Section 1: Use create-template */}
        <section id="create-template" className="space-y-3 pt-6 border-t border-[#23283B]">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Use create-template
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Build your preset visually, preview your choices, and generate a framework-specific setup command.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/docs/templates"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-md"
            >
              <span>Open create-template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="text-xs text-[#64748B]">
            Available for Next.js, Vite, and React storefront presets.
          </p>
        </section>

        {/* Step-by-Step CLI Guide */}
        <section id="cli" className="space-y-6 pt-4 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Scaffold with the CLI
            </h2>
            <p className="text-sm text-[#94A3B8]">
              The official CLI initializes your Tailwind config, sets up celestial variables, and configures path aliases automatically.
            </p>
          </div>

          {/* Package Manager Selector */}
          <div className="space-y-3">
            <div className="flex items-center gap-1 border-b border-[#23283B] pb-1">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setPm(item)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    pm === item
                      ? 'text-[#818CF8] bg-[#818CF8]/10 border border-[#818CF8]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <CodeBlock code={getCliCommand()} language="bash" filename="terminal" />
          </div>

          {/* Questions Asked */}
          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">
              CLI interactive prompts:
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                <span className="break-words">Which style would you like to use? › <strong className="text-white">Celestial Dark (Deneb)</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                <span className="break-words">Which color would you like as base? › <strong className="text-white">Obsidian & Indigo (#818CF8)</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                <span className="break-words">Where is your global CSS file? › <strong className="text-white">src/app/globals.css</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                <span className="break-words">Configure import alias for components? › <strong className="text-white">@/components</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Project Manual Installation */}
        <section id="existing" className="space-y-6 pt-4 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Manual Package Setup
            </h2>
            <p className="text-sm text-[#94A3B8]">
              If you prefer installing the framework package without the interactive CLI:
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#CBD5E1]">Step 1: Install @deneb-ui/ui</span>
              <CodeBlock code={getPackageInstall()} language="bash" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#CBD5E1]">Step 2: Import and render components</span>
              <CodeBlock
                code={`import {\n  Button,\n  Card,\n  ContactActions,\n  WhatsAppButton,\n  ProductCard,\n  BusinessHours\n} from "@deneb-ui/ui";\n\nexport default function Page() {\n  return (\n    <main className="p-8 space-y-6">\n      <h1 className="text-3xl font-bold">My Storefront</h1>\n      <ContactActions \n        phone="+1234567890" \n        whatsapp="1234567890" \n        email="hello@example.com" \n      />\n      <Button variant="glow">Explore Catalog</Button>\n    </main>\n  );\n}`}
                language="tsx"
                filename="app/page.tsx"
              />
            </div>
          </div>
        </section>

        {/* Next link */}
        <div className="pt-8 border-t border-[#23283B] flex justify-end">
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Theming & Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
