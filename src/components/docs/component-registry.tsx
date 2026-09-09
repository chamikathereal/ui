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
  ProductDetail,
  ProductGrid,
  ProductQuickView,
  CustomerReviews,
  TrustBadges,
  StickyMobileBar,
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

function InteractiveProductDetailDemo() {
  const sampleProduct = {
    id: 'vanta-aero-x',
    name: 'VANTA Aero X',
    price: 'LKR 32,500',
    originalPrice: 'LKR 38,000',
    description: 'Lightweight performance runner with responsive dual-density foam midsole and breathable engineered mesh.',
    badge: 'BESTSELLER',
    featuredImage: '/products/vanta-aero-x.jpg',
    addToSelectionLabel: 'Add to Selection',
    specsTitle: 'Specifications',
    shippingTitle: 'Shipping & Returns',
    shippingSummary: 'Free Islandwide Delivery within 2-3 business days. Cash on delivery available.',
    shippingReturns: '14-day hassle-free exchanges for unworn footwear in original condition.',
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden shadow-2xl">
      <ProductDetail
        product={sampleProduct}
        sectionPath="demo-product"
        onAddToSelection={(p, size, color) => alert(`Selected ${p.name} - Size: ${size}, Color: ${color}`)}
      />
    </div>
  );
}

function InteractiveProductQuickViewDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const sampleProduct = {
    id: 'quick-1',
    title: 'VANTA Flux 01',
    price: '28,900',
    originalPrice: '34,000',
    currency: 'LKR ',
    badge: 'TRENDING',
    description: 'Retro silhouette engineered with modern comfort stack and shock-absorbing midsole.',
    imageUrl: '/products/vanta-flux-01.jpg',
    inStock: true,
    rating: 4.9,
    reviewCount: 48,
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-xl font-bold text-sm bg-lime-400 text-slate-950 hover:bg-lime-300 shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Open Product Quick View Modal</span>
      </button>
      <span className="text-xs text-[#94A3B8]">Click to trigger the instant lightbox modal with live visual editing</span>
      <ProductQuickView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={sampleProduct}
        itemPath="home.product1"
        onAddToCart={(p, qty) => {
          alert(`Added ${qty}x ${p.title} to selection!`);
          setIsOpen(false);
        }}
      />
    </div>
  );
}

function InteractiveProductGridDemo() {
  const [selectedQuickView, setSelectedQuickView] = useState<any>(null);
  const sampleProducts = [
    {
      id: 1,
      name: 'VANTA Aero X',
      category: 'Performance',
      price: 'LKR 32,500',
      badge: 'NEW',
      imageUrl: '/products/vanta-aero-x.jpg',
    },
    {
      id: 2,
      name: 'VANTA Flux 01',
      category: 'Sneakers',
      price: 'LKR 28,900',
      badge: 'EXCLUSIVE',
      imageUrl: '/products/vanta-flux-01.jpg',
    },
    {
      id: 3,
      name: 'VANTA Stealth Pro',
      category: 'Performance',
      price: 'LKR 21,200',
      badge: 'SALE',
      imageUrl: '/products/vanta-stealth-pro.jpg',
    },
    {
      id: 4,
      name: 'VANTA Edge Carbon',
      category: 'Lifestyle',
      price: 'LKR 24,800',
      badge: 'TRENDING',
      imageUrl: '/products/vanta-edge-carbon.jpg',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <ProductGrid
        title="New Arrivals"
        subtitle="Just Dropped"
        products={sampleProducts}
        categories={['All', 'Performance', 'Sneakers', 'Lifestyle']}
        sectionPath="demo-grid"
        columns={{ mobile: 1, tablet: 2, desktop: 4 }}
        onQuickView={(p) => setSelectedQuickView(p)}
      />
      {selectedQuickView && (
        <ProductQuickView
          isOpen={Boolean(selectedQuickView)}
          onClose={() => setSelectedQuickView(null)}
          product={{
            id: String(selectedQuickView.id),
            title: selectedQuickView.name,
            price: selectedQuickView.price,
            imageUrl: selectedQuickView.imageUrl,
            badge: selectedQuickView.badge,
            description: 'Precision-engineered storefront product ready for high conversion.',
          }}
        />
      )}
    </div>
  );
}

function InteractiveCustomerReviewsDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <CustomerReviews
        title="Runner Verified Feedback"
        subtitle="Authentic Athlete Reviews"
        averageRating="4.9"
        totalReviews="1,420+"
        sectionPath="demo-reviews"
      />
    </div>
  );
}

function InteractiveTrustBadgesDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <TrustBadges />
    </div>
  );
}

function InteractiveStickyMobileBarDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-2xl border border-[#23283B] bg-[#0E111C]">
      <span className="text-[11px] text-[#94A3B8] block mb-3 text-center">Mobile bottom floating checkout & WhatsApp trigger:</span>
      <StickyMobileBar
        whatsapp="15550192834"
        primaryActionLabel="Order via WhatsApp"
        phone="+15550192834"
      />
    </div>
  );
}

function InteractiveAnnouncementBarDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#23283B]">
      <AnnouncementBar
        defaultText="Free Worldwide Express Shipping on all orders over $75"
        defaultBadge="EXCLUSIVE"
        defaultLinkText="Shop New Drop"
        defaultLinkUrl="#shop"
      />
    </div>
  );
}

function InteractiveCategoryPillsDemo() {
  const [selected, setSelected] = useState('All');
  return (
    <div className="w-full max-w-md mx-auto p-4 flex flex-col items-center gap-3">
      <CategoryPills
        categories={['All', 'Sneakers', 'Running', 'Training', 'Apparel']}
        selectedCategory={selected}
        onSelectCategory={(cat: string) => setSelected(cat)}
      />
      <span className="text-xs text-[#94A3B8]">Active Category: <strong className="text-white">{selected}</strong></span>
    </div>
  );
}

function InteractiveContactFormDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-[#23283B] bg-[#0E111C]">
      <ContactForm
        formTitle="Send an Inquiry"
        submitButtonText="Send Message"
      />
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
    nextPage: { title: 'ProductDetail', href: '/docs/components/product-detail' },
  },

  'product-detail': {
    title: 'ProductDetail',
    description: 'An elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductDetailDemo />,
    previewCode: `import { ProductDetail } from "@deneb-ui/ui";

export default function SingleProductPage() {
  const product = {
    name: "VANTA Aero X",
    price: "LKR 32,500",
    badge: "BESTSELLER",
    featuredImage: "/products/vanta-aero-x.jpg",
    description: "Lightweight performance runner with responsive dual-density foam.",
    specsTitle: "Specifications",
    shippingTitle: "Shipping & Returns",
    shippingSummary: "Free Islandwide Delivery within 2-3 business days.",
  };

  return (
    <ProductDetail
      product={product}
      sectionPath="product"
      onAddToSelection={(item, size, color) => console.log('Selected:', item, size, color)}
    />
  );
}`,
    usageCode: `import { ProductDetail } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-detail`,
    props: [
      { name: 'product', type: 'ProductDetailItem', required: true, description: 'Product data object with name, price, badge, gallery, description, and policy fields.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"product"', description: 'Fivora page key or section path prefix for visual editing.' },
      { name: 'sizes', type: 'string[]', defaultValue: "['40', '41', '42', '43', '44', '45', '46']", description: 'Available shoe or apparel sizes.' },
      { name: 'colors', type: 'Array<{ name: string; hex: string }>', description: 'Color swatch options with names and hex codes.' },
      { name: 'onAddToSelection', type: '(product, size, color) => void', description: 'Callback triggered when clicking the primary action button.' },
      { name: 'whatsappUrl', type: 'string', description: 'Custom WhatsApp click-to-chat order URL.' },
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional CSS or Tailwind classes.' },
    ],
    prevPage: { title: 'Hero', href: '/docs/components/hero' },
    nextPage: { title: 'ProductQuickView', href: '/docs/components/product-quickview' },
  },

  'product-quickview': {
    title: 'ProductQuickView',
    description: 'Instant lightbox inspection modal for products with thumbnail switcher, bounds-protected quantity counter, and live visual editing.',
    category: 'Storefront Sections',
    badge: 'Interactive',
    previewComponent: <InteractiveProductQuickViewDemo />,
    previewCode: `import { useState } from "react";
import { ProductQuickView } from "@deneb-ui/ui";

export default function QuickViewDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Quick View</button>
      <ProductQuickView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={{
          id: "1",
          title: "VANTA Flux 01",
          price: "28,900",
          currency: "LKR ",
          imageUrl: "/products/vanta-flux-01.jpg",
          description: "Retro silhouette with modern comfort stack.",
        }}
        itemPath="home.product1"
        onAddToCart={(p, qty) => alert(\`Added \${qty} items\`)}
      />
    </>
  );
}`,
    usageCode: `import { ProductQuickView } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-quickview`,
    props: [
      { name: 'product', type: 'ProductQuickViewItem | null', required: true, description: 'Product data object to inspect.' },
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls modal open/closed state.' },
      { name: 'onClose', type: '() => void', required: true, description: 'Callback invoked when dismissing or pressing Escape.' },
      { name: 'itemPath', type: 'string', description: 'Field path prefix for Fivora live visual editing in test lab.' },
      { name: 'onAddToCart', type: '(product, quantity) => void', description: 'Callback when buyer adds item to cart.' },
      { name: 'addToCartLabel', type: 'string', defaultValue: '"Add to Selection"', description: 'Label for the primary CTA button.' },
    ],
    prevPage: { title: 'ProductDetail', href: '/docs/components/product-detail' },
    nextPage: { title: 'ProductGrid', href: '/docs/components/product-grid' },
  },

  'product-grid': {
    title: 'ProductGrid',
    description: 'A responsive commerce catalog grid with interactive category filtering tabs, auto-balancing columns, and quick-view hook.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductGridDemo />,
    previewCode: `import { ProductGrid } from "@deneb-ui/ui";

export default function Catalog() {
  const products = [
    { id: 1, name: "VANTA Aero X", category: "Performance", price: "LKR 32,500", imageUrl: "/products/vanta-aero-x.jpg" },
    { id: 2, name: "VANTA Flux 01", category: "Sneakers", price: "LKR 28,900", imageUrl: "/products/vanta-flux-01.jpg" },
  ];

  return (
    <ProductGrid
      title="Trending Collection"
      subtitle="Just Dropped"
      products={products}
      categories={['All', 'Performance', 'Sneakers']}
      columns={{ mobile: 1, tablet: 2, desktop: 4 }}
      onQuickView={(p, itemPath) => console.log('Quick view:', p)}
    />
  );
}`,
    usageCode: `import { ProductGrid } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-grid`,
    props: [
      { name: 'products', type: 'ProductItem[]', required: true, description: 'Array of products to display.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"home"', description: 'Fivora section key for live editing.' },
      { name: 'title', type: 'string', defaultValue: '"Featured Collection"', description: 'Heading for the product grid.' },
      { name: 'subtitle', type: 'string', defaultValue: '"Just Dropped"', description: 'Badge or category subtitle above heading.' },
      { name: 'categories', type: 'string[]', defaultValue: "['All']", description: 'Filter pills rendered above the grid.' },
      { name: 'columns', type: '{ mobile?: number; tablet?: number; desktop?: number }', description: 'Responsive column counts.' },
      { name: 'onQuickView', type: '(product, itemPath) => void', description: 'Callback triggered when user hovers and clicks Quick View.' },
    ],
    prevPage: { title: 'ProductQuickView', href: '/docs/components/product-quickview' },
    nextPage: { title: 'CustomerReviews', href: '/docs/components/customer-reviews' },
  },

  'customer-reviews': {
    title: 'CustomerReviews',
    description: 'High-converting social proof showcase with aggregate star score, verified buyer authentication tags, and rating filters.',
    category: 'Storefront Sections',
    badge: 'Social Proof',
    previewComponent: <InteractiveCustomerReviewsDemo />,
    previewCode: `import { CustomerReviews } from "@deneb-ui/ui";

export default function ReviewsSection() {
  return (
    <CustomerReviews
      title="Loved by Athletes Worldwide"
      subtitle="Verified Customer Reviews"
      averageRating="4.9"
      totalReviews="1,420+"
    />
  );
}`,
    usageCode: `import { CustomerReviews } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add customer-reviews`,
    props: [
      { name: 'title', type: 'string', defaultValue: '"Loved by Athletes & Runners Worldwide"', description: 'Section title.' },
      { name: 'subtitle', type: 'string', defaultValue: '"Verified Customer Reviews"', description: 'Top subtitle tag.' },
      { name: 'averageRating', type: 'string | number', defaultValue: '"4.9"', description: 'Aggregate rating score.' },
      { name: 'totalReviews', type: 'string | number', defaultValue: '"1,420+"', description: 'Total review count display.' },
      { name: 'reviews', type: 'CustomerReviewItem[]', description: 'Array of custom reviews.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"home"', description: 'Visual editing field path prefix.' },
    ],
    prevPage: { title: 'ProductGrid', href: '/docs/components/product-grid' },
    nextPage: { title: 'TrustBadges', href: '/docs/components/trust-badges' },
  },

  'trust-badges': {
    title: 'TrustBadges',
    description: 'Conversion-boosting security and guarantee strip featuring free shipping, SSL checkout, warranty, and returns badges.',
    category: 'Storefront Sections',
    badge: 'Conversion',
    previewComponent: <InteractiveTrustBadgesDemo />,
    previewCode: `import { TrustBadges } from "@deneb-ui/ui";

export default function CheckoutPage() {
  return <TrustBadges />;
}`,
    usageCode: `import { TrustBadges } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add trust-badges`,
    props: [
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional CSS or Tailwind class names.' },
    ],
    prevPage: { title: 'CustomerReviews', href: '/docs/components/customer-reviews' },
    nextPage: { title: 'StickyMobileBar', href: '/docs/components/sticky-mobile-bar' },
  },

  'sticky-mobile-bar': {
    title: 'StickyMobileBar',
    description: 'Sticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.',
    category: 'Storefront Sections',
    badge: 'Mobile',
    previewComponent: <InteractiveStickyMobileBarDemo />,
    previewCode: `import { StickyMobileBar } from "@deneb-ui/ui";

export default function MobileLayout() {
  return (
    <StickyMobileBar
      whatsappNumber="15550192834"
      ctaLabel="Order via WhatsApp"
      price="LKR 32,500"
    />
  );
}`,
    usageCode: `import { StickyMobileBar } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add sticky-mobile-bar`,
    props: [
      { name: 'whatsappNumber', type: 'string', description: 'Merchant WhatsApp phone number for 1-click ordering.' },
      { name: 'ctaLabel', type: 'string', defaultValue: '"Order via WhatsApp"', description: 'Action button text.' },
      { name: 'price', type: 'string', description: 'Price display shown on the left side of the bar.' },
    ],
    prevPage: { title: 'TrustBadges', href: '/docs/components/trust-badges' },
    nextPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
  },

  'announcement-bar': {
    title: 'AnnouncementBar',
    description: 'Top promotional ribbon for store announcements, flash sales, coupon codes, and free shipping thresholds.',
    category: 'Storefront Sections',
    badge: 'Marketing',
    previewComponent: <InteractiveAnnouncementBarDemo />,
    previewCode: `import { AnnouncementBar } from "@deneb-ui/ui";

export default function HeaderPromo() {
  return (
    <AnnouncementBar
      defaultText="Free Worldwide Shipping on all orders over $75"
      defaultBadge="SALE"
      defaultLinkText="Shop Drop"
      defaultLinkUrl="#shop"
    />
  );
}`,
    usageCode: `import { AnnouncementBar } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add announcement-bar`,
    props: [
      { name: 'defaultText', type: 'string', description: 'Announcement text message.' },
      { name: 'defaultBadge', type: 'string', defaultValue: '"PROMO"', description: 'Tag pill text.' },
      { name: 'defaultLinkText', type: 'string', description: 'Clickable callout link text.' },
      { name: 'defaultLinkUrl', type: 'string', description: 'Destination URL for callout link.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'true', description: 'Whether the user can dismiss the bar.' },
    ],
    prevPage: { title: 'StickyMobileBar', href: '/docs/components/sticky-mobile-bar' },
    nextPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
  },

  'category-pills': {
    title: 'CategoryPills',
    description: 'Horizontal scrollable category filter pills with active indicator states for e-commerce catalogs.',
    category: 'Storefront Sections',
    badge: 'Navigation',
    previewComponent: <InteractiveCategoryPillsDemo />,
    previewCode: `import { useState } from "react";
import { CategoryPills } from "@deneb-ui/ui";

export default function StoreCatalog() {
  const [category, setCategory] = useState("All");

  return (
    <CategoryPills
      categories={["All", "Sneakers", "Running", "Training"]}
      selected={category}
      onSelect={(c) => setCategory(c)}
    />
  );
}`,
    usageCode: `import { CategoryPills } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add category-pills`,
    props: [
      { name: 'categories', type: 'string[]', required: true, description: 'List of category names.' },
      { name: 'selected', type: 'string', description: 'Currently active category name.' },
      { name: 'onSelect', type: '(category: string) => void', description: 'Callback on selecting a category pill.' },
    ],
    prevPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
    nextPage: { title: 'ContactForm', href: '/docs/components/contact-form' },
  },

  'contact-form': {
    title: 'ContactForm',
    description: 'Lead generation and customer inquiry form with validated fields, accessible inputs, and visual editing bindings.',
    category: 'Storefront Sections',
    badge: 'Forms',
    previewComponent: <InteractiveContactFormDemo />,
    previewCode: `import { ContactForm } from "@deneb-ui/ui";

export default function Contact() {
  return (
    <ContactForm
      title="Get in Touch"
      subtitle="We typically reply within a few hours."
      submitLabel="Send Message"
    />
  );
}`,
    usageCode: `import { ContactForm } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add contact-form`,
    props: [
      { name: 'title', type: 'string', defaultValue: '"Contact Us"', description: 'Heading for the form.' },
      { name: 'subtitle', type: 'string', description: 'Subheading or support note.' },
      { name: 'submitLabel', type: 'string', defaultValue: '"Submit"', description: 'Label on submit button.' },
    ],
    prevPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
  },
};
