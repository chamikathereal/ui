import React from 'react';
import { ComponentDocClient } from '@/components/docs/ComponentDocClient';

export function generateStaticParams() {
  return [
    { slug: 'button' },
    { slug: 'card' },
    { slug: 'badge' },
    { slug: 'contact-actions' },
    { slug: 'whatsapp-button' },
    { slug: 'phone-button' },
    { slug: 'email-button' },
    { slug: 'floating-contact-widget' },
    { slug: 'business-hours' },
    { slug: 'location-card' },
    { slug: 'location-link' },
    { slug: 'map-embed' },
    { slug: 'address' },
    { slug: 'social-links' },
    { slug: 'social-button' },
    { slug: 'hero' },
    { slug: 'cart-drawer' },
    { slug: 'filter-sidebar' },
    { slug: 'product-detail' },
    { slug: 'product-quickview' },
    { slug: 'product-grid' },
    { slug: 'product-card' },
    { slug: 'customer-reviews' },
    { slug: 'trust-badges' },
    { slug: 'sticky-mobile-bar' },
    { slug: 'announcement-bar' },
    { slug: 'category-pills' },
    { slug: 'pricing-card' },
    { slug: 'testimonial-card' },
    { slug: 'service-card' },
    { slug: 'faq-accordion' },
    { slug: 'contact-form' },
    { slug: 'navbar' },
    { slug: 'footer' },
    { slug: 'dialog' },
    { slug: 'typography' },
    { slug: 'grid' },
    { slug: 'image' },
    { slug: 'google-feedback' },
    { slug: 'testimonial-section' },
    { slug: 'map' },
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
