'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Sparkles, Check, ArrowRight, ShieldCheck, Box, RefreshCw, FolderArchive, PackageCheck, Zap } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function CliReferencePage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'CLI Overview' },
    { id: 'init', title: 'deneb init' },
    { id: 'update', title: 'deneb update' },
    { id: 'validate', title: 'deneb validate' },
    { id: 'zip', title: 'deneb zip' },
    { id: 'validate-and-zip', title: 'deneb validate-and-zip' },
    { id: 'add', title: 'deneb add' },
    { id: 'create', title: 'deneb create' },
    { id: 'lab', title: 'deneb lab' },
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
            The official command line interface for authoring, configuring, updating, validating, and packaging DENEB storefront templates for the Fivora platform.
          </p>
        </div>

        {/* Quick Commands Summary Table */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>Command Quick Reference</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Command</th>
                  <th className="p-3 sm:p-4">Purpose</th>
                  <th className="p-3 sm:p-4">Key Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init</td>
                  <td className="p-3 sm:p-4">Initialize & configure existing Next.js app for Fivora</td>
                  <td className="p-3 sm:p-4 text-emerald-400">fivora-template.json, site-data.json, scripts</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb update</td>
                  <td className="p-3 sm:p-4">Update @deneb-ui packages & refresh DENEB components</td>
                  <td className="p-3 sm:p-4 text-emerald-400">Latest npm packages & src/components/ui sync</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb validate</td>
                  <td className="p-3 sm:p-4">Check website configuration & visual editing contracts</td>
                  <td className="p-3 sm:p-4 text-emerald-400">Preflight diagnostic report</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb zip</td>
                  <td className="p-3 sm:p-4">Zip project cleanly without junk files (node_modules, .next, .git)</td>
                  <td className="p-3 sm:p-4 text-emerald-400">fivora-template.zip</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb validate-and-zip</td>
                  <td className="p-3 sm:p-4">Validate preflight checks and bundle clean upload ZIP in 1 step</td>
                  <td className="p-3 sm:p-4 text-[#818CF8]">Verified fivora-template.zip</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 1. deneb init */}
        <section id="init" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#818CF8]" />
            <span>1. deneb init (Initialize Project)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Converts any ongoing or existing Next.js project into a certified Fivora storefront template. It scans your pages, creates the version 2 contract manifest, sets up merchant default data, injects developer scripts, and installs <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">@deneb-ui/ui</code>:
          </p>

          <CodeBlock
            code={`# Inside your Next.js project root:\nnpx @deneb-ui/cli init\n\n# Or if installed globally / devDependencies:\ndeneb init`}
            language="bash"
            filename="terminal"
          />

          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] text-xs text-[#94A3B8] space-y-2">
            <div className="font-semibold text-white">What deneb init configures automatically:</div>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">fivora-template.json:</strong> Generates Manifest v2 with strict visual editing and declared pages.</li>
              <li><strong className="text-white">src/data/site-data.json:</strong> Creates the merchant configuration and content structure.</li>
              <li><strong className="text-white">package.json scripts:</strong> Injects <code className="text-white font-mono">lab</code>, <code className="text-white font-mono">validate</code>, <code className="text-white font-mono">zip</code>, <code className="text-white font-mono">validate-and-zip</code>, and <code className="text-white font-mono">update:deneb</code>.</li>
              <li><strong className="text-white">Dependencies:</strong> Installs <code className="text-white font-mono">@deneb-ui/ui</code> and <code className="text-white font-mono">@deneb-ui/cli</code>.</li>
            </ul>
          </div>
        </section>

        {/* 2. deneb update */}
        <section id="update" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#818CF8]" />
            <span>2. deneb update (Update Packages & Components)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Upgrades <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">@deneb-ui/ui</code> and <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">@deneb-ui/cli</code> to the latest releases, and automatically synchronizes all installed components in <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">src/components/ui/</code> with the latest registry blueprints.
          </p>

          <CodeBlock
            code={`# Update packages and installed DENEB UI components:\nnpx @deneb-ui/cli update\n\n# Or with project script:\nnpm run update:deneb`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 3. deneb validate */}
        <section id="validate" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>3. deneb validate (Preflight Contract Validator)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Runs compliance checks against your template to verify data bindings, field paths, static markers, and zero broken links. Also supports the <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">--zip</code> flag to bundle upon validation:
          </p>

          <CodeBlock
            code={`# Run preflight validation:\nnpx @deneb-ui/cli validate .\n\n# Or with skip flags for rapid local diagnostics:\nnpx @deneb-ui/cli validate . --skip-install\n\n# Validate and immediately package clean ZIP on success:\nnpx @deneb-ui/cli validate --zip`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 4. deneb zip */}
        <section id="zip" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <FolderArchive className="w-5 h-5 text-[#818CF8]" />
            <span>4. deneb zip / pack (Clean ZIP Packaging)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Packages your storefront source into an upload-ready <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">fivora-template.zip</code>, automatically excluding unnecessary folders, caches, and secret files (<code className="text-white font-mono">node_modules</code>, <code className="text-white font-mono">.next</code>, <code className="text-white font-mono">.git</code>, <code className="text-white font-mono">.env*</code>, <code className="text-white font-mono">.turbo</code>, logs):
          </p>

          <CodeBlock
            code={`# Create clean template ZIP:\nnpx @deneb-ui/cli zip .\n\n# Shorthand alias:\nnpx @deneb-ui/cli pack .`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 5. deneb validate-and-zip */}
        <section id="validate-and-zip" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-[#818CF8]" />
            <span>5. deneb validate-and-zip (Validate & Package in 1 Step)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The recommended release command before uploading to the Fivora Developer Portal. It executes the full preflight validator first, and <strong className="text-white">only packages the clean ZIP if all checks pass 100%</strong>, guaranteeing zero marketplace rejection:
          </p>

          <CodeBlock
            code={`# Validate preflight and bundle clean ZIP:\nnpx @deneb-ui/cli validate-and-zip .\n\n# Multi-word alias:\nnpx @deneb-ui/cli validate and zip\n\n# Via npm script:\nnpm run validate-and-zip`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 6. deneb add */}
        <section id="add" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>6. deneb add (Component Registry)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Add or update specific DENEB UI components directly into your project&apos;s <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">src/components/ui/</code> directory:
          </p>

          <CodeBlock
            code={`# List all available components:\nnpx @deneb-ui/cli add list\n\n# Add individual components:\nnpx @deneb-ui/cli add product-card\nnpx @deneb-ui/cli add contact-actions\nnpx @deneb-ui/cli add location-card\nnpx @deneb-ui/cli add whatsapp-button\nnpx @deneb-ui/cli add dialog\n\n# Install the complete component registry at once:\nnpx @deneb-ui/cli add all`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 7. create-template */}
        <section id="create" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Box className="w-5 h-5 text-[#818CF8]" />
            <span>7. @deneb-ui/create-template (Start from Scratch)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Scaffold a complete Next.js 15 App Router storefront with Tailwind CSS, built-in visual editing bindings, and pre-configured DENEB smart actions:
          </p>

          <CodeBlock
            code={`# Scaffold via create-template:\nnpx @deneb-ui/create-template my-storefront\n\n# Shorthand alias:\nnpx create-deneb my-storefront`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 8. deneb lab */}
        <section id="lab" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#818CF8]" />
            <span>8. deneb lab (Local Visual Editing Lab)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Starts the interactive Visual Editing Lab simulation at <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">http://localhost:3001</code> to test live content updates and iframe messaging before submitting to Fivora:
          </p>

          <CodeBlock
            code={`npm run lab\n# Or: deneb lab .`}
            language="bash"
            filename="terminal"
          />
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-between items-center">
          <Link
            href="/docs/setup-fivora"
            className="flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            <span>← Setup Fivora Guide</span>
          </Link>
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
