"use client";

import Image from "next/image";

type Blog = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    date: "February 22,2024",
    title: "The Power Of Self-Care In Your Wellness Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/img/blog-1.png",
    href: "#",
  },
  {
    id: 2,
    date: "February 22,2024",
    title: "The Power Of Self-Care In Your Wellness Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/img/blog-2.png",
    href: "#",
  },
  {
    id: 3,
    date: "February 22,2024",
    title: "The Power Of Self-Care In Your Wellness Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/img/blog-3.png",
    href: "#",
  },
];

export default function OurBlogsSection() {
  return (
    <section className="section-wrapper">
      <div className="w-full rounded-[30px] bg-[#015b5b] px-4 py-7 md:px-[64px] md:py-[58px] overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 md:gap-8">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[#FF8A0A] text-[14px] leading-none">✦</span>
              <span className="text-white text-[14px] md:text-[15px] font-semibold leading-none">
                Our Blogs
              </span>
            </div>

            <h2 className="text-white text-[34px] leading-[1.08] tracking-[-0.02em] font-bold md:text-[60px] md:leading-[1.05]">
              Stories for
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              every mood
            </h2>
          </div>

          <a
            href="#"
            className="mt-[38px] md:mt-[28px] inline-flex h-[42px] md:h-[34px] shrink-0 items-center justify-center rounded-full bg-[#FF8A0A] px-6 md:px-7 text-white text-[14px] md:text-[13px] font-semibold leading-none"
          >
            <span className="md:hidden">View All</span>
            <span className="hidden md:inline">View more blogs</span>
          </a>
        </div>

        {/* Desktop Grid */}
        <div className="mt-12 hidden md:grid grid-cols-3 gap-[26px]">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-[18px] bg-[#F3F3F3] p-[15px] shadow-none"
            >
              <div className="overflow-hidden rounded-[12px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={360}
                  height={195}
                  className="h-[170px] w-full rounded-[12px] object-cover bg-[#D9D9D9]"
                />
              </div>

              <div className="pt-4">
                <p className="text-[#8C8C8C] text-[13px] leading-[1.4] font-medium">
                  {blog.date}
                </p>

                <h3 className="mt-3 text-[#222222] text-[21px] leading-[1.08] font-bold max-w-[300px]">
                  {blog.title}
                </h3>

                <p className="mt-3 text-[#888888] text-[13px] leading-[1.35] max-w-[315px]">
                  {blog.description}
                </p>

                <a
                  href={blog.href || "#"}
                  className="mt-4 inline-flex h-[22px] items-center justify-center rounded-[6px] bg-[#FF8A0A] px-[9px] text-white text-[11px] font-semibold leading-none"
                >
                  Read more <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="mt-8 md:hidden -mr-4">
          <div className="flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory no-scrollbar">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="w-[270px] shrink-0 snap-start rounded-[16px] bg-[#F3F3F3] p-3"
              >
                <div className="overflow-hidden rounded-[12px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={260}
                    height={170}
                    className="h-[132px] w-full rounded-[12px] object-cover bg-[#D9D9D9]"
                  />
                </div>

                <div className="pt-3">
                  <p className="text-[#8C8C8C] text-[12px] leading-[1.35] font-medium">
                    {blog.date}
                  </p>

                  <h3 className="mt-3 text-[#222222] text-[17px] leading-[1.08] font-bold">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-[#888888] text-[12px] leading-[1.35]">
                    {blog.description}
                  </p>

                  <a
                    href={blog.href || "#"}
                    className="mt-4 inline-flex h-[20px] items-center justify-center rounded-[6px] bg-[#FF8A0A] px-[8px] text-white text-[10px] font-semibold leading-none"
                  >
                    Read more <span className="ml-1">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
