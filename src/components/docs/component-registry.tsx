'use client';

import React, { useState } from 'react';
import {
  ContactActions,
  WhatsAppButton,
  PhoneButton,
  EmailButton,
  LocationCard,
  LocationLink,
  Address,
  SocialLinks,
  SocialButton,
  BusinessHours,
  FloatingContactWidget,
} from '@/components/deneb-ui';
import {
  Button as DenebButton,
  Card as DenebCard,
  Badge as DenebBadge,
  Heading as DenebHeading,
  ProductCard,
  PricingCard,
  TestimonialCard,
  ServiceCard,
  Accordion as FAQAccordion,
  AnnouncementBar,
  CategoryPills,
  ContactForm,
} from '@/components/deneb-ui';
import { ComponentDocPageProps } from './ComponentDocPage';
import { Sparkles, Phone, MessageSquare, MapPin, Clock, Star, ShoppingBag, ShieldCheck } from 'lucide-react';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

// Interactive Component Showcase Wrappers
function InteractiveButtonDemo() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button
        onClick={() => setClicked(!clicked)}
        className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_20px_rgba(129,140,248,0.4)] hover:shadow-[0_0_30px_rgba(129,140,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
      >
        <DenebStarIcon className="w-4 h-4" />
        <span>{clicked ? 'Celestial Active!' : 'Celestial Glow'}</span>
      </button>

      <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 hover:bg-[#818CF8]/10 transition-all cursor-pointer">
        Secondary Cosmic
      </button>

      <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-transparent text-[#A5B4FC] border border-[#818CF8]/30 hover:bg-[#818CF8]/15 transition-all cursor-pointer">
        Periwinkle Outline
      </button>
    </div>
  );
}

function InteractiveContactActionsDemo() {
  return (
    <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0C0F1A] max-w-lg w-full text-center space-y-4 shadow-xl">
      <div className="space-y-1">
        <h4 className="font-bold text-white text-base">Store Support Desk</h4>
        <p className="text-xs text-[#94A3B8]">Instant contact with automatic merchant fallback.</p>
      </div>
      <div className="flex justify-center">
        <ContactActions
          phone="+1 (555) 349-2810"
          whatsapp="15553492810"
          email="support@denebstore.com"
          layout="wrap"
          size="md"
        />
      </div>
    </div>
  );
}

function InteractiveWhatsAppDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <WhatsAppButton
        value="15550192834"
        label="Chat with a Specialist"
        size="lg"
      />
      <span className="text-[11px] text-[#94A3B8]">Direct click-to-chat with zero friction</span>
    </div>
  );
}

function InteractiveLocationCardDemo() {
  return (
    <div className="max-w-md w-full">
      <LocationCard
        address="742 Evergreen Celestial Way"
        city="San Francisco"
        country="USA"
        postalCode="94102"
        mapUrl="https://maps.google.com"
        title="Deneb Flagship Experience"
      />
    </div>
  );
}

function InteractiveBusinessHoursDemo() {
  const sampleSchedule = {
    monday: { open: '09:00', close: '18:00' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '20:00' },
    friday: { open: '09:00', close: '20:00' },
    saturday: { open: '10:00', close: '17:00' },
    sunday: { closed: true },
  };

  return (
    <div className="max-w-md w-full">
      <BusinessHours
        hours={sampleSchedule}
        showStatusBadge={true}
      />
    </div>
  );
}

function InteractiveSocialDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <SocialLinks
        social={{
          instagram: 'https://instagram.com',
          facebook: 'https://facebook.com',
          whatsapp: 'https://wa.me/15550192834',
          youtube: 'https://youtube.com',
          github: 'https://github.com',
          x: 'https://x.com',
        }}
        variant="pill"
      />
    </div>
  );
}

function InteractiveProductCardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div className="rounded-2xl border border-[#23283B] bg-[#0E111C] p-4 space-y-3 shadow-lg hover:border-[#818CF8]/50 transition-all group">
        <div className="relative aspect-square rounded-xl bg-gradient-to-tr from-[#1E1B4B] via-[#0F172A] to-[#1E293B] flex items-center justify-center overflow-hidden border border-white/5">
          <div className="p-4 rounded-full bg-[#818CF8]/10 text-[#818CF8] group-hover:scale-110 transition-transform">
            <Sparkles className="w-12 h-12" />
          </div>
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#818CF8] text-white shadow-md">
            BESTSELLER
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#818CF8] uppercase">Celestial Series</span>
            <div className="flex items-center gap-1 text-amber-400 text-xs">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>4.9</span>
            </div>
          </div>
          <h4 className="font-bold text-white text-sm">Deneb Nebula Lumina</h4>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#23283B]">
          <div>
            <span className="text-base font-extrabold text-white">$149.00</span>
            <span className="text-xs text-[#94A3B8] line-through ml-1.5">$189.00</span>
          </div>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#818CF8] text-white hover:bg-[#6366F1] transition-colors flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function InteractivePricingCardDemo() {
  return (
    <div className="max-w-sm w-full p-6 rounded-2xl border border-[#818CF8]/40 bg-gradient-to-b from-[#131728] to-[#0A0D17] shadow-[0_0_30px_rgba(129,140,248,0.15)] space-y-5">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-lg text-white">Storefront Pro</h4>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
          Popular
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-white">$49</span>
        <span className="text-xs text-[#94A3B8]">/ month</span>
      </div>
      <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
          <span>Full DENEB UI Smart Components</span>
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
          <span>1-Click WhatsApp & Phone Action Triggers</span>
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
          <span>Fivora Visual Site Editor Sync</span>
        </li>
      </ul>
      <button className="w-full py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-md hover:shadow-[0_0_20px_rgba(129,140,248,0.4)] transition-all">
        Deploy Storefront
      </button>
    </div>
  );
}

