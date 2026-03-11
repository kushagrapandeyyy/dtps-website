"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import OurTeamSection from '@/components/OurTeamSection';
import YouTubeShortsSlider from '@/components/YouTubeShortsSlider';
import FAQSection from '@/components/FAQSection';
import OurBlogsSection from '@/components/OurBlogsSection';
import Image from 'next/image';
import { getOptimizedUrl } from '@/lib/imagekit';


type Testimonial = {
  _id?: string;
  name: string;
  role?: string;
  content: string;
  image: string;
};

const fallbackTestimonials: Testimonial[] = [
  {
    name: 'Kalyani Satpathy',
    content: 'The diet plan is very simple and it included home cooked meal. Nothing fancy they will tell you and this is the best part of my journey.',
    image: '/assets/img/testimonial-1.jpg',
  },
  {
    name: 'Farah',
    content: 'I saw ad of Dt Poonam Sagar on Instagram and thought to give it a try and I dont regret my decision.',
    image: '/assets/img/testimonial-2.jpg',
  },
  {
    name: 'Rimpy Thakur',
    content: "Great experience with Dietician Poonam Sagar's team. Special thanks to Ritika Bhatnagar ma'am who created a special diet plan for me",
    image: '/assets/img/testimonial-3.jpg',
  },
  {
    name: 'Payal Padamwar',
    content: 'I lost 6 kg in just 3 months with a simple yet highly effective diet plan. The best part was the team\'s support.',
    image: '/assets/img/testimonial-1.jpg',
  },
];

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials?page=home&active=true');
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        const normalized = (data.testimonials || []).map((item: Testimonial & { _id?: string }) => ({
          _id: item._id,
          name: item.name || 'Client',
          role: item.role || '',
          content: item.content || '',
          image: getOptimizedUrl(item.image || '/assets/img/testimonial-1.jpg', {
            width: 300,
            height: 350,
            quality: 80,
            format: 'auto',
          }),
        }));
        if (normalized.length > 0) {
          setTestimonials(normalized);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <div className="bg-white">
      <Hero />
      <div className="section-wrapper">
        <AboutUsSection />
      </div>
      <div className="section-wrapper">
        <ServicesSection />
      </div>
      <div className="section-wrapper">
        <WhatWeDoSection />
      </div>
      <div className="section-wrapper">
        <WhyChooseUsSection />
      </div>
      {/* Expert Guidance Section */}
      <div className="section-wrapper">
        <ExpertGuidanceSection />
      </div>
      {/* Our Team Section */}
      <div className="section-wrapper">
        <OurTeamSection />
      </div>

      {/* Our Programs Section */}
      <div className="section-wrapper">
      <section className="bg-white py-16 md:py-20 px-4 md:px-8 rounded-[30px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-start justify-between mb-10 md:mb-14 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-teal-600 font-semibold text-base">Our Programs</span>
              </div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-gray-900 leading-tight">
                Tailored programs for<br />your wellness
              </h2>
            </div>
            <button className="bg-[#ff9100] text-white font-semibold text-base border-none rounded-full py-3 px-8 cursor-pointer transition-all duration-300 hover:shadow-lg">
              All Programs
            </button>
          </div>
          <YouTubeShortsSlider />
        </div>
      </section>
      </div>

        {/* How It Work Section */}
      <div className="section-wrapper">
        <section className="relative w-full">
          {/* DESKTOP */}
          <div className="hidden md:block relative">
            <div
              className="relative overflow-hidden rounded-[30px] bg-[#014E4E] px-[52px] pt-[74px] pb-[210px]"
              style={{
                backgroundImage: `
                  repeating-radial-gradient(
                    circle at 0% 30%,
                    rgba(255,255,255,0.06) 0px,
                    rgba(255,255,255,0.06) 1px,
                    transparent 1px,
                    transparent 32px
                  ),
                  linear-gradient(180deg, #015a5a 0%, #014E4E 100%)
                `,
              }}
            >
              <div className="mx-auto max-w-[1202px]">
                {/* Header */}
                <div className="flex items-start justify-between gap-10 px-[128px]">
                  <div className="max-w-[430px]">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[#FF850B] text-[14px] leading-none">✦</span>
                      <span className="text-[14px] font-semibold leading-[1] text-white">
                        How It Work
                      </span>
                    </div>

                    <h2 className="text-[56px] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                      Step-by-step guide to
                      <br />
                      your healthy journey
                    </h2>
                  </div>

                  <p className="max-w-[415px] pt-8 text-[15px] leading-[1.75] text-white/90">
                    Achieving your health goals has never been easier. Our
                    step-by-step approach provides personalized guidance,
                    actionable strategies, and ongoing support.
                  </p>
                </div>

                {/* Steps */}
                <div className="relative mt-[78px] px-[88px]">
                  <div className="pointer-events-none absolute left-[120px] right-[120px] top-[31px] border-t border-dashed border-white/45" />

                  <div className="grid grid-cols-5 gap-6">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="relative mb-5 h-[72px]">
                        <div className="relative z-[2] flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <circle cx="15.5" cy="5.7" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="4.9" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="15.5" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="26.1" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <path
                              d="M15.5 8.8V16.2M8 20.9H23M4.9 21.2V17.2H26.1V21.2"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <div className="absolute left-[52px] top-[22px] z-[3] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF850B] text-[10px] font-semibold text-white">
                          1
                        </div>

                        <div className="absolute right-[-8px] top-[28px] z-[2] text-white/80">
                          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                            <path
                              d="M1 4H14M14 4L11 1M14 4L11 7"
                              stroke="white"
                              strokeOpacity="0.85"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                        Choose Your Plan
                      </h3>
                      <p className="mt-2 max-w-[170px] text-[12.5px] leading-[1.6] text-white/85">
                        Select a diet plan based on your goal, health condition,
                        and duration.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="relative mb-5 h-[72px]">
                        <div className="relative z-[2] flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <path
                              d="M10 15.2V11.2C10 8 12.5 5.5 15.5 5.5C18.5 5.5 21 8 21 11.2V15.2"
                              stroke="white"
                              strokeWidth="1.2"
                            />
                            <rect x="7.4" y="13.5" width="4.2" height="7.2" rx="2.1" stroke="white" strokeWidth="1.2" />
                            <rect x="19.4" y="13.5" width="4.2" height="7.2" rx="2.1" stroke="white" strokeWidth="1.2" />
                            <path
                              d="M14 22.6H17.2C18.7 22.6 19.9 21.4 19.9 19.9"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <rect x="13.1" y="21.2" width="3.8" height="2.6" rx="1.3" stroke="white" strokeWidth="1.2" />
                          </svg>
                        </div>

                        <div className="absolute left-[52px] top-[22px] z-[3] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF850B] text-[10px] font-semibold text-white">
                          2
                        </div>

                        <div className="absolute right-[-8px] top-[28px] z-[2] text-white/80">
                          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                            <path
                              d="M1 4H14M14 4L11 1M14 4L11 7"
                              stroke="white"
                              strokeOpacity="0.85"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                        Health Counsellor Connect
                      </h3>
                      <p className="mt-2 max-w-[170px] text-[12.5px] leading-[1.6] text-white/85">
                        Our health counsellor connects with you to understand
                        your lifestyle and concerns.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="relative mb-5 h-[72px]">
                        <div className="relative z-[2] flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <circle cx="12" cy="11.5" r="4.2" stroke="white" strokeWidth="1.1" />
                            <path
                              d="M5.5 23.5C6.5 19.7 8.9 18 12 18C15.1 18 17.5 19.7 18.5 23.5"
                              stroke="white"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                            <rect x="18.7" y="8.2" width="7.4" height="10.2" rx="1.4" stroke="white" strokeWidth="1.1" />
                            <path d="M20.6 11.2H24.4M20.6 14.2H24.4" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                            <path d="M18.7 23.5H26.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                          </svg>
                        </div>

                        <div className="absolute left-[52px] top-[22px] z-[3] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF850B] text-[10px] font-semibold text-white">
                          3
                        </div>

                        <div className="absolute right-[-8px] top-[28px] z-[2] text-white/80">
                          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                            <path
                              d="M1 4H14M14 4L11 1M14 4L11 7"
                              stroke="white"
                              strokeOpacity="0.85"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                        Dietitian Assessment Call
                      </h3>
                      <p className="mt-2 max-w-[170px] text-[12.5px] leading-[1.6] text-white/85">
                        Your assigned dietitian speaks with you to understand
                        your lifestyle, food choices and health goals before
                        planning your diet.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                      <div className="relative mb-5 h-[72px]">
                        <div className="relative z-[2] flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <rect x="8.2" y="4.8" width="14.6" height="21.4" rx="1.8" stroke="white" strokeWidth="1.2" />
                            <path d="M12 9.7H19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                            <rect x="11.2" y="12.6" width="2.5" height="2.5" stroke="white" strokeWidth="1.1" />
                            <rect x="11.2" y="17.2" width="2.5" height="2.5" stroke="white" strokeWidth="1.1" />
                            <path d="M15.4 13.8H19.6M15.4 18.4H19.6" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                          </svg>
                        </div>

                        <div className="absolute left-[52px] top-[22px] z-[3] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF850B] text-[10px] font-semibold text-white">
                          4
                        </div>

                        <div className="absolute right-[-8px] top-[28px] z-[2] text-white/80">
                          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                            <path
                              d="M1 4H14M14 4L11 1M14 4L11 7"
                              stroke="white"
                              strokeOpacity="0.85"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                        Personalised Plan Delivery
                      </h3>
                      <p className="mt-2 max-w-[170px] text-[12.5px] leading-[1.6] text-white/85">
                        Your customised diet plan is shared on OUR APP within 24
                        hours of the assessment.
                      </p>
                    </div>

                    {/* Step 5 */}
                    <div className="relative">
                      <div className="relative mb-5 h-[72px]">
                        <div className="relative z-[2] flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <rect x="5.2" y="19.2" width="20.6" height="5.4" stroke="white" strokeWidth="1.1" />
                            <path d="M8.5 19.1V12.7M15.5 19.1V9.3M22.5 19.1V14.8" stroke="white" strokeWidth="1.1" />
                            <path d="M7.2 10.1L10.4 7.8L14.1 10.1L18.1 6.8L23.6 9.5" stroke="white" strokeWidth="1.1" />
                            <path d="M13.8 5.1H17.2V8.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>

                        <div className="absolute left-[52px] top-[22px] z-[3] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF850B] text-[10px] font-semibold text-white">
                          5
                        </div>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                        Follow-Ups &amp; Tracking
                      </h3>
                      <p className="mt-2 max-w-[170px] text-[12.5px] leading-[1.6] text-white/85">
                        Weekly or requirement-based follow-ups to track progress
                        and make timely adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlap appointment card */}
            <div className="relative z-10 mx-auto -mt-[178px] max-w-[840px]">
              <div className="rounded-[22px] border border-[#F1F1F1] bg-white px-[66px] py-[66px] shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-start gap-[40px]">
                  {/* left */}
                  <div className="w-[334px] flex-shrink-0">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-[#FF850B] text-[14px] leading-none">✦</span>
                      <span className="text-[14px] font-semibold text-[#014E4E]">
                        Appointment
                      </span>
                    </div>

                    <h3 className="text-[54px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1E1E1E]">
                      Make appointment
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.7] text-[#828283]">
                      Easy scheduling for a personalized health coaching session.
                      Take the first step towards better health today!
                    </p>

                    <div className="mt-7 overflow-hidden rounded-[20px]">
                      <Image
                        src="/img/b29c961c86fe88546c6e3c94c7c1fdaee4e4c518.png"
                        alt="Dietitian consultation"
                        width={334}
                        height={185}
                        className="h-[185px] w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* right */}
                  <div className="flex-1 pt-6">
                    <form className="space-y-[15px]">
                      <div className="grid grid-cols-2 gap-[20px]">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="h-[50px] w-full rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none placeholder:text-[#828283]"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="h-[50px] w-full rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none placeholder:text-[#828283]"
                        />
                      </div>

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[50px] w-full rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none placeholder:text-[#828283]"
                      />

                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-[50px] w-full rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none placeholder:text-[#828283]"
                      />

                      <div className="grid grid-cols-2 gap-[20px]">
                        <div className="relative">
                          <select className="h-[50px] w-full appearance-none rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none">
                            <option>Service</option>
                            <option>Weight Management</option>
                            <option>PCOD/PCOS</option>
                            <option>Therapeutic Diet</option>
                            <option>Wedding Program</option>
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#343A40]">
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                              <path
                                d="M2 3L7 8L12 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>

                        <input
                          type="date"
                          className="h-[50px] w-full rounded-[10px] border border-[#F1F1F1] bg-white px-4 text-[14px] text-[#828283] outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-3 inline-flex h-[50px] min-w-[180px] items-center justify-center rounded-full bg-[#FF850B] px-7 text-[14px] font-bold text-white transition hover:opacity-95"
                      >
                        Book An Appointment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-[28px] bg-[#014E4E] px-4 pb-6 pt-7">
              <div className="mb-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[#FF850B] text-[13px] leading-none">✦</span>
                  <span className="text-[13px] font-semibold text-white">
                    How It Work
                  </span>
                </div>

                <h2 className="text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-white">
                  Step-by-step guide to
                  <br />
                  your healthy journey
                </h2>

                <p className="mt-4 max-w-[335px] text-[14px] leading-[1.7] text-white/90">
                  Achieving your health goals has never been easier. Our
                  step-by-step approach provides personalized guidance,
                  actionable strategies, and ongoing support.
                </p>
              </div>

              <div className="relative pl-[6px] pr-[2px]">
                <div className="absolute left-[19px] top-[28px] bottom-[240px] border-l border-dotted border-white/45" />

                <div className="space-y-4">
                  {/* Mobile Step 1 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-[30px] z-[2] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FF850B] text-[12px] font-semibold text-white">
                      1
                    </div>

                    <div className="rounded-[18px] bg-[rgba(255,255,255,0.10)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <circle cx="15.5" cy="5.7" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="4.9" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="15.5" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <circle cx="26.1" cy="24.3" r="3.1" stroke="white" strokeWidth="1.2" />
                            <path
                              d="M15.5 8.8V16.2M8 20.9H23M4.9 21.2V17.2H26.1V21.2"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <div className="pt-1">
                          <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                            Choose Your Plan
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/90">
                            Select a diet plan based on your goal, health
                            condition, and duration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Step 2 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-[30px] z-[2] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FF850B] text-[12px] font-semibold text-white">
                      2
                    </div>

                    <div className="rounded-[18px] bg-[rgba(255,255,255,0.10)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <path
                              d="M10 15.2V11.2C10 8 12.5 5.5 15.5 5.5C18.5 5.5 21 8 21 11.2V15.2"
                              stroke="white"
                              strokeWidth="1.2"
                            />
                            <rect x="7.4" y="13.5" width="4.2" height="7.2" rx="2.1" stroke="white" strokeWidth="1.2" />
                            <rect x="19.4" y="13.5" width="4.2" height="7.2" rx="2.1" stroke="white" strokeWidth="1.2" />
                            <path
                              d="M14 22.6H17.2C18.7 22.6 19.9 21.4 19.9 19.9"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <rect x="13.1" y="21.2" width="3.8" height="2.6" rx="1.3" stroke="white" strokeWidth="1.2" />
                          </svg>
                        </div>

                        <div className="pt-1">
                          <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                            Health Counsellor Connect
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/90">
                            Our health counsellor connects with you to
                            understand your lifestyle and concerns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Step 3 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-[30px] z-[2] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FF850B] text-[12px] font-semibold text-white">
                      3
                    </div>

                    <div className="rounded-[18px] bg-[rgba(255,255,255,0.10)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <circle cx="12" cy="11.5" r="4.2" stroke="white" strokeWidth="1.1" />
                            <path
                              d="M5.5 23.5C6.5 19.7 8.9 18 12 18C15.1 18 17.5 19.7 18.5 23.5"
                              stroke="white"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                            <rect x="18.7" y="8.2" width="7.4" height="10.2" rx="1.4" stroke="white" strokeWidth="1.1" />
                            <path d="M20.6 11.2H24.4M20.6 14.2H24.4" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                            <path d="M18.7 23.5H26.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                          </svg>
                        </div>

                        <div className="pt-1">
                          <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                            Dietitian Assessment Call
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/90">
                            Your assigned dietitian speaks with you to
                            understand your lifestyle, food choices and health
                            goals before planning your diet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Step 4 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-[30px] z-[2] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FF850B] text-[12px] font-semibold text-white">
                      4
                    </div>

                    <div className="rounded-[18px] bg-[rgba(255,255,255,0.10)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <rect x="8.2" y="4.8" width="14.6" height="21.4" rx="1.8" stroke="white" strokeWidth="1.2" />
                            <path d="M12 9.7H19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                            <rect x="11.2" y="12.6" width="2.5" height="2.5" stroke="white" strokeWidth="1.1" />
                            <rect x="11.2" y="17.2" width="2.5" height="2.5" stroke="white" strokeWidth="1.1" />
                            <path d="M15.4 13.8H19.6M15.4 18.4H19.6" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                          </svg>
                        </div>

                        <div className="pt-1">
                          <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                            Personalised Plan Delivery
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/90">
                            Your customised diet plan is shared on OUR APP
                            within 24 hours of the assessment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Step 5 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-[30px] z-[2] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FF850B] text-[12px] font-semibold text-white">
                      5
                    </div>

                    <div className="rounded-[18px] bg-[rgba(255,255,255,0.10)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-full border border-white/70">
                          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
                            <rect x="5.2" y="19.2" width="20.6" height="5.4" stroke="white" strokeWidth="1.1" />
                            <path d="M8.5 19.1V12.7M15.5 19.1V9.3M22.5 19.1V14.8" stroke="white" strokeWidth="1.1" />
                            <path d="M7.2 10.1L10.4 7.8L14.1 10.1L18.1 6.8L23.6 9.5" stroke="white" strokeWidth="1.1" />
                            <path d="M13.8 5.1H17.2V8.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>

                        <div className="pt-1">
                          <h3 className="text-[15px] font-semibold leading-[1.35] text-white">
                            Follow-Ups &amp; Tracking
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/90">
                            Weekly or requirement-based follow-ups to track
                            progress and make timely adjustments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* mobile appointment */}
                <div className="mt-6 rounded-[18px] border border-white/60 bg-[linear-gradient(180deg,#0f6767_0%,#0d5555_100%)] p-[1px]">
                  <div className="rounded-[17px] bg-white p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[#FF850B] text-[13px] leading-none">✦</span>
                      <span className="text-[13px] font-semibold text-[#014E4E]">
                        Our Testimonials
                      </span>
                    </div>

                    <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.02em] text-[#FF850B]">
                      Make appointment
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#6F6F72]">
                      Easy scheduling for a personalized health coaching
                      session. Take the first step towards better health today!
                    </p>

                    <div className="mt-4 overflow-hidden rounded-[18px]">
                      <Image
                        src="/img/b29c961c86fe88546c6e3c94c7c1fdaee4e4c518.png"
                        alt="Dietitian consultation"
                        width={350}
                        height={210}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    <form className="mt-5 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="h-[48px] w-full rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none placeholder:text-[#8B8B8E]"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="h-[48px] w-full rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none placeholder:text-[#8B8B8E]"
                        />
                      </div>

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[48px] w-full rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none placeholder:text-[#8B8B8E]"
                      />

                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-[48px] w-full rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none placeholder:text-[#8B8B8E]"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <select className="h-[48px] w-full appearance-none rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none">
                            <option>Service</option>
                            <option>Weight Management</option>
                            <option>PCOD/PCOS</option>
                            <option>Therapeutic Diet</option>
                            <option>Wedding Program</option>
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#343A40]">
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                              <path
                                d="M2 3L7 8L12 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>

                        <input
                          type="date"
                          className="h-[48px] w-full rounded-[10px] border border-[#E8E8E8] bg-white px-4 text-[13px] text-[#8B8B8E] outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-2 inline-flex h-[46px] min-w-[155px] items-center justify-center rounded-full bg-[#FF850B] px-6 text-[14px] font-bold text-white"
                      >
                        Book An Appointment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="section-wrapper">
        <FAQSection />
      </div>

      {/* Our Blogs Section */}
      <div className="section-wrapper">
        <OurBlogsSection />
      </div>

    {/* Testimonials Section */}
    <div className="section-wrapper">
      <section className="bg-white py-12 md:py-20 px-4 md:px-8 rounded-[30px]">
        <div className="max-w-[1200px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#ff9100] text-lg md:text-xl">✦</span>
              <span className="text-teal-600 font-semibold text-sm md:text-base">
                Our Testimonials
              </span>
            </div>

            <h2 className="text-[1.75rem] md:text-[2.5rem] font-bold text-gray-900 leading-tight">
              Success stories from our clients
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left - Testimonial Cards */}
            <div className="flex-1 w-full lg:min-w-[400px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div
                    key={testimonial._id || index}
                    className={`rounded-[20px] p-4 md:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      index === 1
                        ? "bg-[#ff9100] shadow-[0_10px_30px_rgba(255,145,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,145,0,0.4)]"
                        : "bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    }`}
                  >
                    <div
                      className={`mb-3 text-base md:text-lg tracking-widest ${
                        index === 1 ? "text-white" : "text-[#ff9100]"
                      }`}
                    >
                      ★★★★★
                    </div>

                    <p
                      className={`text-[0.85rem] md:text-[0.95rem] leading-relaxed mb-4 italic ${
                        index === 1 ? "text-white" : "text-gray-600"
                      }`}
                    >
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div
                      className={`flex items-center gap-3 pt-3 ${
                        index === 1
                          ? "border-t border-white/20"
                          : "border-t border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base ${
                          index === 1 ? "bg-white/20" : "bg-teal-600"
                        }`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>

                      <div
                        className={`font-bold ${
                          index === 1 ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Right - Stats and Badge */}
            <div className="flex-1 w-full lg:min-w-[350px] relative h-auto lg:h-[450px]">

              <div className="bg-[#0b4c4c] rounded-[30px] p-8 md:p-12 text-white h-full flex flex-col justify-center relative overflow-hidden">

                {/* Background decoration */}
                <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] rounded-full bg-[rgba(255,145,0,0.1)]" />
                <div className="absolute -bottom-[30px] -left-[30px] w-[150px] h-[150px] rounded-full bg-[rgba(0,150,136,0.2)]" />

                <div className="relative z-10">

                  <div className="text-[3rem] md:text-[5rem] font-extrabold leading-none mb-2">
                    75K<span className="text-[#ff9100]">+</span>
                  </div>

                  <div className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 opacity-90">
                    Happy Clients
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 py-2 md:py-3 px-3 md:px-4 rounded-xl w-fit text-sm md:text-base">
                    <span className="text-[#ff9100] text-lg md:text-2xl">★</span>
                    <span className="text-lg md:text-xl font-semibold">4.9</span>
                    <span className="opacity-80 text-xs md:text-sm">Average Rating</span>
                  </div>

                  {/* Trust badges */}
                  <div className="flex gap-2 md:gap-4 mt-6 md:mt-8 flex-wrap">
                    <div className="bg-[#ff9100] py-1.5 md:py-2 px-3 md:px-4 rounded-lg text-xs md:text-sm font-semibold">
                      ✓ Verified Reviews
                    </div>

                    <div className="bg-white/15 py-1.5 md:py-2 px-3 md:px-4 rounded-lg text-xs md:text-sm font-semibold">
                      ✓ 25+ Years Trust
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
    </div>
  );
}
// Removed local fallback implementations of useState/useEffect — using React's useState and useEffect imported above.
