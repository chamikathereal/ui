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
    { id: 'cli', title: 'Use the CLI' },
    { id: 'existing', title: 'Manual Installation' },
    { id: 'frameworks', title: 'Framework Guides' },
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
    <div className="flex w-full justify-between gap-10">
      <div className="flex-1 min-w-0 max-w-4xl py-6 space-y-10">
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

        {/* Green/Indigo Recommended Highlight Banner (like shadcn/ui) */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#0E1524] to-emerald-950/30 p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <span>Recommended for new projects</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Fastest
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed mb-3">
                Use <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">create-deneb</code> to scaffold a pre-validated, high-converting storefront with all smart action components configured out of the box.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <CodeBlock
                  code="npx @deneb-ui/create-template my-store"
                  language="bash"
                  className="!my-0 !p-2 max-w-md text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pathway Cards (Use deneb/create, Use the CLI, Existing Project) */}
        <div id="quickstart" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Choose your setup pathway
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pathway 1 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Use create-template</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Build your storefront preset visually and generate a full production template.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B]">
                <code className="text-[11px] font-mono text-[#A5B4FC]">npx create-deneb</code>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 group-hover:scale-105 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Use the CLI</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Scaffold or add individual components into your existing repository on demand.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B]">
                <code className="text-[11px] font-mono text-[#A5B4FC]">deneb add &lt;comp&gt;</code>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 group-hover:scale-105 transition-transform">
                  <Boxes className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Package Install</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Import pre-built primitives directly from the zero-dependency npm package.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B]">
                <code className="text-[11px] font-mono text-[#A5B4FC]">npm i @deneb-ui/ui</code>
              </div>
            </div>
          </div>
        </div>

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
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                <span>Which style would you like to use? › <strong className="text-white">Celestial Dark (Deneb)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                <span>Which color would you like as base? › <strong className="text-white">Obsidian & Indigo (#818CF8)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                <span>Where is your global CSS file? › <strong className="text-white">src/app/globals.css</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                <span>Configure import alias for components? › <strong className="text-white">@/components</strong></span>
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
