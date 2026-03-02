'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import YouTubeShortsSlider from '@/components/YouTubeShortsSlider';
import PageWrapper from '@/components/PageWrapper';
import TransformationGallery from '@/components/TransformationGallery';
import DynamicPopup from '@/components/DynamicPopup';
import PlanBannerDisplay from '@/components/PlanBannerDisplay';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import { getPricingByCategory } from '@/lib/api';
import DynamicPageHero from '@/components/DynamicPageHero';
import { getOptimizedUrl } from '@/lib/imagekit';
import type { Pricing } from '@/lib/api';

/* ─── SVG ICON COMPONENTS FOR WHAT TO EXPECT ─── */
function SupplementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" />
      <path d="M16.5 7.5l-9 9M7.5 7.5l3 3M13.5 13.5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StarvationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 11h8M8 14.5h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 3l9 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V19a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 6.5v11M17.5 6.5v11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 8.5v7M20 8.5v7" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6.5 12h11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── DATA ─── */
const expectFeatures = [
  { iconComponent: <SupplementIcon />, title: 'No Supplements', desc: 'Achieve your health goals naturally' },
  { iconComponent: <StarvationIcon />, title: 'No Starvation', desc: 'Enjoy balanced meals without feeling deprived.' },
  { iconComponent: <HomeIcon />, title: 'Home Based Diet', desc: 'Convenient and effective plans for your home.' },
  { iconComponent: <GymIcon />, title: 'No Gymnasium', desc: 'Get fit without stepping into a gym.' },
];

const whatYouGet = [
  'Ghar ka Khana Focus',
  'Weekly Follow-ups',
  'Personal Diet Assistant',
  'Multiple Food Options',
  'Lifestyle based curated Diet Plans',
  'Sustainable Weight Management',
];

const expertBadges = [
  { icon: '⭐', text: '200+ Certified Dietitians' },
  { icon: '🧠', text: 'Science-Based Planning' },
  { icon: '🍛', text: 'Ghar Ka Khana Expertise' },
  { icon: '📊', text: 'Proven Results' },
  { icon: '🏆', text: 'Award-Winning Dietitian' },
  { icon: '🥗', text: 'Clinically Guided Nutrition' },
];

const stats = [
  { value: '4.8', label: 'Google Rating' },
  { value: '98%', label: 'Success Rate' },
  { value: '75K+', label: 'Clients' },
];

