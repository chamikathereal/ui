'use client';

import React from 'react';
import { ComponentDocPage } from '@/components/docs/ComponentDocPage';
import { COMPONENT_DOCS } from '@/components/docs/component-registry';

export function ComponentDocClient({ slug }: { slug: string }) {
  const doc = COMPONENT_DOCS[slug] || COMPONENT_DOCS[slug.toLowerCase()];

  if (!doc) {
    const formattedTitle = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('');

    return (
      <ComponentDocPage
        title={formattedTitle}
        description={`The ${formattedTitle} component from DENEB UI. Visual-first, responsive, and commerce optimized.`}
        previewComponent={
          <div className="p-8 text-center space-y-3">
            <span className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
              {formattedTitle} Preview
            </span>
            <h3 className="text-lg font-bold text-white">Interactive {formattedTitle}</h3>
            <p className="text-xs text-[#94A3B8] max-w-sm">
              Pre-built visual editing component ready for production storefront deployment.
            </p>
          </div>
        }
        previewCode={`import { ${formattedTitle} } from "@deneb-ui/ui";\n\nexport default function Demo() {\n  return <${formattedTitle} />;\n}`}
        usageCode={`import { ${formattedTitle} } from "@deneb-ui/ui";`}
        badge="Ready"
      />
    );
  }

  return <ComponentDocPage {...doc} />;
}
