"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TransformationGallery from '@/components/TransformationGallery';
import DynamicPlansDisplay from '@/components/DynamicPlansDisplay';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import { getPricingByCategory } from '@/lib/api';

/* ─── DATA ─── */
const roleOfDietCards = [
  {
    title: 'Insulin Regulation',
    desc: 'Unstructured meals and frequent sugar spikes increase insulin resistance. Insulin resistance is the common root behind diabetes, fatty liver, and rising cholesterol levels.',
    image: '/images/Balancing Blood Sugar Levels.png',
  },
  {
    title: 'Liver Fat Accumulation',
    desc: 'Excess calories and poor nutrient timing cause fat to deposit in the liver. A fatty liver worsens insulin resistance and disrupts cholesterol processing.',
    image: '/images/Reducing Inflammation.png',
  },
  {
    title: 'Hormonal & Thyroid Function',
    desc: 'Inadequate protein, micronutrient imbalance, and extreme dieting can impair thyroid hormone activity, slowing metabolism and increasing fat storage.',
    image: '/images/Increasing Fertility.png',
  },
  {
    title: 'Cholesterol Metabolism',
    desc: 'Dietary imbalance affects how cholesterol is produced, transported, and cleared. Poor food choices raise LDL and triglycerides while lowering protective HDL.',
    image: '/images/Managing Weight.png',
  },
];

const whatYouGetCards = [
  {
    title: 'Ongoing Therapeutic Support',
    desc: 'Regular follow-ups to monitor progress, adjust nutrition, and prevent condition worsening over time.',
    icon: '/images/Ongoing Support.png',
  },
  {
    title: 'Condition-Specific Care',
    desc: 'Your plan is handled by dietitians experienced in diabetes, thyroid, fatty liver, and cholesterol management.',
    icon: '/images/Specialised Care.png',
  },
  {
    title: 'Tailored to Your Reports',
    desc: 'Diet plans are customised based on your medical reports, medications, routine, and food preferences.',
    icon: '/images/tailored.png',
  },
  {
    title: 'Sustainable Metabolic Control',
    desc: 'Focus on long-term stability, improved metabolism, and reduced disease progression, not temporary fixes.',
    icon: '/images/Sustainable.png',
  },
  {
    title: 'Medication Compatible Planning',
    desc: 'Nutrition aligned with ongoing treatment to support better response and avoid unnecessary escalation.',
    icon: '/images/Ongoing Support.png',
  },
];

const gkkBenefits = [
  { side: 'left',  title: 'Hormonal & Thyroid Support', desc: 'Balanced protein and micronutrient intake supports efficient thyroid hormone activity and metabolic regulation.', icon: '/images/inflam.png' },
  { side: 'right', title: 'Inflammation Reduction',     desc: 'Reduces chronic low-grade inflammation that worsens insulin resistance, liver fat accumulation, and metabolic dysfunction.', icon: '/images/Reducing Inflammation.png' },
  { side: 'left',  title: 'Blood Sugar Stability',      desc: 'Structured meals prevent glucose spikes and crashes, improving insulin sensitivity and diabetes control.', icon: '/images/Balancing Blood Sugar Levels.png' },
  { side: 'right', title: 'Cholesterol Regulation',     desc: 'Improves lipid processing and clearance, helping reduce LDL and triglyceride levels over time.', icon: '/images/metabolic.png' },
];