const fallbackTestimonials = [
  { name: 'Bessie Cooper', role: 'Co-Founder', content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.", image: '/img/what-we-do-image-1.jpg' },
  { name: 'Floyd Miles', role: 'Chairman', content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.", image: '/img/what-we-do-image-2.jpg' },
  { name: 'Kathryn Murphy', role: 'CEO', content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.", image: '/img/why-choose-image.png' },
  { name: 'Jerome Bell', role: 'Finance Director', content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.", image: '/img/Div-elementor-element.png' },
];

type Testimonial = { _id?: string; name: string; role?: string; content: string; image: string };

/* ─── SMALL COMPONENTS ─── */
function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="w-[14px] h-[14px] rounded-sm bg-[#FF850B] inline-block" />
      <span className="text-[#014E4E] font-semibold text-[11px] md:text-[13px]" style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}>
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[28px] md:text-[36px] lg:text-[46px] font-extrabold leading-[1.12] ${className}`}
      style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}
    >
      {children}
    </h2>
  );
}

function CheckIcon40({ color = '#014E4E' }: { color?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="shrink-0">
      <circle cx="20" cy="20" r="20" fill={color} />
      <path d="M12 20l5 5 11-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon24() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="12" fill="#FF850B" />
      <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Gold coin is now rendered with the actual image */

/* ────────────────────────────────────────────────────────────── */
export default function WeightLossPage() {
  const [pricingPlans, setPricingPlans] = useState<any[]>([]);
  const [loadingPricing, setLoadingPricing] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  const testimonialImages = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const heroImage1 = testimonialImages[0]?.image || '/img/what-we-do-image-1.jpg';
  const heroImage2 = testimonialImages[1]?.image || '/img/what-we-do-image-2.jpg';
  const heroImage3 = testimonialImages[2]?.image || '/img/why-choose-image.png';

  /* Fetch pricing */
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory('weight-loss');
        if (dbPricing && dbPricing.length > 0) {
          const formattedPricing = dbPricing.map((plan: Pricing) => ({
            label: plan.planName,
            badge: plan.badge,
            badgeColor: plan.badgeColor?.toLowerCase() || 'gray',
            price: `₹${plan.price.toLocaleString()}`,
            original: `₹${plan.originalPrice.toLocaleString()}`,
            features: plan.features.map(f => f.text),
            planId: plan._id,
          }));
          setPricingPlans(formattedPricing);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
        setPricingPlans([]);
      } finally {
        setLoadingPricing(false);
      }
    };
    fetchPricing();
  }, []);

  /* Fetch testimonials */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials?page=weight-loss&active=true');
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        const normalized = (data.testimonials || []).map((item: any) => ({
          _id: item._id,
          name: item.name || 'Client',
          role: item.role || '',
          content: item.content || '',
          image: getOptimizedUrl(item.image || '/img/default-avatar.png', { width: 180, height: 180, quality: 80, format: 'auto' }),
        }));
        if (normalized.length > 0) setTestimonials(normalized);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(fallbackTestimonials);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <main className="bg-white">
      <DynamicPopup page="weight-loss" />

      {/* ═════ HERO ═════ */}
      <PageWrapper>
        <DynamicPageHero
          page="weight-loss"
          fallback={{
            title: 'Guaranteed Weight Loss',
            subtitle: 'Upto 5 Kg in a Month',
            description: "It's a journey to self-discovery and a healthier, happier you. We believe weight loss is more than just a number on the scale.",
            buttonText: 'Buy Weight Loss Plan Now',
            buttonLink: '/appointment',
          }}
        />
      </PageWrapper>

      {/* ═════ TESTIMONIALS GALLERY ═════ */}
      <section className="py-12 md:py-20 px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-[630px]">
              <SectionLabel>Our Testimonials</SectionLabel>
              <SectionTitle className="text-[#1E1E1E] mt-2">
                Over 75,000+<br />People Enjoy Weight Loss
              </SectionTitle>
              <p className="text-[#828283] text-[12px] md:text-[14px] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Join our Plan today and embark on a journey to better health with our weight loss plan!
              </p>
            </div>
            {/* Dots indicator */}
            <div className="flex gap-1 items-center">
              {[6,6,6,18,6,6].map((w, i) => (
                <div key={i} className={`h-[6px] rounded-full ${w === 18 ? 'bg-[#FF850B] w-[18px]' : 'bg-[#014E4E] w-[6px]'}`} />
              ))}
            </div>
          </div>
          {/* Use existing TransformationGallery for real data */}
          <TransformationGallery
            page="weight-loss"
            title=""
            subtitle=""
            maxItems={6}
          />
        </div>
      </section>

      {/* ═════ FIVE CYCLE PROGRAM ═════ */}
      <section className="px-4 md:px-12 lg:px-[120px]">
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <Image
            src="/images/Our Five-Cycle Program ( dekstop version ).svg"
            alt="Our Five-Cycle Program - Desktop"
            width={1200}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <Image
            src="/images/Our Five-Cycle Program ( mobile ).svg"
            alt="Our Five-Cycle Program - Mobile"
            width={600}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ═════ WHAT TO EXPECT ═════ */}
      <section className="py-14 md:py-24 px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop Version */}
          <div className="hidden lg:block">
            <Image
              src="/images/what to expect  ( dekstop).svg"
              alt="What to Expect - Desktop"
              width={1200}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <Image
              src="/images/what to expect  ( dekstop).svg"
              alt="What to Expect - Mobile"
              width={600}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ═════ MONEY BACK GUARANTEE ═════ */}
      <section className="px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop Version */}
          <div className="hidden lg:block">
            <Image
              src="/images/money 100 ( desktop ).svg"
              alt="100% Money Back Guarantee - Desktop"
              width={1200}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <Image
              src="/images/money 100 ( mobile ).svg"
              alt="100% Money Back Guarantee - Mobile"
              width={600}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ═════ WHAT DO YOU GET ═════ */}
      <section className="px-4 md:px-12 lg:px-[120px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop Version */}
          <div className="hidden lg:block">
            <Image
              src="/images/what you get ( desktop version ).svg"
              alt="What You Get - Desktop"
              width={1200}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <Image
              src="/images/what you get ( mobile version ).svg"
              alt="What You Get - Mobile"
              width={600}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ═════ EXPERT'S GUIDANCE ═════ */}
      <div className="section-wrapper">
        <ExpertGuidanceSection />
      </div>

      {/* ═════ FROM BAD DIETS TO FOREVER FIT ═════ */}
      <section className="py-12 md:py-20 px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[840px] mx-auto text-center mb-10">
          <SectionTitle className="text-[#014E4E]">From Bad Diets to Forever Fit</SectionTitle>
          <p className="text-[#014E4E] text-[12px] md:text-[14px] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our Clients Share their Success Stories
          </p>
        </div>
        <YouTubeShortsSlider />
      </section>

      {/* ═════ PRICING ═════ */}
      <section className="py-12 md:py-20 px-4 md:px-12 lg:px-[120px]">
        <div className="text-center mb-10">
          <SectionLabel className="justify-center">Our Plans</SectionLabel>
          <SectionTitle className="text-[#1E1E1E] mt-2">Our Pricing</SectionTitle>
          <p className="text-[#828283] text-[12px] md:text-[14px] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join our Plan today and embark on a journey to better health with our weight loss plan!
          </p>
        </div>

        {loadingPricing ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-[#014E4E] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {pricingPlans.map((plan: any, index: number) => (
              <div key={index} className="w-full sm:w-[280px]">
                {/* Plan Banner */}
                {plan.planId && (
                  <div className="mb-2">
                    <PlanBannerDisplay planId={plan.planId} />
                  </div>
                )}
                {/* Card */}
                <div className="bg-white rounded-[12px] shadow-[0_0_4px_rgba(0,0,0,0.25)] overflow-hidden p-6 flex flex-col h-[466px] relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="text-[#6B7280] text-[14px] font-semibold" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>{plan.label}</p>
                      <p className="text-[#1E1E1E] text-[18px] font-semibold capitalize" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>PLAN</p>
                    </div>
                    <span className="border border-[#FF850B] rounded-full px-4 py-2 text-[10px] font-bold tracking-[1px] text-[#1E1E1E]" style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}>
                      {plan.badge}
                    </span>
                  </div>
                  {/* Price */}
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-[#014E4E] text-[28px] md:text-[32px] font-semibold capitalize" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>{plan.price}</span>
                    <span className="text-[#6B7280] text-[16px] line-through mb-1" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>{plan.original}</span>
                  </div>
                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4" />
                  {/* Features */}
                  <p className="font-semibold text-[#1E1E1E] text-[16px] mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>What you&apos;ll get:</p>
                  <div className="flex flex-col gap-1 flex-1">
                    {plan.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckIcon24 />
                        <span className="text-[#6B7280] text-[13px] md:text-[14px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6B7280] text-[11px] md:text-[12px] mt-2 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Stay on track: weekly check-ins to ensure your progress.
                  </p>
                  {/* Buy button */}
                  <button
                    onClick={() => {
                      const price = plan.price.replace('₹', '').replace(',', '');
                      const product = {
                        id: `weight-loss-${plan.label.toLowerCase().replace(/\s+/g, '-')}`,
                        name: `Weight Loss Plan - ${plan.label}`,
                        price: parseInt(price),
                        quantity: 1,
                      };
                      sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                      window.location.href = '/checkout';
                    }}
                    className="bg-[#FF850B] text-white font-bold text-[11px] px-5 py-2.5 rounded-full w-fit cursor-pointer"
                    style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ═════ CLIENT TESTIMONIALS ═════ */}
      <section className="py-12 md:py-20 px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left: heading + cards */}
          <div className="flex-1">
            <SectionLabel>Our Testimonials</SectionLabel>
            <SectionTitle className="text-[#1E1E1E] mt-2 mb-8">
              Success stories from<br />our clients
            </SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {testimonials.slice(0, 4).map((t, index) => {
                const highlighted = index === 0;
                return (
                  <div
                    key={index}
                    className={`relative rounded-[17px] p-5 border border-[#F1F1F1] overflow-hidden ${
                      highlighted ? 'bg-[#FF850B]' : 'bg-white'
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-[12px] ${highlighted ? 'text-[#014E4E]' : 'text-[#FF850B]'}`}>★</span>
                      ))}
                    </div>
                    {/* Quote */}
                    <p className={`text-[13px] leading-[1.6] mb-4 ${highlighted ? 'text-[#1E1E1E]' : 'text-[#828283]'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      &ldquo;{t.content}&rdquo;
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-[35px] h-[35px] rounded-full overflow-hidden shrink-0 relative">
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-[#1E1E1E] font-semibold text-[15px]" style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}>{t.name}</p>
                        {t.role && <p className={`text-[13px] ${highlighted ? 'text-[#1E1E1E]' : 'text-[#828283]'}`} style={{ fontFamily: 'Inter, sans-serif' }}>{t.role}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right: photo collage */}
          <div className="relative w-full lg:w-[500px] h-[450px] md:h-[550px] shrink-0 hidden lg:block">
            <div className="absolute left-[10px] top-0 w-[260px] h-[380px] rounded-[26px] overflow-hidden">
              <Image src={heroImage1} alt="Success" fill className="object-cover" />
            </div>
            <div className="absolute left-[240px] top-0 w-[200px] h-[260px] rounded-[26px] overflow-hidden border-4 border-white">
              <Image src={heroImage2} alt="Success" fill className="object-cover" />
            </div>
            <div className="absolute left-0 top-[300px] w-[280px] h-[180px] rounded-[26px] overflow-hidden border-4 border-white">
              <Image src={heroImage3} alt="Success" fill className="object-cover" />
            </div>
            <div className="absolute left-[310px] top-[400px] bg-[#014E4E] rounded-[24px] w-[177px] h-[106px] flex flex-col items-center justify-center text-white">
              <span className="font-bold text-[32px]" style={{ fontFamily: 'Inter, sans-serif' }}>75,000+</span>
              <span className="font-medium text-[14px] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Transformation</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
