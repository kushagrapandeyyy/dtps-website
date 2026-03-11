import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <Navbar />

        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

{/* ================= MOBILE (UNCHANGED) ================= */}

<div className="hero-container-mobile flex flex-col md:hidden">

<div className="hero-image-mobile relative flex justify-center items-center pt-6 pb-4">
<div className="relative">

<Image
src="/images/D-I-E-T-I-C-I-AN.png"
alt="Dietitian Poonam Sagar"
width={350}
height={400}
className="h-[320px] w-auto"
priority
/>

<div className="absolute right-0 bottom-[40px] bg-[#ff9100] py-2 px-3 rounded-[10px] flex items-center gap-1.5 z-[4] shadow-[0_10px_30px_rgba(245,124,0,0.3)]">
<span className="text-[1.4rem] font-extrabold text-white leading-none">25</span>
<span className="text-[0.6rem] text-white leading-[1.2] font-medium">
Years of<br/>experience
</span>
</div>

</div>
</div>

<div className="hero-content-mobile relative z-[2] px-5 text-center pt-4 pb-8">

<div className="inline-flex items-center gap-2 text-[#ff9100] font-medium text-sm mb-3">
<span className="text-[#ff9100]">✦</span> Holistic Care
</div>

<h1 className="text-[1.6rem] font-bold text-white leading-[1.2] mb-3">
Transform your health<br/>
embrace life today!
</h1>

<p className="text-white/75 text-[0.85rem] leading-[1.7] mb-5 max-w-[480px] mx-auto">
Achieve your wellness goals with personalized guidance, expert support,
and sustainable habits for a healthier, happier you.
</p>

<div className="flex flex-row items-center justify-center gap-4">

<Link href="#programs" className="btn btn-primary text-sm py-3 px-6">
Know More
</Link>

<div className="flex items-center gap-2">

<div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-base">
📞
</div>

<div className="flex flex-col">
<span className="text-white/60 text-[0.7rem]">Call Us 24/7</span>
<span className="text-white font-bold text-[0.9rem]">9893027688</span>
</div>

</div>

</div>
</div>
</div>

{/* ================= DESKTOP FIXED ================= */}

<div className="hero-container hidden md:grid md:grid-cols-2 md:items-center w-full max-w-[1600px] mx-auto px-8 lg:px-16">

{/* LEFT CONTENT */}

<div className="hero-content relative z-[2] pl-5 text-left self-center">

<div className="hero-label inline-flex items-center gap-2 text-[#ff9100] font-medium text-base mb-4">
<span className="star text-[#ff9100]">✦</span> Holistic Care
</div>

<h1 className="hero-title text-[3rem] xl:text-[3.3rem] 2xl:text-[3.6rem] font-bold text-white leading-[1.2] mb-5">
Transform your health<br/>
embrace life today!
</h1>

<p className="hero-desc text-white/75 text-base leading-[1.7] mb-8 max-w-[480px]">
Achieve your wellness goals with personalized guidance, expert support,
and sustainable habits for a healthier, happier you.
</p>

<div className="hero-actions flex flex-row items-center justify-start gap-5 mb-10">

<Link href="#programs" className="btn btn-primary text-base py-3.5 px-8">
Know More
</Link>

<div className="hero-phone flex items-center gap-3">

<div className="phone-icon w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-xl">
📞
</div>

<div className="phone-info flex flex-col">
<span className="phone-label text-white/60 text-[0.8rem]">Call Us 24/7</span>
<span className="phone-number text-white font-bold text-[1.05rem]">
9893027688
</span>
</div>

</div>
</div>

<div className="hero-reviews flex items-center gap-3 justify-start">

<div className="review-avatars flex items-center">

<Image src="https://randomuser.me/api/portraits/women/1.jpg" alt="" width={36} height={36}
className="w-9 h-9 rounded-full border-2 border-[#0d4043]" />

<Image src="https://randomuser.me/api/portraits/women/2.jpg" alt="" width={36} height={36}
className="w-9 h-9 rounded-full border-2 border-[#0d4043] -ml-2.5" />

<Image src="https://randomuser.me/api/portraits/men/1.jpg" alt="" width={36} height={36}
className="w-9 h-9 rounded-full border-2 border-[#0d4043] -ml-2.5" />

<span className="review-count w-9 h-9 bg-[#0d9488] rounded-full flex items-center justify-center text-white text-[0.7rem] font-bold -ml-2.5">
15K
</span>

</div>

<div className="review-rating flex items-center gap-1 text-white">
<span className="rating-score font-bold text-base">5.0</span>
<span className="rating-star">⭐</span>
<span className="rating-text text-white/60 text-[0.85rem]">(15.5k review)</span>
</div>

</div>
</div>

{/* RIGHT IMAGE */}

<div className="hero-image relative flex justify-center items-end self-end">

<div className="hero-name-bg absolute right-[-80px] xl:right-[-100px] 2xl:right-[-120px] top-1/2 -translate-y-[80%] z-[1]">

<Image
src="/images/D-I-E-T-I-C-I-AN.png"
alt="Dietician Poonam Sagar Background"
width={450}
height={550}
className="hero-name-img h-[420px] xl:h-[480px] 2xl:h-[540px] w-auto"
/>

</div>

<div className="hero-image-wrapper relative z-[3] -translate-y-[80px] xl:-translate-y-[100px] 2xl:-translate-y-[110px]">

<Image
src="/images/Image-attachment-full-1.png"
alt="Dietitian Poonam Sagar"
width={550}
height={680}
className="hero-main-img max-h-[600px] xl:max-h-[650px] 2xl:max-h-[720px] w-auto"
priority
/>

<div className="hero-badge-bottom absolute right-[-40px] xl:right-[-50px] bottom-[80px] xl:bottom-[100px] bg-[#ff9100] py-4 px-[22px] rounded-[14px] flex items-center gap-3 z-[4] shadow-[0_10px_30px_rgba(245,124,0,0.3)]">

<span className="badge-number text-[2.5rem] font-extrabold text-white leading-none">
25
</span>

<span className="badge-text text-[0.85rem] text-white leading-[1.2] font-medium">
Years of<br/>experience
</span>

</div>

</div>
</div>
</div>

</div>
</section>
);
}