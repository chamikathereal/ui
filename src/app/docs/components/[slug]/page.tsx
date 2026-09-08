import React from 'react';
import { ComponentDocClient } from '@/components/docs/ComponentDocClient';

export function generateStaticParams() {
  return [
    { slug: 'button' },
    { slug: 'card' },
    { slug: 'badge' },
    { slug: 'contact-actions' },
    { slug: 'whatsapp-button' },
    { slug: 'business-hours' },
    { slug: 'location-card' },
    { slug: 'social-links' },
    { slug: 'product-card' },
    { slug: 'pricing-card' },
    { slug: 'faq-accordion' },
    { slug: 'hero' },
  ];
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ComponentDocClient slug={slug} />;
}
