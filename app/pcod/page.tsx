'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import TransformationGallery from '@/components/TransformationGallery';
import DynamicPlansDisplay from '@/components/DynamicPlansDisplay';

const whatYouGet = [
  { icon: '📊', title: 'Ongoing Support', desc: 'Regular follow-ups to adapt your diet plan as needed and ensure progress results.' },
  { icon: '❤️', title: 'Specialised Care', desc: 'Your diet is managed by dietitians who are specialised in hormonal disorders.' },
  { icon: '⭐', title: 'Tailored to You', desc: 'Every diet plan is crafted to meet your unique health needs and lifestyle preferences.' },
  { icon: '🧪', title: 'Sustainable Weight Management', desc: 'We focus on long-term lifestyle changes for lasting success.' },
];

const gkkBenefits = [
  { title: 'Inflammation down', desc: 'Less bloating, less pain, better skin' },
  { title: 'Hormones Balanced', desc: 'Regular cycles, better mood' },
  { title: 'Energy Boost', desc: 'Feel more active and vibrant' },
  { title: 'Weight Loss', desc: 'Sustainable and healthy reduction' },
  { title: 'Better Skin', desc: 'Clear, glowing, and healthy' },
];

export default function PCODPage() {
  const [activeCard, setActiveCard] = useState(3);

  useEffect(() => {
    const order = [3, 1, 0, 2, 4];
    let i = 0;
    const timer = setInterval(() => {
      setActiveCard(order[i]);
      i = (i + 1) % order.length;
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section with Navbar and Banner */}
      <div className="pcod-hero-wrapper bg-[#1a5f5f]">
        <div className="bg-[#1a5f5f] py-4">
          <Navbar />
        </div>
        
        {/* Mobile Banner */}
        <div className="md:hidden w-full">
          <div className="relative w-full h-auto overflow-hidden rounded-b-3xl">
            <Image 
              src="/images/pcod mobile (1).png"
              alt="PCOD Banner - Mobile"
              width={800}
              height={600}
              quality={95}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Desktop Banner */}
        <div className="hidden md:block w-full">
          <div className="relative w-full h-auto overflow-hidden rounded-b-3xl">
            <Image 
              src="/images/pcod dekstop.png"
              alt="PCOD Banner - Desktop"
              width={1920}
              height={800}
              quality={95}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>








<section className="py-16 md:py-24 bg-[#F5F5F5]" id="benefits">

<div className="max-w-[1200px] mx-auto px-4">

<h2 className="text-center text-[28px] md:text-[44px] font-bold text-black">
Role of Diet in <span className="text-[#FF8A00]">PCOD/PCOS</span>
</h2>

<p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-[700px] mx-auto">
Diet plays a crucial role in managing PCOS, as it can help mitigate some of the symptoms and associated health risks
</p>


<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">


{/* LEFT CARDS */}

<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">


{/* CARD 1 */}

<div className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">

<div className="h-[200px]">
<Image
src="/images/Balancing Blood Sugar Levels.png"
width={500}
height={300}
alt="Balancing Blood Sugar"
className="w-full h-full object-cover"
/>
</div>

<div className="bg-[#FF8A00] text-white p-6 flex-1">

<div className="w-10 h-[2px] bg-white mb-4"></div>

<h3 className="text-lg font-semibold mb-2">
Balancing Blood Sugar Levels
</h3>

<p className="text-sm opacity-90">
Women with PCOS often experience insulin resistance, where the body's cells do not respond normally to insulin.
</p>

</div>

</div>



{/* CARD 2 */}

<div className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">

<div className="h-[200px]">
<Image
src="/images/Managing Weight.png"
width={500}
height={300}
alt="Managing Weight"
className="w-full h-full object-cover"
/>
</div>

<div className="bg-[#FF8A00] text-white p-6 flex-1">

<div className="w-10 h-[2px] bg-white mb-4"></div>

<h3 className="text-lg font-semibold mb-2">
Managing Weight
</h3>

<p className="text-sm opacity-90">
Losing even a small amount of weight if you are overweight can help manage PCOS symptoms.
</p>

</div>

</div>



{/* CARD 3 */}

<div className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">

<div className="h-[200px]">
<Image
src="/images/Reducing Inflammation.png"
width={500}
height={300}
alt="Reducing Inflammation"
className="w-full h-full object-cover"
/>
</div>

<div className="bg-[#FF8A00] text-white p-6 flex-1">

<div className="w-10 h-[2px] bg-white mb-4"></div>

<h3 className="text-lg font-semibold mb-2">
Reducing Inflammation
</h3>

<p className="text-sm opacity-90">
PCOS is often linked with low-grade inflammation. Consuming a diet high in anti-inflammatory foods can be beneficial.
</p>

</div>

</div>



{/* CARD 4 */}

<div className="rounded-[20px] overflow-hidden bg-white shadow-lg flex flex-col">

<div className="h-[200px]">
<Image
src="/images/Increasing Fertility.png"
width={500}
height={300}
alt="Increasing Fertility"
className="w-full h-full object-cover"
/>
</div>

<div className="bg-[#FF8A00] text-white p-6 flex-1">

<div className="w-10 h-[2px] bg-white mb-4"></div>

<h3 className="text-lg font-semibold mb-2">
Increasing Fertility
</h3>

<p className="text-sm opacity-90">
PCOS is one of the leading causes of infertility in women due to hormonal imbalances affecting ovulation.
</p>

</div>

</div>

</div>



{/* RIGHT CONTACT CARD */}

<div className="bg-[#141414] text-white rounded-[24px] p-8 shadow-xl relative flex flex-col justify-between">

<div>

<div className="absolute top-6 right-6 border-t-2 border-r-2 border-[#FF8A00] w-10 h-10"></div>

<div className="bg-[#FF8A00] inline-block text-xs font-semibold px-4 py-2 rounded-full mb-6">
✨ Get Started
</div>

<h3 className="text-[30px] font-bold leading-tight mb-4">
Ready to Transform Your Health?
</h3>

<p className="text-gray-300 text-sm mb-6">
Join thousands of women who have successfully managed their PCOD/PCOS through our personalized nutrition plans.
</p>

<ul className="space-y-3 text-sm mb-8">

<li className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-[#FF8A00] flex items-center justify-center text-black text-xs">✓</span>
Personalized diet plans
</li>

<li className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-[#FF8A00] flex items-center justify-center text-black text-xs">✓</span>
Expert nutritionist support
</li>

<li className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-[#FF8A00] flex items-center justify-center text-black text-xs">✓</span>
Traditional "Ghar ka Khana"
</li>

<li className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-[#FF8A00] flex items-center justify-center text-black text-xs">✓</span>
Proven results
</li>

</ul>

<a
href="/appointment"
className="block text-center bg-[#FF8A00] hover:bg-[#ff7a00] transition text-white font-semibold py-4 rounded-full"
>
Book Your Consultation →
</a>

</div>


<div className="mt-8 border-t border-gray-700 pt-6">

<p className="text-gray-400 text-sm mb-3">
Questions? Contact us
</p>

{/* PHONE */}

<div className="flex items-center gap-3 text-sm text-gray-300 mb-2">

<Image
src="/images/contact.png"
width={18}
height={18}
alt="Contact Icon"
/>

<span>+91 XXX XXX XXXX</span>

</div>

{/* EMAIL */}

<div className="flex items-center gap-3 text-sm text-gray-300">

<Image
src="/images/email.png"
width={18}
height={18}
alt="Email Icon"
/>

<span>contact@example.com</span>

</div>

</div>

</div>


</div>

</div>

</section>

  );


     {/* Symptoms Image Section */}

<div className="pcod-symptoms-image px-4 md:px-0">

  {/* Desktop Banner */}
  <Image
    src="/images/symptons desktop.png"
    alt="Symptoms & Nutritional Concerns"
    width={1200}
    height={600}
    className="hidden md:block w-full h-auto object-contain"
  />

  {/* Mobile Banner */}
  <Image
    src="/images/symptons mobile.png"
    alt="Symptoms & Nutritional Concerns"
    width={800}
    height={800}
    className="block md:hidden w-full h-auto object-contain"
  />

</div>
     

      {/* What You Will Get - Mobile */}
      <section className="pcod-benefits-sec md:hidden py-8 px-4">
        <div className="pcod-benefits-wrap">
          <div className="flex flex-col gap-6">
            <div className="pcod-img-card">
              <div className="pcod-img-frame rounded-xl overflow-hidden">
                <Image 
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/file-1536x1024-1.webp" 
                  alt="Benefits" 
                  width={500} 
                  height={300} 
                  className="object-cover w-full h-[200px]" 
                />
              </div>
              <div className="pcod-float-badge">
                <p className="pcod-badge-num text-xl">100%</p>
                <p className="pcod-badge-lbl text-xs">Natural</p>
              </div>
            </div>

            <div className="pcod-benefits-head">
              <div className="pcod-mini-label justify-center">
                <span className="pcod-mini-line"></span>
                <span className="pcod-mini-text text-xs">YOUR BENEFITS</span>
              </div>
              <h2 className="pcod-benefits-title text-2xl">What You Will Get?</h2>

              <div className="pcod-benefits-list gap-3">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="pcod-benefit-item p-3 rounded-xl">
                    <div className="pcod-benefit-ic w-10 h-10 text-base">{item.icon}</div>
                    <div>
                      <h4 className="text-sm">{item.title}</h4>
                      <p className="text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pcod-benefits-cta mt-4">
                <a className="pcod-btn-teal text-sm py-3 px-6" href="/appointment">
                  Explore All Benefits
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Get - Desktop */}
      <section className="pcod-benefits-sec hidden md:block">
        <div className="pcod-benefits-wrap">
          <div className="pcod-benefits-grid-2">
            <div className="pcod-img-card">
              <div className="pcod-img-frame">
                <Image 
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/file-1536x1024-1.webp" 
                  alt="Benefits" 
                  width={500} 
                  height={400} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="pcod-float-badge">
                <p className="pcod-badge-num">100%</p>
                <p className="pcod-badge-lbl">Natural</p>
              </div>
            </div>

            <div className="pcod-benefits-head">
              <div className="pcod-mini-label">
                <span className="pcod-mini-line"></span>
                <span className="pcod-mini-text">YOUR BENEFITS</span>
              </div>
              <h2 className="pcod-benefits-title">What You Will Get?</h2>

              <div className="pcod-benefits-list">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="pcod-benefit-item">
                    <div className="pcod-benefit-ic">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pcod-benefits-cta">
                <a className="pcod-btn-teal" href="/appointment">
                  Explore All Benefits
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghar Ka Khana Section - Mobile */}
      <section className="pcod-gkk-section md:hidden py-8 px-4">
        <div className="pcod-gkk-wrap">
          <div className="pcod-gkk-panel p-4 rounded-2xl">
            <div className="pcod-gkk-title mb-6">
              <h2 className="text-xl text-center">How <b>GHAR KA KHANA</b> Diet Plan Fixes PCOD &amp; WEIGHT</h2>
            </div>

            {/* Mobile: Image on top, then cards list */}
            <div className="flex flex-col gap-4">
              <div className="pcod-gkk-center mx-auto">
                <Image 
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/table.png" 
                  alt="Healthy plate" 
                  width={280} 
                  height={200} 
                  className="object-contain" 
                />
              </div>

              {/* Benefits as vertical list on mobile */}
              <div className="flex flex-col gap-3">
                {gkkBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border ${activeCard === index ? 'bg-[#f57c00] border-[#f57c00]' : 'bg-white/10 border-white/10'}`}
                    onClick={() => setActiveCard(index)}
                  >
                    <h4 className={`text-sm font-bold mb-1 ${activeCard === index ? 'text-white' : 'text-[#f57c00]'}`}>{benefit.title}</h4>
                    <p className={`text-xs ${activeCard === index ? 'text-white' : 'text-white/70'}`}>{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="pcod-gkk-mini p-4 rounded-xl">
                <div className="emoji text-xl mb-2">💯</div>
                <h5 className="text-sm">100% Natural</h5>
                <p className="text-xs">No supplements or artificial ingredients</p>
              </div>
              <div className="pcod-gkk-mini p-4 rounded-xl">
                <div className="emoji text-xl mb-2">👩‍⚕️</div>
                <h5 className="text-sm">Expert Guided</h5>
                <p className="text-xs">Personalized plans by certified dietitians</p>
              </div>
              <div className="pcod-gkk-mini p-4 rounded-xl">
                <div className="emoji text-xl mb-2">🎯</div>
                <h5 className="text-sm">Proven Results</h5>
                <p className="text-xs">Thousands of success stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghar Ka Khana Section - Desktop */}
      <section className="pcod-gkk-section hidden md:block">
        <div className="pcod-gkk-wrap">
          <div className="pcod-gkk-panel">
            <div className="pcod-gkk-title">
              <h2>How <b>GHAR KA KHANA</b> Diet Plan Fixes PCOD &amp; WEIGHT</h2>
            </div>

            <div className="pcod-gkk-diagram">
              <div className="pcod-gkk-center">
                <Image 
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/table.png" 
                  alt="Healthy plate" 
                  width={520} 
                  height={360} 
                  className="object-contain" 
                />
              </div>

              {gkkBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`pcod-gkk-card pcod-gkk-pos-${index} ${activeCard === index ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="pcod-gkk-bg"></div>
                  <div className="pcod-gkk-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pcod-gkk-mini-row">
              <div className="pcod-gkk-mini">
                <div className="emoji">💯</div>
                <h5>100% Natural</h5>
                <p>No supplements or artificial ingredients</p>
              </div>
              <div className="pcod-gkk-mini">
                <div className="emoji">👩‍⚕️</div>
                <h5>Expert Guided</h5>
                <p>Personalized plans by certified dietitians</p>
              </div>
              <div className="pcod-gkk-mini">
                <div className="emoji">🎯</div>
                <h5>Proven Results</h5>
                <p>Thousands of success stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Gallery Section */}
      <TransformationGallery 
        page="pcod"
        title="Success Stories from Our PCOD Patients"
        subtitle="Real transformations, real health improvements - join thousands who have managed their PCOD successfully"
        maxItems={6}
      />

      {/* Pricing Section - Mobile */}
      <section className="wl-section md:hidden py-8 px-4">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star wl-teal-text">✦</span> <span className="wl-teal-text text-xs">PRICING</span>
          </div>
          <h2 className="wl-section-title wl-center text-xl mb-2">Take the first step towards a healthier Future</h2>
          <p className="wl-section-desc wl-center text-xs mb-4">
            Join our Plan today and embark on a journey to better health with our PCOD diet plan!
          </p>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <DynamicPlansDisplay 
                category="pcod"
                showHeader={false}
                columns="1"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `pcod-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `PCOD Management Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1
                  };
                  sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                  window.location.href = '/checkout';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Desktop */}
      <section className="wl-section hidden md:block">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star wl-teal-text">✦</span> <span className="wl-teal-text">PRICING</span>
          </div>
          <h2 className="wl-section-title wl-center">Take the first step towards a healthier Future</h2>
          <p className="wl-section-desc wl-center">
            Join our Plan today and embark on a journey to better health with our PCOD diet plan!
          </p>
          <div className="flex justify-center w-full">
            <div className="max-w-[1200px] w-full">
              <DynamicPlansDisplay 
                category="pcod"
                showHeader={false}
                columns="3"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `pcod-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `PCOD Management Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1
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
