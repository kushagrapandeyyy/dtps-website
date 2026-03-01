"use client";
import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="py-6 px-4 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <Image
            src="/img/5 cycle ( dekstop).svg"
            alt="5-Cycle Weight Loss Process - Desktop"
            width={1200}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <Image
            src="/img/5 cycle (mobile ).svg"
            alt="5-Cycle Weight Loss Process - Mobile"
            width={600}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

