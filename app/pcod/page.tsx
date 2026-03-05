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

      {/* Role of Diet Section - Mobile */}
      <section className="pcod-section md:hidden py-8 px-4" id="benefits">
        <div className="container">
          <h2 className="pcod-section-title text-2xl mb-3">Role of Diet in PCOD/PCOS</h2>
          <p className="pcod-section-subtitle text-sm mb-2">
            Diet plays a crucial role in managing PCOS, as it can help mitigate some of the symptoms and associated health risks
          </p>
          <div className="pcod-section-script text-xl mb-6">&quot;Ghar ka Khana&quot;</div>

          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="pcod-benefit-card rounded-2xl">
              <div className="pcod-benefit-card-image h-[140px]">
                <div className="pcod-benefit-no">1</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Balancing Blood Sugar" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content p-4">
                <div className="pcod-benefit-line"></div>
                <h3 className="text-base">Balancing Blood Sugar Levels</h3>
                <p className="text-xs">Women with PCOS often experience insulin resistance, where the body&apos;s cells do not respond normally to insulin.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pcod-benefit-card rounded-2xl">
              <div className="pcod-benefit-card-image h-[140px]">
                <div className="pcod-benefit-no">2</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Managing Weight" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content p-4">
                <div className="pcod-benefit-line"></div>
                <h3 className="text-base">Managing Weight</h3>
                <p className="text-xs">Losing even a small amount of weight if you are overweight can help manage PCOS symptoms.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pcod-benefit-card rounded-2xl">
              <div className="pcod-benefit-card-image h-[140px]">
                <div className="pcod-benefit-no">3</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Reducing Inflammation" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content p-4">
                <div className="pcod-benefit-line"></div>
                <h3 className="text-base">Reducing Inflammation</h3>
                <p className="text-xs">PCOS is often linked with low-grade inflammation. Consuming a diet high in anti-inflammatory foods can be beneficial.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="pcod-benefit-card rounded-2xl">
              <div className="pcod-benefit-card-image h-[140px]">
                <div className="pcod-benefit-no">4</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Increasing Fertility" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content p-4">
                <div className="pcod-benefit-line"></div>
                <h3 className="text-base">Increasing Fertility</h3>
                <p className="text-xs">PCOS is one of the leading causes of infertility in women due to hormonal imbalances affecting ovulation.</p>
              </div>
            </div>

            {/* Contact Card - Mobile */}
            <div className="pcod-contact-card rounded-2xl p-5">
              <div className="pcod-corner-mark"></div>
              <div className="pcod-contact-pill text-xs">✨ Get Started</div>
              <h3 className="text-xl mb-3">Ready to Transform<br/>Your Health?</h3>
              <p className="text-xs mb-4">Join thousands of women who have successfully managed their PCOD/PCOS through our personalized nutrition plans.</p>
              <ul className="pcod-contact-points mb-4">
                <li className="text-xs"><span className="pcod-tick">✓</span> Personalized diet plans</li>
                <li className="text-xs"><span className="pcod-tick">✓</span> Expert nutritionist support</li>
                <li className="text-xs"><span className="pcod-tick">✓</span> Traditional &quot;Ghar ka Khana&quot;</li>
                <li className="text-xs"><span className="pcod-tick">✓</span> Proven results</li>
              </ul>
              <a href="/appointment" className="pcod-btn-primary w-full justify-center text-sm py-3">
                Book Your Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Diet Section - Desktop */}
      <section className="pcod-section hidden md:block" id="benefits-desktop">
        <div className="container">
          <h2 className="pcod-section-title">Role of Diet in PCOD/PCOS</h2>
          <p className="pcod-section-subtitle">
            Diet plays a crucial role in managing PCOS, as it can help mitigate some of the symptoms and associated health risks
          </p>
          <div className="pcod-section-script">&quot;Ghar ka Khana&quot;</div>

          <div className="pcod-benefits-grid">
            {/* Card 1 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">1</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Balancing Blood Sugar" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Balancing Blood Sugar Levels</h3>
                <p>Women with PCOS often experience insulin resistance, where the body&apos;s cells do not respond normally to insulin.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">2</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Managing Weight" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Managing Weight</h3>
                <p>Losing even a small amount of weight if you are overweight can help manage PCOS symptoms.</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="pcod-contact-card">
              <div className="pcod-corner-mark"></div>
              <div className="pcod-contact-pill">✨ Get Started</div>
              <h3>Ready to Transform<br/>Your Health?</h3>
              <p>Join thousands of women who have successfully managed their PCOD/PCOS through our personalized nutrition plans.</p>
              <ul className="pcod-contact-points">
                <li><span className="pcod-tick">✓</span> Personalized diet plans</li>
                <li><span className="pcod-tick">✓</span> Expert nutritionist support</li>
                <li><span className="pcod-tick">✓</span> Traditional &quot;Ghar ka Khana&quot;</li>
                <li><span className="pcod-tick">✓</span> Proven results</li>
              </ul>
              <a href="/appointment" className="pcod-btn-primary w-full justify-center">
                Book Your Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <div className="pcod-contact-bottom">
                <small>Questions? Contact us</small>
                <div className="pcod-contact-row">📞 +91 XXX XXX XXXX</div>
                <div className="pcod-contact-row">✉️ contact@example.com</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">3</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Reducing Inflammation" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Reducing Inflammation</h3>
                <p>PCOS is often linked with low-grade inflammation. Consuming a diet high in anti-inflammatory foods can be beneficial.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">4</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Increasing Fertility" width={400} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Increasing Fertility</h3>
                <p>PCOS is one of the leading causes of infertility in women due to hormonal imbalances affecting ovulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Title - Mobile */}
      <div className="pcod-title-wrap md:hidden py-6 px-4">
        <div className="pcod-label">
          <span className="pcod-line-deco w-6"></span>
          <span className="pcod-label-text text-xs">COMMON SYMPTOMS</span>
          <span className="pcod-line-deco w-6"></span>
        </div>
        <h2 className="pcod-title-main text-xl">Symptoms &amp; Nutritional Concerns</h2>
        <p className="pcod-title-sub text-xs px-2">
          Understanding your symptoms is the first step toward transformation
          through proper nutrition and lifestyle changes.
        </p>
      </div>

      {/* Symptoms Title - Desktop */}
      <div className="pcod-title-wrap hidden md:block">
        <div className="pcod-label">
          <span className="pcod-line-deco"></span>
          <span className="pcod-label-text">COMMON SYMPTOMS</span>
          <span className="pcod-line-deco"></span>
        </div>
        <h2 className="pcod-title-main">Symptoms &amp; Nutritional Concerns</h2>
        <p className="pcod-title-sub">
          Understanding your symptoms is the first step toward transformation<br/>
          through proper nutrition and lifestyle changes.
        </p>
      </div>

      {/* Symptoms Image Section */}
      <div className="pcod-symptoms-image px-4 md:px-0">
        <Image 
          src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/Group-316.webp" 
          alt="Symptoms & Nutritional Concerns" 
          width={1200} 
          height={600}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Stats Section - Mobile */}
      <section className="pcod-stats md:hidden py-6 px-4 flex-col gap-4">
        <div className="pcod-stat">
          <div className="pcod-stat-num orange text-3xl">1000+</div>
          <div className="pcod-stat-label text-sm">Women Helped</div>
        </div>
        <div className="pcod-stat">
          <div className="pcod-stat-num teal text-3xl">95%</div>
          <div className="pcod-stat-label text-sm">Success Rate</div>
        </div>
        <div className="pcod-stat">
          <div className="pcod-stat-num orange text-3xl">24/7</div>
          <div className="pcod-stat-label text-sm">Support Available</div>
        </div>
      </section>

      {/* Stats Section - Desktop */}
      <section className="pcod-stats hidden md:flex">
        <div className="pcod-stat">
          <div className="pcod-stat-num orange">1000+</div>
          <div className="pcod-stat-label">Women Helped</div>
        </div>
        <div className="pcod-stat">
          <div className="pcod-stat-num teal">95%</div>
          <div className="pcod-stat-label">Success Rate</div>
        </div>
        <div className="pcod-stat">
          <div className="pcod-stat-num orange">24/7</div>
          <div className="pcod-stat-label">Support Available</div>
        </div>
      </section>

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
