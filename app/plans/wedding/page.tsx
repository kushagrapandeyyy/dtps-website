"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Epilogue } from "next/font/google";
import Navbar from "@/components/Navbar";
import LoseWeightSection from "@/components/LoseWeightSection";
import DynamicPlansDisplay from "@/components/DynamicPlansDisplay";
import { getPricingByCategory } from "@/lib/api";
import type { Pricing } from "@/lib/api";
import TransformationGallery from "@/components/TransformationGallery";
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Tab data for "What Happens" section
const tabsData: Record<string, { image: string; benefits: string[] }> = {
  brides: {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Bride.png",
    benefits: [
      "You'll drop those extra inches with real, home-cooked food.",
      "Skin looks clearer and naturally glowing.",
      "Hair feels stronger and healthier from within.",
      "Energy stays consistent through long functions.",
      "You feel fresh, light, and comfortable in your outfits.",
    ],
  },
  grooms: {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Groom.png",
    benefits: [
      "Better sherwani fit and confident posture.",
      "Sharper jawline and reduced puffiness.",
      "Stamina improves during busy wedding days.",
      "Better digestion with clean meals.",
      "You look naturally sharp in pictures.",
    ],
  },
  couples: {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Couple.png",
    benefits: [
      "Both partners feel fit & confident.",
      "Shared food routine improves bonding.",
      "Glow shows naturally in wedding photos.",
      "No starving — full satisfying meals.",
      "You look and feel great together.",
    ],
  },
  guests: {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Guest-1.png",
    benefits: [
      "Stay light and comfortable through events.",
      "Better digestion reduces bloating.",
      "Skin looks naturally bright in pictures.",
      "Energy stays stable throughout functions.",
      "Feel confident and fresh in outfits.",
    ],
  },
};

const pricingPlansFallback = [
  {
    duration: "10 Days Trial",
    badge: "LIMITED OFFER!",
    price: "₹399",
    originalPrice: "₹999",
    features: [
      "Pre-Wedding Detox Plan",
      "Visible Inch loss",
      { text: "Skin & hair Care Diets", crossed: true },
      { text: "Anemia Treatment", crossed: true },
      "Easy Workouts",
      "8hrs/day Availability",
      "Dietitian Consultation (3)",
      "Customised Diet Plan",
      "20+ Diet Recipe E Book",
      "Weekly Check-ins",
    ],
    timeline: "quick debloat & routine kickstart",
  },
  {
    duration: "01 Month",
    badge: "Most Popular",
    price: "₹4999",
    originalPrice: "₹6000",
    features: [
      "Pre-Wedding Detox Plan",
      "Visible Inch loss",
      { text: "Skin & hair Care Diets", crossed: true },
      "Anemia Treatment",
      "Easy Workouts",
      "8hrs/day Availability",
      "Dietitian Consultation (12)",
      "Customised Diet Plan",
      "50+ Diet Recipe E Book",
      "Weekly Check-ins",
    ],
    timeline: "fast inch loss for outfits",
  },
  {
    duration: "03 Months",
    badge: "Premium",
    price: "₹7999",
    originalPrice: "₹11000",
    features: [
      "Pre-Wedding Detox Plan",
      "Visible Inch loss",
      "Skin & hair Care Diets",
      "Anemia Treatment",
      "Easy Workouts",
      "8hrs/day Availability",
      "Dietitian Consultation (18)",
      "Customised Diet Plan",
      "100+ Diet Recipe E Book",
      "Weekly Check-ins",
    ],
    timeline: "deeper fat loss + glow rebuild",
  },
  {
    duration: "06 Months",
    badge: "Most Effective",
    price: "₹11000",
    originalPrice: "₹15000",
    features: [
      "Pre-Wedding Detox Plan",
      "Visible Inch loss",
      "Skin & hair Care Diets",
      "Anemia Treatment",
      "Easy Workouts",
      "8hrs/day Availability",
      "Customised Diet Plan",
      "Dietitian Consultation upto(20)",
      "150+ Diet Recipe E Book",
      "Weekly Check-ins",
    ],
    timeline: "long-term change + maintenance",
  },
];