export default function TherapeuticPlanPage() {
  const [pricingPlans, setPricingPlans] = useState<any[]>([]);
  const [loadingPricing, setLoadingPricing] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory('therapeutic-diet-plans');
        if (dbPricing && dbPricing.length > 0) {
          const formattedPricing = dbPricing.map((plan: any) => ({
            duration: plan.planName.split(' ')[0],
            durationSub: plan.planName.split(' ').slice(1).join(' '),
            durationEnd: 'Plan',
            price: `₹ ${plan.price.toLocaleString()}`,
            originalPrice: `₹ ${plan.originalPrice.toLocaleString()}`,
            popular: plan.popular,
            badge: plan.badge,
            features: plan.features,
          }));
          setPricingPlans(formattedPricing);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
      } finally {
        setLoadingPricing(false);
      }
    };
    fetchPricing();
  }, []);

  return (
    <main className="bg-white">

      {/* ═══ HERO — MOBILE ═══ */}
      <section className="bg-white pt-0 px-0 md:hidden">
        <div className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] relative overflow-hidden">
          <div className="relative z-10">
            <Navbar />
          </div>
          <div className="py-6 px-4 pb-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/[0.08] py-2 px-3 rounded-full backdrop-blur-[10px] border border-white/10">
                <span className="text-sm">✨</span>
                <span className="text-white text-xs font-medium">For Healthier, Happier you</span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
                  alt="Healthy Food Heart"
                  width={260}
                  height={260}
                  className="w-[260px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                />
              </div>
              <h1 className="text-3xl font-bold text-white leading-tight tracking-tight">
                Yes! <span className="text-[#FF850B]">Diabetes, Thyroid,<br />Fatty Liver, Cholestrol</span> Can Be Reversed.
              </h1>
              <p className="text-white/80 text-sm leading-relaxed px-2">
                And it can be done with just <span className="text-[#FF850B] font-semibold">Ghar Ka Khana</span>,<br />guided by nutritional science.
              </p>
              <div className="flex flex-col gap-3 w-full px-2">
                <button
                  onClick={() => {
                    const product = { id: 'therapeutic-plan-3months', name: 'Therapeutic Plan - 3 Months', price: 13000, quantity: 1 };
                    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                    window.location.href = '/checkout';
                  }}
                  className="bg-[#FF850B] text-white border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,133,11,0.3)] hover:bg-[#e07a1a] w-full"
                >
                  Get Started Today →
                </button>
                <a href="/appointment" className="bg-transparent text-white border-2 border-white/25 rounded-full py-3 px-6 text-sm font-semibold text-center hover:border-white/50 w-full">
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HERO — DESKTOP ═══ */}
      <section className="bg-white pt-3 px-12 hidden md:block">
        <div className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] rounded-[30px] relative overflow-hidden min-h-[600px]">
          <div className="relative z-10">
            <Navbar />
          </div>
          <div className="py-10 px-16 pb-24">
            <div className="absolute top-1/2 -right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,133,11,0.1)_0%,transparent_70%)] rounded-full -translate-y-1/2 pointer-events-none" />
            <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-10">
              <div className="flex-[1_1_480px] max-w-[580px]">
                <div className="inline-flex items-center gap-2 bg-white/[0.08] py-2.5 px-4 rounded-full mb-6 backdrop-blur-[10px] border border-white/10">
                  <span className="text-sm">✨</span>
                  <span className="text-white text-[13px] font-medium">For Healthier, Happier you</span>
                </div>
                <h1 className="text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                  Yes! <span className="text-[#FF850B]">Diabetes, Thyroid,<br />Fatty Liver, Cholestrol</span><br />Can Be Reversed.
                </h1>
                <p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-[480px]">
                  And it can be done with just <span className="text-[#FF850B] font-semibold">Ghar Ka Khana</span>, guided by nutritional science.
                </p>
                <div className="flex gap-3.5 flex-wrap">
                  <button
                    onClick={() => {
                      const product = { id: 'therapeutic-plan-3months', name: 'Therapeutic Plan - 3 Months', price: 13000, quantity: 1 };
                      sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                      window.location.href = '/checkout';
                    }}
                    className="bg-[#FF850B] text-white border-none rounded-full py-3.5 px-7 text-sm font-semibold cursor-pointer flex items-center gap-2 shadow-[0_4px_20px_rgba(255,133,11,0.3)] hover:bg-[#e07a1a]"
                  >
                    Get Started Today →
                  </button>
                  <a href="/appointment" className="bg-transparent text-white border-2 border-white/25 rounded-full py-3.5 px-7 text-sm font-semibold hover:border-white/50">
                    Book Consultation
                  </a>
                </div>
              </div>
              <div className="flex-[0_1_420px] flex justify-center items-center">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
                  alt="Healthy Food Heart"
                  width={420}
                  height={420}
                  className="w-full h-auto max-w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ ROLE OF DIET SECTION ═══ */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]" id="role-of-diet">
        <div className="max-w-[1200px] mx-auto px-4">

          <h2 className="text-center text-[28px] md:text-[44px] font-bold text-black">
            Role of Diet in <span className="text-[#FF8A00]">Diabetes, Thyroid,<br className="hidden md:block" />Fatty Liver & Cholesterol</span>
          </h2>
          <p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-[700px] mx-auto">
            Diet plays a central role in metabolic disorders because it directly influences insulin response, liver function, hormone regulation, and fat metabolism.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LEFT — 2×2 grid of cards */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {roleOfDietCards.map((card, i) => (
                <div key={i} className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">
                  <div className="h-[200px]">
                    <Image src={card.image} width={500} height={300} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#FF8A00] text-white p-6 flex-1">
                    <div className="w-10 h-[2px] bg-white mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — Metabolic Interconnection card */}
            <div className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">
              <div className="flex-1 min-h-[260px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                <div className="w-full h-full relative min-h-[260px]">
                  <Image
                    src="/images/metabolic.png"
                    alt="Metabolic Interconnection"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
              </div>
              <div className="bg-[#FF8A00] text-white p-6">
                <div className="w-10 h-[2px] bg-white mb-4" />
                <h3 className="text-lg font-semibold mb-2">Metabolic Interconnection</h3>
                <p className="text-sm opacity-90">
                  Diabetes, thyroid imbalance, fatty liver, and cholesterol dysfunction accelerate the others. Fixing diet addresses all four simultaneously.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══ WHY THERAPEUTIC NUTRITION ═══ */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#014E4E] rounded-[24px] px-6 md:px-14 py-10 md:py-14 text-center">

            <h2 className="text-white text-[22px] md:text-[36px] font-bold leading-tight mb-4">
              Why These Conditions Need<br />
              <span className="text-[#FF850B]">Therapeutic Nutrition</span> (Not Normal Dieting)
            </h2>
            <p className="text-white/75 text-sm md:text-[15px] leading-relaxed max-w-[620px] mx-auto mb-10">
              Diabetes, thyroid, fatty liver and cholesterol are not weight problems. They are metabolic disorders. Generic diet charts focus on calories. Therapeutic nutrition focuses on
            </p>

            {/* 4 icon circles */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-10">
              {[
                {
                  label: 'Insulin\nresponse',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4v6M16 22v6M4 16h6M22 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M8 8l4 4M20 20l4 4M8 24l4-4M20 12l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'Liver\nload',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M6 18c0-6 4-12 10-12 4 0 7 2.5 8 6 1 3-0.5 6-3 8-2 1.5-5 2-8 2-2 0-4-0.5-5.5-2C6.5 19.5 6 18.8 6 18z" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M14 14c1 1.5 2 3 1.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'Hormonal\nsignalling',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="9" r="4" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M10 28v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M22 12c2 1 3 3 2.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M24 8c3 2 4 5 3 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'Lipid\nmetabolism',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="11" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M16 5v4M16 23v4M5 16h4M23 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="16" cy="16" r="2" fill="white"/>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-[72px] h-[72px] rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center">
                    {item.svg}
                  </div>
                  <span className="text-white text-[13px] font-medium text-center whitespace-pre-line">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-white font-bold text-[15px] md:text-[17px]">
              Without condition-specific nutrition, weight loss<br className="hidden md:block" />
              may happen but the disease worsens.
            </p>

          </div>
        </div>
      </section>


      {/* ═══ OUR THERAPEUTIC APPROACH ═══ */}
      <section className="w-full py-8 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-[#EAEEF1] rounded-[24px] p-4 md:p-10 border border-[#c8d8e8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <div className="rounded-[18px] overflow-hidden w-full max-w-[330px] md:max-w-[520px]">
                  <Image src="/images/3 girl.png" alt="Dietician Team" width={600} height={800} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-[24px] md:text-[36px] font-bold text-center md:text-left mb-2">
                  Our Therapeutic Approach
                </h2>
                <h3 className="text-[18px] md:text-[22px] font-semibold text-[#FF850B] text-center md:text-left mb-3">
                  (How We Work Differently)
                </h3>
                <p className="text-gray-600 text-[13px] md:text-[14px] text-center md:text-left mb-6">
                  Our therapeutic nutrition plans are designed to
                </p>

                {/* 2×2 feature grid */}
                <div className="w-full grid grid-cols-2 gap-3 mb-5">
                  {[
                    { icon: '🩸', text: 'Reduce insulin resistance' },
                    { icon: '🫀', text: 'Support liver fat reversal' },
                    { icon: '🦋', text: 'Improve thyroid hormone efficiency' },
                    { icon: '⚗️', text: 'Correct cholesterol metabolism' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#FF850B] rounded-[14px] p-3 md:p-4">
                      <div className="w-[40px] h-[40px] bg-[#014E4E] rounded-[10px] flex items-center justify-center flex-shrink-0 text-lg">
                        {f.icon}
                      </div>
                      <span className="text-white font-semibold text-[13px] md:text-[14px] leading-tight">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Banner */}
                <div className="w-full bg-[#FF850B] rounded-[12px] py-3 px-5 text-center mb-4">
                  <span className="text-white font-bold text-[13px] md:text-[15px] tracking-wider uppercase">Each Plan Is Carefully</span>
                </div>

                {/* 4 checkmarks (2×2) */}
                <div className="w-full grid grid-cols-2 gap-2">
                  {[
                    'Based on medical reports',
                    'Structured around Indian food',
                    'Adjusted with medication timing',
                    'Monitored continuously',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-[10px] p-3">
                      <span className="w-5 h-5 rounded-full bg-[#FF850B] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">✓</span>
                      <span className="text-[#1E1E1E] text-[12px] md:text-[13px] font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ WHAT YOU WILL GET ═══ */}
      <section className="w-full py-8 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">

          <div className="mb-6 md:mb-10 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <span className="w-[14px] h-[14px] rounded-sm bg-[#FF850B] inline-block" />
              <span className="text-[#014E4E] font-semibold text-[12px]">Our Testimonials</span>
            </div>
            <h2 className="text-[26px] md:text-[44px] font-bold text-[#1E1E1E]">
              What You Will <span className="text-[#FF850B]">Get</span>?
            </h2>
          </div>

          {/* 2 + 2 + 1 layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatYouGetCards.map((card, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 bg-[#FF850B] rounded-[16px] p-4 ${i === 4 ? 'sm:col-span-2 sm:max-w-[560px] sm:mx-auto w-full' : ''}`}
              >
                <div className="bg-[#014E4E] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <Image src={card.icon} alt={card.title} width={40} height={40} className="object-contain" />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-[15px] md:text-[18px] leading-tight">{card.title}</h4>
                  <p className="text-white text-[12px] md:text-[13px] leading-[18px] mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══ HOW GHAR KA KHANA HELPS ═══ */}
      <section className="py-16 px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#014E4E] rounded-[24px] px-6 md:px-16 py-14">

            <h2 className="text-center text-white text-[22px] md:text-[42px] font-bold leading-tight mb-12">
              How <span className="text-[#FF850B]">GHAR KA KHANA</span> Diet Plan Helps<br className="hidden md:block" />
              Diabetes, Thyroid, Cholesterol &amp; Fatty Liver
            </h2>

            {/* DESKTOP DIAGRAM */}
            <div className="hidden md:block">
              {/* Top node */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-4 max-w-[320px] w-full">
                  <div className="w-[48px] h-[48px] bg-[#FF850B] rounded flex items-center justify-center flex-shrink-0">
                    <Image src="/images/fat burning.png" alt="" width={26} height={26} />
                  </div>
                  <div>
                    <h4 className="text-[#FF850B] font-semibold text-[15px]">Visceral Fat Reduction</h4>
                    <p className="text-white text-[13px]">Targets internal fat stored around organs, supporting fatty liver improvement and better cholesterol metabolism.</p>
                  </div>
                </div>
              </div>

              {/* Middle row: left • center • right */}
              <div className="grid grid-cols-3 items-center gap-6 mb-4">
                <div className="flex flex-col gap-8">
                  {gkkBenefits.filter(b => b.side === 'left').map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-4">
                      <div className="w-[48px] h-[48px] bg-[#FF850B] rounded flex items-center justify-center flex-shrink-0">
                        <Image src={item.icon} alt="" width={26} height={26} />
                      </div>
                      <div>
                        <h4 className="text-[#FF850B] font-semibold text-[15px]">{item.title}</h4>
                        <p className="text-white text-[13px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Image src="/images/table.png" alt="Ghar Ka Khana" width={240} height={240} />
                </div>

                <div className="flex flex-col gap-8">
                  {gkkBenefits.filter(b => b.side === 'right').map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-4">
                      <div className="w-[48px] h-[48px] bg-[#FF850B] rounded flex items-center justify-center flex-shrink-0">
                        <Image src={item.icon} alt="" width={26} height={26} />
                      </div>
                      <div>
                        <h4 className="text-[#FF850B] font-semibold text-[15px]">{item.title}</h4>
                        <p className="text-white text-[13px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MOBILE VERSION */}
            <div className="md:hidden mt-6">
              <div className="flex justify-center mb-6">
                <Image src="/images/table.png" alt="Ghar Ka Khana" width={200} height={200} />
              </div>
              <div className="flex flex-col gap-4">
                {/* Visceral Fat Reduction */}
                <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="w-[40px] h-[40px] bg-[#FF850B] rounded flex items-center justify-center flex-shrink-0">
                    <Image src="/images/fat burning.png" alt="" width={22} height={22} />
                  </div>
                  <div>
                    <h4 className="text-[#FF850B] font-semibold text-[14px]">Visceral Fat Reduction</h4>
                    <p className="text-white text-[12px]">Targets internal fat stored around organs, supporting fatty liver improvement and better cholesterol metabolism.</p>
                  </div>
                </div>
                {gkkBenefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl p-3">
                    <div className="w-[40px] h-[40px] bg-[#FF850B] rounded flex items-center justify-center flex-shrink-0">
                      <Image src={item.icon} alt="" width={22} height={22} />
                    </div>
                    <div>
                      <h4 className="text-[#FF850B] font-semibold text-[14px]">{item.title}</h4>
                      <p className="text-white text-[12px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM 3 CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {[
                { icon: '/images/maintain.png', title: 'Metabolic Control', desc: 'Improved insulin response and reduced disease progression' },
                { icon: '/images/detox.png',    title: 'Organ Function Support', desc: 'Supports liver, thyroid, and cardiovascular health' },
                { icon: '/images/Sustainable.png', title: 'Long-Term Stability', desc: 'Sustainable improvement without extreme restriction or rebound' },
              ].map((c, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Image src={c.icon} alt="" width={32} height={32} />
                  </div>
                  <h5 className="text-[#FF850B] font-semibold">{c.title}</h5>
                  <p className="text-white text-sm mt-1">{c.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ═══ EXPERT GUIDANCE ═══ */}
      <ExpertGuidanceSection />


      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-12 md:py-20 px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-[630px]">
              <div className="text-[#FF850B] text-xs md:text-sm font-semibold tracking-wide uppercase">Our Testimonials</div>
              <h2 className="text-[#1E1E1E] text-[28px] md:text-[44px] font-bold leading-[1.2] mt-2">
                Over 75,000+<br />People Enjoy Weight Loss
              </h2>
              <p className="text-[#828283] text-[12px] md:text-[14px] mt-2">
                Join our Plan today and embark on a journey to better health with our weight loss plan!
              </p>
            </div>
            <div className="flex gap-1 items-center">
              {[6,6,6,18,6,6].map((w, i) => (
                <div key={i} className={`h-[6px] rounded-full ${w === 18 ? 'bg-[#FF850B] w-[18px]' : 'bg-[#014E4E] w-[6px]'}`} />
              ))}
            </div>
          </div>
          <TransformationGallery page="therapeutic" title="" subtitle="" maxItems={6} />
        </div>
      </section>


      {/* ═══ PRICING — MOBILE ═══ */}
      <section className="wl-section md:hidden py-8 px-4">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star wl-teal-text">✦</span> <span className="wl-teal-text text-xs">PRICING</span>
          </div>
          <h2 className="wl-section-title wl-center text-xl mb-2">Choose Your Perfect Plan</h2>
          <p className="wl-section-desc wl-center text-xs mb-4">
            Flexible pricing options designed to fit your wellness journey.
          </p>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <DynamicPlansDisplay
                category="therapeutic-diet-plans"
                showHeader={false}
                columns="1"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `therapeutic-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `Therapeutic Diet Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1,
                  };
                  sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                  window.location.href = '/checkout';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING — DESKTOP ═══ */}
      <section className="wl-section hidden md:block">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star wl-teal-text">✦</span> <span className="wl-teal-text">PRICING</span>
          </div>
          <h2 className="wl-section-title wl-center">Choose Your Perfect Plan</h2>
          <p className="wl-section-desc wl-center">
            Flexible pricing options designed to fit your wellness journey.
          </p>
          <div className="flex justify-center w-full">
            <div className="max-w-[1200px] w-full">
              <DynamicPlansDisplay
                category="therapeutic-diet-plans"
                showHeader={false}
                columns="3"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `therapeutic-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `Therapeutic Diet Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1,
                  };
                  sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                  window.location.href = '/checkout';
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