function InteractiveFAQDemo() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: 'How does DENEB UI differ from vanilla shadcn/ui?', a: 'DENEB UI includes commerce-specific smart action primitives (WhatsApp direct link, dynamic live operating hours, map routing) alongside traditional primitives.' },
    { q: 'Can I use this with Next.js App Router and React 19?', a: 'Yes! DENEB UI is fully compatible with Next.js 15, Next.js 16, React 19, and Tailwind CSS v4.' },
    { q: 'Is it completely zero-dependency?', a: 'Yes! The core package depends purely on React and Tailwind classes, keeping your production bundle ultra-lightweight.' },
  ];

  return (
    <div className="max-w-lg w-full space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-xl border border-[#23283B] bg-[#0E111C] overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full px-4 py-3 text-left font-semibold text-xs sm:text-sm text-white flex items-center justify-between hover:bg-white/[0.02]"
          >
            <span>{faq.q}</span>
            <span className="text-[#818CF8] font-bold text-base">{openIdx === i ? '−' : '+'}</span>
          </button>
          {openIdx === i && (
            <div className="px-4 pb-3.5 text-xs text-[#94A3B8] leading-relaxed border-t border-[#23283B]/50 pt-2 bg-[#0A0D17]/50">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Registry database mapping slug -> ComponentDocPageProps
export const COMPONENT_DOCS: Record<string, ComponentDocPageProps> = {
  button: {
    title: 'Button',
    description: 'An interactive button primitive with celestial glows, glassmorphic variants, and visual editing support.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: <InteractiveButtonDemo />,
    previewCode: `import { Button } from "@deneb-ui/ui";

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="glow">Celestial Glow</Button>
      <Button variant="secondary">Secondary Cosmic</Button>
      <Button variant="outline">Periwinkle Outline</Button>
    </div>
  );
}`,
    usageCode: `import { Button } from "@deneb-ui/ui";

export default function Page() {
  return (
    <Button 
      variant="glow" 
      size="md" 
      onClick={() => console.log('Clicked!')}
    >
      Launch Storefront
    </Button>
  );
}`,
    props: [
      { name: 'variant', type: '"default" | "glow" | "secondary" | "outline" | "ghost"', defaultValue: '"default"', description: 'The visual styling variant of the button.' },
      { name: 'size', type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: 'Controls button padding, font size, and height.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Whether the button is interactable.' },
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional Tailwind or CSS class names.' },
    ],
    nextPage: { title: 'Card', href: '/docs/components/card' },
  },

  card: {
    title: 'Card',
    description: 'A versatile container card with obsidian glass styling, luminous borders, and structured content slots.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: (
      <div className="max-w-sm w-full p-6 rounded-2xl border border-[#23283B] bg-[#0E111C] space-y-3 shadow-xl hover:border-[#818CF8]/40 transition-all">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold text-xs uppercase tracking-wider">
          <DenebStarIcon className="w-3.5 h-3.5" />
          <span>Cosmic Card Container</span>
        </div>
        <h3 className="font-bold text-lg text-white">Starlight Glass Panel</h3>
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          Pre-styled container with subtle inner gradients and backdrop blur for clean storefront composition.
        </p>
      </div>
    ),
    previewCode: `import { Card } from "@deneb-ui/ui";

export default function CardDemo() {
  return (
    <Card className="p-6">
      <h3>Starlight Glass Panel</h3>
      <p>Pre-styled container with subtle inner gradients.</p>
    </Card>
  );
}`,
    usageCode: `import { Card } from "@deneb-ui/ui";\n\n<Card className="p-6">\n  <h2>Hello World</h2>\n</Card>`,
    prevPage: { title: 'Button', href: '/docs/components/button' },
    nextPage: { title: 'Badge', href: '/docs/components/badge' },
  },

  badge: {
    title: 'Badge',
    description: 'Status pills and indicator tags with celestial starlight glows.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(129,140,248,0.3)]">
          <DenebStarIcon className="w-3 h-3" />
          <span>Celestial Active</span>
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Open Now
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Free Shipping
        </span>
      </div>
    ),
    previewCode: `import { Badge } from "@deneb-ui/ui";\n\n<Badge variant="glow">Celestial Active</Badge>`,
    usageCode: `import { Badge } from "@deneb-ui/ui";`,
    prevPage: { title: 'Card', href: '/docs/components/card' },
    nextPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
  },

  'contact-actions': {
    title: 'ContactActions',
    description: 'Smart multi-channel container that automatically inspects merchant phone, WhatsApp, and email, rendering active triggers with zero template changes.',
    category: 'Smart Commerce Actions',
    badge: 'Smart Action',
    previewComponent: <InteractiveContactActionsDemo />,
    previewCode: `import { ContactActions } from "@deneb-ui/ui";

export default function ContactDemo() {
  return (
    <ContactActions
      phone="+1 (555) 349-2810"
      whatsapp="15553492810"
      email="support@denebstore.com"
      layout="wrap"
      size="md"
    />
  );
}`,
    usageCode: `import { ContactActions } from "@deneb-ui/ui";

export default function Page() {
  return (
    <ContactActions
      phone="+1 (555) 349-2810"
      whatsapp="15553492810"
      email="support@denebstore.com"
      labels={{ phone: 'Call Support', whatsapp: 'WhatsApp Inquiry' }}
      layout="row"
    />
  );
}`,
    props: [
      { name: 'phone', type: 'string | null', description: 'Store telephone number. Triggers direct tel: call.' },
      { name: 'whatsapp', type: 'string | null', description: 'WhatsApp number in E.164 format. Resolves to wa.me link.' },
      { name: 'email', type: 'string | null', description: 'Store contact email address. Triggers mailto: protocol.' },
      { name: 'layout', type: '"row" | "column" | "wrap"', defaultValue: '"row"', description: 'Flex layout presentation.' },
      { name: 'size', type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: 'Size of action buttons.' },
    ],
    prevPage: { title: 'Badge', href: '/docs/components/badge' },
    nextPage: { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
  },

  'whatsapp-button': {
    title: 'WhatsAppButton',
    description: 'One-click WhatsApp click-to-chat button with built-in official SVG icon and direct link resolution.',
    category: 'Smart Commerce Actions',
    badge: 'High Conversion',
    previewComponent: <InteractiveWhatsAppDemo />,
    previewCode: `import { WhatsAppButton } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <WhatsAppButton
      value="15550192834"
      label="Chat with a Specialist"
      size="lg"
    />
  );
}`,
    usageCode: `import { WhatsAppButton } from "@deneb-ui/ui";\n\n<WhatsAppButton value="15550192834" label="Chat on WhatsApp" />`,
    prevPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
    nextPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
  },

  'business-hours': {
    title: 'BusinessHours',
    description: 'Weekly schedule renderer featuring live dynamic calculation of Open Now and Closed status badges based on visitor local time.',
    category: 'Social & Business',
    badge: 'Live Status',
    previewComponent: <InteractiveBusinessHoursDemo />,
    previewCode: `import { BusinessHours } from "@deneb-ui/ui";

const schedule = {
  monday: '09:00 - 18:00',
  tuesday: '09:00 - 18:00',
  wednesday: '09:00 - 18:00',
  thursday: '09:00 - 20:00',
  friday: '09:00 - 20:00',
  saturday: '10:00 - 17:00',
  sunday: 'Closed',
};

export default function HoursDemo() {
  return <BusinessHours schedule={schedule} timezone="America/Los_Angeles" />;
}`,
    usageCode: `import { BusinessHours } from "@deneb-ui/ui";\n\n<BusinessHours schedule={schedule} />`,
    prevPage: { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
    nextPage: { title: 'LocationCard', href: '/docs/components/location-card' },
  },

  'location-card': {
    title: 'LocationCard',
    description: 'Storefront location card with formatted address, map pin, and direct Google Maps directions trigger.',
    category: 'Location & Navigation',
    badge: 'Maps',
    previewComponent: <InteractiveLocationCardDemo />,
    previewCode: `import { LocationCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <LocationCard
      street="742 Evergreen Celestial Way"
      city="San Francisco"
      country="USA"
      mapQuery="San Francisco, CA"
      title="Deneb Flagship Experience"
    />
  );
}`,
    usageCode: `import { LocationCard } from "@deneb-ui/ui";`,
    prevPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
    nextPage: { title: 'SocialLinks', href: '/docs/components/social-links' },
  },

  'social-links': {
    title: 'SocialLinks',
    description: 'Smart social media channel container with branded icons (Instagram, Facebook, TikTok, YouTube, X, GitHub).',
    category: 'Social & Business',
    badge: 'Channels',
    previewComponent: <InteractiveSocialDemo />,
    previewCode: `import { SocialLinks } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <SocialLinks
      instagram="https://instagram.com"
      facebook="https://facebook.com"
      whatsapp="https://wa.me/15550192834"
      youtube="https://youtube.com"
      github="https://github.com"
      x="https://x.com"
      variant="pills"
    />
  );
}`,
    usageCode: `import { SocialLinks } from "@deneb-ui/ui";`,
    prevPage: { title: 'LocationCard', href: '/docs/components/location-card' },
    nextPage: { title: 'ProductCard', href: '/docs/components/product-card' },
  },

  'product-card': {
    title: 'ProductCard',
    description: 'High-converting commerce product card with responsive image, pricing, badge, and quick add-to-cart action.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductCardDemo />,
    previewCode: `import { ProductCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <ProductCard
      title="Deneb Nebula Lumina"
      price="$149.00"
      originalPrice="$189.00"
      badge="BESTSELLER"
      rating={4.9}
      onAddToCart={() => alert('Added!')}
    />
  );
}`,
    usageCode: `import { ProductCard } from "@deneb-ui/ui";`,
    prevPage: { title: 'SocialLinks', href: '/docs/components/social-links' },
    nextPage: { title: 'PricingCard', href: '/docs/components/pricing-card' },
  },

  'pricing-card': {
    title: 'PricingCard',
    description: 'Tiered subscription and pricing plan card with feature checkmarks and highlight badges.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractivePricingCardDemo />,
    previewCode: `import { PricingCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <PricingCard
      title="Storefront Pro"
      price="$49"
      interval="/ month"
      features={['Full Smart Components', '1-Click WhatsApp', 'Visual Editor Sync']}
      isPopular
    />
  );
}`,
    usageCode: `import { PricingCard } from "@deneb-ui/ui";`,
    prevPage: { title: 'ProductCard', href: '/docs/components/product-card' },
    nextPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
  },

  'faq-accordion': {
    title: 'FAQAccordion',
    description: 'Smooth animated expandable accordion for FAQs, policies, and storefront documentation.',
    category: 'Storefront Sections',
    badge: 'Interactive',
    previewComponent: <InteractiveFAQDemo />,
    previewCode: `import { Accordion } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <Accordion
      items={[
        { q: 'What is DENEB UI?', a: 'A visual-first React ecosystem.' },
        { q: 'Is it free?', a: 'Yes, MIT Licensed.' },
      ]}
    />
  );
}`,
    usageCode: `import { Accordion } from "@deneb-ui/ui";`,
    prevPage: { title: 'PricingCard', href: '/docs/components/pricing-card' },
    nextPage: { title: 'Hero', href: '/docs/components/hero' },
  },

  hero: {
    title: 'Hero',
    description: 'Centered and split hero banner sections with high-impact headline, glowing CTAs, and commerce actions.',
    category: 'Storefront Sections',
    badge: 'Layout',
    previewComponent: (
      <div className="p-8 text-center space-y-4 max-w-xl">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 inline-flex items-center gap-1.5">
          <DenebStarIcon className="w-3 h-3" />
          <span>The Next Gen Commerce Stack</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Supercharge Your Storefront with Celestial Speed
        </h2>
        <p className="text-xs text-[#94A3B8]">
          Pre-configured action primitives designed to turn visitors into buyers within seconds.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#818CF8] text-white shadow-md">
            Explore Demo
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] text-white border border-[#23283B]">
            Documentation
          </button>
        </div>
      </div>
    ),
    previewCode: `import { Hero } from "@deneb-ui/ui";\n\n<Hero title="Supercharge Your Storefront" subtitle="..." />`,
    usageCode: `import { Hero } from "@deneb-ui/ui";`,
    prevPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
  },
};
