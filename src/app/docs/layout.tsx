'use client';

import React, { useState } from 'react';
import { DocsHeader } from '@/components/layout/DocsHeader';
import { DocsSidebar } from '@/components/layout/DocsSidebar';
import { X } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#080A12] text-[#F1F5F9]">
      <DocsHeader onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-[85vw] bg-[#0A0D17] border-r border-[#23283B] p-4 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#23283B]">
              <span className="text-xs font-mono uppercase text-[#818CF8] font-bold">
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 rounded-md text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DocsSidebar onItemClick={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex">
        {/* Desktop Sticky Sidebar */}
        <DocsSidebar className="hidden lg:block border-r border-[#23283B]/60 pr-6 mr-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto" />

        {/* Content Viewport */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