const awards = [
  {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/image-27.webp",
    title: "News 18 Narayani Namah Award",
  },
  {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/image-24-1.webp",
    title: "Dainik Bhaskar Women Entrepreneur Award",
  },
  {
    image:
      "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/0010-600x450-1.webp",
    title: "Iconic Business Women (Health & Nutrition) Award 2024",
  },
];

export default function WeddingPlanPage() {
  const [activeTab, setActiveTab] = useState("brides");
  const [pricingPlans, setPricingPlans] = useState<any[]>(pricingPlansFallback);
  const [loadingPricing, setLoadingPricing] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory("new-wedding-plan");

        if (dbPricing && dbPricing.length > 0) {
          const formattedPricing = dbPricing.map((plan: Pricing) => ({
            duration: plan.duration,
            badge: plan.badge,
            price: `₹${plan.price}`,
            originalPrice: `₹${plan.originalPrice}`,
            features: plan.features.map((f) => f.text),
            timeline: plan.durationLabel,
          }));

          setPricingPlans(formattedPricing);
        }
      } catch (error) {
        console.error("Error fetching pricing:", error);
        setPricingPlans(pricingPlansFallback);
      } finally {
        setLoadingPricing(false);
      }
    };

    fetchPricing();
  }, []);

  return (
    <main className={`bg-white ${epilogue.className}`}>
      {/* Hero Section with Navbar */}
      <section className="wedding-hero-wrapper">
        <div className="wedding-hero-section">
          <Image
            src="/images/wedding.png"
            alt="Wedding couple"
            fill
            priority
            className="wedding-hero-image"
          />

          <div className="wedding-hero-top-overlay" />
          <div className="wedding-hero-bottom-overlay" />
          <div className="wedding-hero-vignette" />

          <div className="wedding-navbar-layer">
            <Navbar />
          </div>

          <div className="wedding-hero-content">
            <h1 className="wedding-hero-title">
              India&apos;s Only
              <br />
              <span className="wedding-highlight">&ldquo;Ghar Ka Khana&rdquo;</span>{" "}
              Diet Plan
              <br />
              That Gets You Wedding-Ready.
            </h1>

            <p className="wedding-hero-subtitle">
              Because you shouldn&apos;t have to suffer to look beautiful.
            </p>
          </div>
        </div>
      </section>
{/* Wedding Transformations Section */}
<section className="bg-[#f7f7f7] py-14 md:py-20">
  <div className="max-w-[1200px] mx-auto px-5">

    <TransformationGallery
      page="wedding"
      title="Lose 5–7 Kilos in just 30 Days"
      subtitle="& Still Eat the Food You Love!"
      maxItems={6}
    />

  </div>
</section>
      {/* What Happens When You Start Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-5xl font-bold text-black leading-tight mb-8 md:mb-16">
            What Happens
            <br />
            When You Start the{" "}
            <span className="text-[#ff850b]">DTPS Wedding Plan</span>
          </h2>

          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-between gap-5 max-w-[996px] mx-auto mb-8">
            {/* Brides Tab */}
            <div
              onClick={() => setActiveTab("brides")}
              className={`h-60 w-[220px] relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeTab === "brides" ? "-translate-y-1.5 scale-[1.06]" : ""
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] transition-colors duration-300 ${
                  activeTab === "brides" ? "bg-[#ff850b]" : "bg-[#4e0101]"
                }`}
              ></div>
              <div className="absolute bottom-0 left-[calc(50%-79px)] w-[159px] h-60">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-2.png"
                  alt="Brides"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] ${
                  activeTab === "brides"
                    ? "bg-gradient-to-b from-transparent via-transparent to-[rgba(255,133,11,0.55)]"
                    : "bg-gradient-to-b from-transparent via-transparent to-[#4e0101]"
                }`}
              ></div>
              <div
                className={`absolute top-[203px] left-[calc(50%-38px)] font-semibold text-white text-2xl ${
                  activeTab === "brides"
                    ? "drop-shadow-[0_1px_10px_rgba(255,133,11,0.45)]"
                    : ""
                }`}
              >
                Brides
              </div>
            </div>

            {/* Grooms Tab */}
            <div
              onClick={() => setActiveTab("grooms")}
              className={`h-60 w-[220px] relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeTab === "grooms" ? "-translate-y-1.5 scale-[1.06]" : ""
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] transition-colors duration-300 ${
                  activeTab === "grooms" ? "bg-[#ff850b]" : "bg-[#4e0101]"
                }`}
              ></div>
              <div className="absolute bottom-0 left-[calc(50%-100px)] w-[201px] h-60">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-3.png"
                  alt="Grooms"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] ${
                  activeTab === "grooms"
                    ? "bg-gradient-to-b from-transparent via-transparent to-[rgba(255,133,11,0.55)]"
                    : "bg-gradient-to-b from-transparent via-transparent to-[#4e0101]"
                }`}
              ></div>
              <div
                className={`absolute top-[203px] left-[calc(50%-47px)] font-semibold text-white text-2xl ${
                  activeTab === "grooms"
                    ? "drop-shadow-[0_1px_10px_rgba(255,133,11,0.45)]"
                    : ""
                }`}
              >
                Grooms
              </div>
            </div>

            {/* Couples Tab */}
            <div
              onClick={() => setActiveTab("couples")}
              className={`h-60 w-[220px] relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeTab === "couples" ? "-translate-y-1.5 scale-[1.06]" : ""
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] transition-colors duration-300 ${
                  activeTab === "couples" ? "bg-[#ff850b]" : "bg-[#4e0101]"
                }`}
              ></div>
              <div className="absolute bottom-0 left-[calc(50%-80px)] w-[161px] h-60">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-4.png"
                  alt="Couples"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] ${
                  activeTab === "couples"
                    ? "bg-gradient-to-b from-transparent via-transparent to-[rgba(255,133,11,0.55)]"
                    : "bg-gradient-to-b from-transparent via-transparent to-[#4e0101]"
                }`}
              ></div>
              <div
                className={`absolute top-[203px] left-[calc(50%-49px)] font-semibold text-white text-2xl ${
                  activeTab === "couples"
                    ? "drop-shadow-[0_1px_10px_rgba(255,133,11,0.45)]"
                    : ""
                }`}
              >
                Couples
              </div>
            </div>

            {/* Guests Tab */}
            <div
              onClick={() => setActiveTab("guests")}
              className={`h-60 w-[220px] relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeTab === "guests" ? "-translate-y-1.5 scale-[1.06]" : ""
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] transition-colors duration-300 ${
                  activeTab === "guests" ? "bg-[#ff850b]" : "bg-[#4e0101]"
                }`}
              ></div>
              <div className="absolute bottom-0 left-[calc(50%-100.5px)] w-[202px] h-60">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-5.png"
                  alt="Guests"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 rounded-3xl w-full h-[180px] ${
                  activeTab === "guests"
                    ? "bg-gradient-to-b from-transparent via-transparent to-[rgba(255,133,11,0.55)]"
                    : "bg-gradient-to-b from-transparent via-transparent to-[#4e0101]"
                }`}
              ></div>
              <div
                className={`absolute top-[203px] left-[calc(50%-43px)] font-semibold text-white text-2xl ${
                  activeTab === "guests"
                    ? "drop-shadow-[0_1px_10px_rgba(255,133,11,0.45)]"
                    : ""
                }`}
              >
                Guests
              </div>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="flex md:hidden flex-wrap justify-center gap-3 mb-6">
            {["brides", "grooms", "couples", "guests"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-5 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#ff850b] text-white"
                    : "bg-[#4e0101] text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Card - Desktop */}
          <div className="hidden md:block bg-[#4e0101] rounded-3xl overflow-hidden relative min-h-[467px] max-w-[1200px] mx-auto">
            <div className="absolute top-0 left-[102px] bg-[#ff850b] w-[180px] h-full"></div>

            <Image
              src={tabsData[activeTab].image}
              alt={activeTab}
              width={410}
              height={459}
              className="absolute bottom-0 left-[102px] object-cover"
            />

            <div className="absolute top-[126px] left-[510px] w-[580px] flex flex-col gap-6">
              {tabsData[activeTab].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/ion_diamond.svg"
                    alt="Diamond"
                    width={24}
                    height={24}
                  />
                  <div className="font-semibold capitalize text-white text-base">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content Card - Mobile */}
          <div className="md:hidden bg-[#4e0101] rounded-2xl overflow-hidden p-5">
            <div className="flex flex-col items-center">
              <div className="relative w-full flex justify-center mb-5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ff850b] w-[120px] h-full rounded-lg"></div>
                <Image
                  src={tabsData[activeTab].image}
                  alt={activeTab}
                  width={200}
                  height={250}
                  className="relative z-10 object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                {tabsData[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image
                      src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/ion_diamond.svg"
                      alt="Diamond"
                      width={18}
                      height={18}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <div className="font-medium text-white text-sm">
                      {benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Five Step Cycle Program Section */}
<section className="bg-white py-12 md:py-20 px-4 md:px-5">

  <div className="max-w-[1200px] mx-auto bg-[#6b0404] rounded-[26px] py-14 px-6 md:px-12">

    {/* Title */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
        Our <span className="text-[#ff850b]">Five-Cycle</span> Program
      </h2>

      <p className="text-[#ff850b] text-lg md:text-2xl font-medium">
        A science-based process that prepares your body
      </p>

      <p className="text-[#ff850b] text-lg md:text-2xl font-medium">
        for sustainable weight loss.
      </p>
    </div>


    {/* Desktop Circular Layout */}
    <div className="hidden md:block relative w-full h-[520px]">

      {/* Dotted Orbit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[360px] h-[360px] border-2 border-dashed border-white rounded-full"></div>
      </div>

      {/* Center Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-[#ff850b] rounded-full flex items-center justify-center shadow-lg z-30">
        <span className="text-center text-white font-bold text-2xl leading-tight">
          WEIGHT <br /> LOSS
        </span>
      </div>


      {/* Top - Detox */}
      <div className="absolute left-1/2 top-[0px] -translate-x-1/2 w-44 text-center">

        <div className="w-20 h-20 bg-[#ff850b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <path d="M20 5V25M15 10H25M12 20C12 25.5 15.6 30 20 30C24.4 30 28 25.5 28 20" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1">
          Detoxification
        </h3>

        <p className="text-[#ff850b] text-xs">
          This initial phase gently cleanses your body
        </p>

      </div>


      {/* Top Right */}
      <div className="absolute top-[80px] right-[90px] w-44 text-center">

        <div className="w-20 h-20 bg-[#ff850b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <path d="M20 8L24 16H32L26 21L28 29L20 24L12 29L14 21L8 16H16L20 8Z" fill="white"/>
          </svg>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1">
          Anti-Inflammatory Reset
        </h3>

        <p className="text-[#ff850b] text-xs">
          Anti-inflammatory foods to reduce inflammation
        </p>

      </div>


      {/* Bottom Right */}
      <div className="absolute bottom-[50px] right-[120px] w-44 text-center">

        <div className="w-20 h-20 bg-[#ff850b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <path d="M20 5C15 8 12 14 12 20C12 28 15.7 35 20 35C24.3 35 28 28 28 20C28 14 25 8 20 5Z" fill="white"/>
          </svg>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1">
          Fat-Burning Activation
        </h3>

        <p className="text-[#ff850b] text-xs">
          Cycle focused on maximizing fat burning
        </p>

      </div>


      {/* Bottom Left */}
      <div className="absolute bottom-[50px] left-[120px] w-44 text-center">

        <div className="w-20 h-20 bg-[#ff850b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <path d="M20 8C14.5 8 10 12.5 10 18C10 23.5 14.5 28 20 28C25.5 28 30 23.5 30 18" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1">
          Metabolic Optimisation
        </h3>

        <p className="text-[#ff850b] text-xs">
          Rev up your metabolism with booster cycle
        </p>

      </div>


      {/* Top Left */}
      <div className="absolute top-[80px] left-[90px] w-44 text-center">

        <div className="w-20 h-20 bg-[#ff850b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <path d="M20 10L25 22H38L28 28L32 40L20 34L8 40L12 28L2 22H15L20 10Z" fill="white"/>
          </svg>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1">
          Maintenance & Progression
        </h3>

        <p className="text-[#ff850b] text-xs">
          Celebrate your success and maintain your weight loss
        </p>

      </div>

    </div>


    {/* Mobile Layout */}
    <div className="md:hidden space-y-4 mt-10">

      {[
        {
          title:"Detoxification",
          text:"This initial phase gently cleanses your body"
        },
        {
          title:"Anti-Inflammatory Reset",
          text:"Anti-inflammatory foods to reduce inflammation"
        },
        {
          title:"Fat-Burning Activation",
          text:"Cycle focused on maximizing fat burning"
        },
        {
          title:"Metabolic Optimisation",
          text:"Rev up your metabolism"
        },
        {
          title:"Maintenance & Progression",
          text:"Maintain your weight loss success"
        }

      ].map((item,index)=>(
        
        <div key={index} className="bg-[#4E0101] rounded-2xl p-5 border-2 border-[#ff850b]">

          <div className="flex gap-4">

            <div className="w-16 h-16 bg-[#ff850b] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold">{index+1}</span>
            </div>

            <div>

              <h3 className="text-white font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-[#ff850b] text-sm">
                {item.text}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* Why People Trust DTPS Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-black leading-tight mb-6 md:mb-10">
            Why people trust <span className="text-[#ff850b]">DTPS</span>?
          </h2>

          <div className="flex flex-col gap-3 md:gap-5 max-w-full md:max-w-[65%] mx-auto">
            <div className="bg-[#4E0101] rounded-2xl md:rounded-3xl py-3 md:py-4 px-4 md:px-5 flex items-center gap-3 md:gap-5">
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
                className="w-12 h-12 md:w-[70px] md:h-[70px]"
              />
              <p className="text-white text-sm md:text-xl font-normal leading-relaxed m-0">
                Personalised plan built around your taste, work hours, travel,
                and culture
              </p>
            </div>

            <div className="bg-[#4E0101] rounded-2xl md:rounded-3xl py-3 md:py-4 px-4 md:px-5 flex items-center gap-3 md:gap-5">
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
                className="w-12 h-12 md:w-[70px] md:h-[70px]"
              />
              <p className="text-white text-sm md:text-xl font-normal leading-relaxed m-0">
                Medical aware for PCOS, thyroid, and diabetes with reports
                considered
              </p>
            </div>

            <div className="bg-[#4E0101] rounded-2xl md:rounded-3xl py-3 md:py-4 px-4 md:px-5 flex items-center gap-3 md:gap-5">
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
                className="w-12 h-12 md:w-[70px] md:h-[70px]"
              />
              <p className="text-white text-sm md:text-xl font-normal leading-relaxed m-0">
                No supplements. No heavy workouts. No starvation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-3 md:px-5">
          <div className="grid grid-cols-2 md:flex gap-2 md:gap-0">
            <div className="md:flex-[25%] p-1.5">
              <div className="bg-[#FF850B] rounded-2xl py-6 md:py-10 px-4 md:px-5 text-center">
                <div className="text-white text-3xl md:text-5xl font-bold">
                  4.8
                </div>
                <div className="text-white text-sm md:text-base">
                  Google Rating
                </div>
              </div>
            </div>

            <div className="md:flex-[25%] p-1.5">
              <div className="bg-[#FF850B] rounded-2xl py-6 md:py-10 px-4 md:px-5 text-center">
                <div className="text-white text-3xl md:text-5xl font-bold">
                  98%
                </div>
                <div className="text-white text-sm md:text-base">
                  Success Rate
                </div>
              </div>
            </div>

            <div className="md:flex-[25%] p-1.5">
              <div className="bg-[#FF850B] rounded-2xl py-6 md:py-10 px-4 md:px-5 text-center">
                <div className="text-white text-3xl md:text-5xl font-bold">
                  75K+
                </div>
                <div className="text-white text-sm md:text-base">Clients</div>
              </div>
            </div>

            <div className="md:flex-[25%] p-1.5">
              <div className="bg-[#FF850B] rounded-2xl py-4 px-4 md:px-5 text-center">
                <div className="text-white text-xs md:text-sm">
                  Personalised
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold my-1.5 md:my-2.5">
                  GHAR
                </div>
                <div className="text-white text-xs md:text-sm">
                  ka Khana Diet Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Do Not Push Section */}
      <section className="bg-white pt-8 md:pt-12 pb-10 md:pb-20">
        <div className="px-2 md:px-4">
          <div className="max-w-[1820px] mx-auto rounded-[20px] md:rounded-[50px] overflow-hidden relative bg-[#4E0101] bg-[url('https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/1f715e423077509b682c964bc8c674abca623e88-2.png')] bg-cover bg-center pt-6 px-2.5">
            <div className="absolute inset-0 bg-[rgba(78,1,1,0.95)]"></div>

            {/* Desktop Layout */}
            <div className="relative z-10 hidden md:flex flex-wrap gap-7 p-2.5 items-center justify-center">
              <div className="w-[calc(40%-20px)]">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Bride-Cross.png"
                  alt="Bride"
                  width={500}
                  height={550}
                  className="w-[60%] h-auto mx-auto block"
                />
              </div>

              <div className="w-[calc(50%-20px)]">
                <h2 className="text-5xl font-bold text-white leading-tight mb-7 py-7">
                  We Do Not <span className="text-[#ff850b]">Push</span>
                </h2>

                <div className="flex flex-col gap-5">
                  <div className="bg-[#FF850B] rounded-2xl py-2 px-2.5 flex items-center gap-5">
                    <div className="bg-white rounded-xl p-2.5 flex items-center justify-center">
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/no_meals.svg"
                        alt="No meals"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="text-white text-lg font-semibold leading-relaxed m-0">
                      Crash diets. Starvation.
                    </p>
                  </div>

                  <div className="bg-[#FF850B] rounded-2xl py-2 px-2.5 flex items-center gap-5">
                    <div className="bg-white rounded-xl p-2.5 flex items-center justify-center">
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/pill-1.svg"
                        alt="Pills"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="text-white text-lg font-semibold leading-relaxed m-0">
                      Glutathione. Fat-burner pills. Detox teas.
                    </p>
                  </div>

                  <div className="bg-[#FF850B] rounded-2xl py-2 px-2.5 flex items-center gap-5">
                    <div className="bg-white rounded-xl p-2.5 flex items-center justify-center">
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/cardio_load.svg"
                        alt="Cardio"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="text-white text-lg font-semibold leading-relaxed m-0">
                      Heavy gym plans if you do not want them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="relative z-10 md:hidden flex flex-col p-4">
              <h2 className="text-2xl font-bold text-white leading-tight mb-5 text-center">
                We Do Not <span className="text-[#ff850b]">Push</span>
              </h2>

              <div className="flex justify-center mb-5">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Bride-Cross.png"
                  alt="Bride"
                  width={250}
                  height={300}
                  className="h-auto"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-[#FF850B] rounded-xl py-2 px-3 flex items-center gap-3">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/no_meals.svg"
                      alt="No meals"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="text-white text-sm font-semibold m-0">
                    Crash diets. Starvation.
                  </p>
                </div>

                <div className="bg-[#FF850B] rounded-xl py-2 px-3 flex items-center gap-3">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/pill-1.svg"
                      alt="Pills"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="text-white text-sm font-semibold m-0">
                    Glutathione. Fat-burner pills. Detox teas.
                  </p>
                </div>

                <div className="bg-[#FF850B] rounded-xl py-2 px-3 flex items-center gap-3">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/cardio_load.svg"
                      alt="Cardio"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="text-white text-sm font-semibold m-0">
                    Heavy gym plans if you do not want them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-12 md:py-16 px-5">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <span className="text-[#ff850b] text-sm md:text-base font-semibold leading-relaxed">
            Our Pricing
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-black leading-tight my-2.5 max-w-full md:max-w-[56%]">
            Take the First Step to a{" "}
            <span className="text-[#ff850b]">Healthier Future</span>
          </h2>

          <p className="text-sm md:text-base font-light leading-relaxed text-[#828283] max-w-full md:max-w-[65%] mx-auto mb-6 md:mb-10">
            Join our Plan today and embark on a journey to better health with
            our wedding plan!
          </p>

          <div className="w-full flex justify-center px-5">
            <div className="max-w-[1400px] w-full">
              <DynamicPlansDisplay
                category="new-wedding-plan"
                showHeader={false}
                columns="4"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `wedding-${plan.planName
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`,
                    name: `Wedding Prep Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1,
                  };
                  sessionStorage.setItem(
                    "checkoutProducts",
                    JSON.stringify([product])
                  );
                  window.location.href = "/checkout";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award-Winning Recognition Section */}
      <section className="bg-white pt-12 md:pt-24 pb-16 px-2.5">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-black leading-tight mx-auto mb-4 md:mb-5 max-w-full md:max-w-[77%]">
            <span className="text-[#ff850b]">Award-Winning</span> Health &
            Wellness
          </h2>

          <p className="text-sm md:text-base font-light leading-relaxed text-[#828283] max-w-full md:max-w-[65%] mx-auto mb-6 md:mb-10">
            Proud to be recognized for excellence in health, innovation, and
            results—our weight loss plan has earned top industry awards for
            effectiveness and success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-[#4C0202] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.5)] p-4 text-left"
              >
                <Image
                  src={award.image}
                  alt={award.title}
                  width={400}
                  height={250}
                  className="w-full h-auto rounded-[10px] mb-4"
                />
                <h3 className="text-xl font-semibold text-white leading-tight mb-2.5">
                  {award.title}
                </h3>
                <button className="bg-[#4C0202] text-white border-none py-2 px-0 text-[15px] font-medium cursor-pointer flex items-center gap-2">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert's Guidance Section */}
      <section className="bg-white pt-8 md:pt-12">
        <div className="px-2 md:px-4">
          <div className="max-w-[1820px] mx-auto rounded-[20px] md:rounded-[50px] overflow-hidden relative bg-[#4E0101] bg-[url('https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/1f715e423077509b682c964bc8c674abca623e88-2.png')] bg-cover bg-center pt-10 md:pt-16 px-2.5">
            <div className="absolute inset-0 bg-[rgba(78,1,1,0.96)]"></div>

            {/* Desktop Layout */}
            <div className="relative z-10 hidden md:block">
              <h2 className="text-center text-[45px] font-bold text-white leading-tight mb-12">
                You are Under{" "}
                <span className="text-[#ff850b]">Expert&apos;s Guidance</span>
              </h2>

              <div className="flex flex-wrap gap-7 p-2.5 items-center justify-center">
                <div className="w-[calc(40%-20px)]">
                  <Image
                    src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Untitled-design-32-1.png"
                    alt="Dt. Poonam Sagar"
                    width={500}
                    height={550}
                    className="w-[60%] h-auto mx-auto block"
                  />
                </div>

                <div className="w-[calc(50%-20px)]">
                  <p className="text-white text-base font-light leading-relaxed mb-5">
                    Dt. Poonam Sagar understands that one-size-fits-all plans
                    simply don&apos;t suffice. That&apos;s why we specialize in
                    crafting personalized dietary solutions tailored to your
                    unique needs and preferences. Dt. Sagar&apos;s philosophy
                    revolves around creating sustainable meal plans centered on
                    delicious, home-cooked dishes.
                  </p>

                  <ul className="list-none py-5 px-4 m-0 grid gap-2.5">
                    {[
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28.svg",
                        text: "Holistic Health Approach",
                      },
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-1.svg",
                        text: "Nutritional Counsellors",
                      },
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-2.svg",
                        text: "Compassionate Care",
                      },
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-3.svg",
                        text: "Tailored meal plan",
                      },
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-4.svg",
                        text: "Weight Management",
                      },
                      {
                        icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-5.svg",
                        text: "Better Health",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-1.5 text-white text-base font-normal leading-normal"
                      >
                        <Image src={item.icon} alt="" width={28} height={28} />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="relative z-10 md:hidden px-4 py-6">
              <h2 className="text-center text-2xl font-bold text-white leading-tight mb-6">
                You are Under{" "}
                <span className="text-[#ff850b]">Expert&apos;s Guidance</span>
              </h2>

              <div className="flex justify-center mb-5">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Untitled-design-32-1.png"
                  alt="Dt. Poonam Sagar"
                  width={250}
                  height={300}
                  className="h-auto"
                />
              </div>

              <p className="text-white text-sm font-light leading-relaxed mb-4 text-center">
                Dt. Poonam Sagar understands that one-size-fits-all plans
                simply don&apos;t suffice. We specialize in crafting
                personalized dietary solutions tailored to your unique needs.
              </p>

              <ul className="list-none p-0 m-0 grid grid-cols-2 gap-2">
                {[
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28.svg",
                    text: "Holistic Health",
                  },
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-1.svg",
                    text: "Nutritional Care",
                  },
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-2.svg",
                    text: "Compassionate",
                  },
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-3.svg",
                    text: "Tailored Plan",
                  },
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-4.svg",
                    text: "Weight Mgmt",
                  },
                  {
                    icon: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-5.svg",
                    text: "Better Health",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1.5 text-white text-xs font-normal"
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Is Ticking CTA Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-black leading-tight mx-auto mb-4 md:mb-5 max-w-full md:max-w-[56%]">
            Time Is <span className="text-[#ff850b]">Ticking</span>
            <br />
            Say &apos;Yes&apos; to Your{" "}
            <span className="text-[#ff850b]">Best Body</span>!
          </h2>

          <p className="text-base md:text-[23px] font-normal leading-normal text-[#828283] max-w-full md:max-w-[65%] mx-auto py-2.5 pb-6 md:pb-10">
            Your photos last forever — make sure you love what you see! Get the
            personalized plan brides swear by.
          </p>

          <button className="bg-[#FF850B] text-white border-none rounded-[48px] py-3 px-8 md:px-16 text-base md:text-xl font-semibold cursor-pointer hover:bg-[#e07a1a] transition-colors">
            Get Your Wedding Plan Now!
          </button>
        </div>
      </section>

      <style jsx>{`
        .wedding-hero-wrapper {
          width: 100%;
          padding: 16px 18px 0;
          background: #ffffff;
        }

        .wedding-hero-section {
          position: relative;
          width: 100%;
          max-width: 1490px;
          margin: 0 auto;
          min-height: 650px;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: #4e0101;
        }

        .wedding-hero-image {
          object-fit: cover;
          object-position: center top;
          z-index: 1;
          transform: scale(1.01);
        }

        .wedding-hero-top-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(18, 0, 0, 0.55) 0%,
            rgba(30, 0, 0, 0.18) 18%,
            rgba(55, 0, 0, 0.08) 38%,
            rgba(80, 0, 0, 0) 52%
          );
          pointer-events: none;
        }

        .wedding-hero-bottom-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            to top,
            rgba(104, 0, 0, 0.98) 0%,
            rgba(120, 0, 0, 0.92) 12%,
            rgba(125, 0, 0, 0.75) 24%,
            rgba(118, 0, 0, 0.38) 39%,
            rgba(118, 0, 0, 0.12) 52%,
            rgba(118, 0, 0, 0) 64%
          );
          pointer-events: none;
        }

        .wedding-hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0) 40%,
              rgba(46, 0, 0, 0.1) 74%,
              rgba(20, 0, 0, 0.3) 100%
            ),
            linear-gradient(
              to right,
              rgba(30, 0, 0, 0.18) 0%,
              rgba(30, 0, 0, 0) 18%,
              rgba(30, 0, 0, 0) 82%,
              rgba(30, 0, 0, 0.18) 100%
            );
          pointer-events: none;
        }

        .wedding-navbar-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 5;
        }

        .wedding-hero-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
          padding: 0 24px 46px;
          text-align: center;
        }

        .wedding-hero-title {
          margin: 0;
          color: #ffffff;
          font-size: 56px;
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -0.03em;
          text-align: center;
        }

        .wedding-highlight {
          color: #ff8a00;
        }

        .wedding-hero-subtitle {
          margin: 18px 0 0;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 400;
          text-align: center;
        }

        @media (max-width: 1280px) {
          .wedding-hero-section {
            min-height: 600px;
          }

          .wedding-hero-title {
            font-size: 50px;
          }
        }

        @media (max-width: 1024px) {
          .wedding-hero-section {
            min-height: 560px;
            border-radius: 20px;
          }

          .wedding-hero-title {
            font-size: 44px;
          }

          .wedding-hero-content {
            max-width: 860px;
            padding: 0 24px 40px;
          }
        }

@media (max-width:767px){

.wedding-hero-wrapper{
  padding:14px;
}

/* Reduce hero height */
.wedding-hero-section{
  height:420px;   /* earlier ~650px which caused stretching */
  border-radius:22px;
}

/* Keep image natural */
.wedding-hero-image{
  object-fit:cover;
  object-position:center top;
}

/* Adjust text position */
.wedding-hero-content{
  padding:0 20px 28px;
}

.wedding-hero-title{
  font-size:26px;
  line-height:1.2;
}

.wedding-hero-subtitle{
  font-size:13px;
}

}
        @media (max-width: 420px) {
          .wedding-hero-section {
            min-height: 660px;
          }

          .wedding-hero-title {
            font-size: 28px;
          }

          .wedding-hero-content {
            padding: 0 16px 26px;
          }
        }
      `}</style>
    </main>
  );
}