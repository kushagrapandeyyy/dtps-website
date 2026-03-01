"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="rounded-[28px] px-6 md:px-12 py-2 md:py-4"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <Image
            src="/images/why choose us ( dekstop).svg"
            alt="Why Choose Us - Desktop"
            width={1200}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <Image
            src="/images/why choose us ( mobile ).svg"
            alt="Why Choose Us - Mobile"
            width={600}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );}