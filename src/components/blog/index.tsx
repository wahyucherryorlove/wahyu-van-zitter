"use client";

import Image from "next/image";
import Link from "next/link";

import { BlogTemp } from "@temp/blog";

const Blog = () => {
  return (
    <section className="xl:py-[6rem] xl:w-3/4 xl:mx-auto">
      <div className="flex flex-col gap-y-2 items-center mb-12">
        <h6 className="text-sm font-semibold text-[#939393]">
          LATEST BLOG POST
        </h6>
        <h2 className="text-4xl font-semibold text-[#FF8B00]">MY BLOG</h2>
      </div>

      <div className="grid xl:grid-cols-2 gap-x-6 gap-y-10">
        {BlogTemp.map(({ id, title, date, figure, text, images }) => (
          <article key={id}>
            <div className="w-full xl:h-[350px] relative">
              <Image
                src={images}
                alt={`${title}${figure}`}
                className="object-contain lg:object-fill rounded-md"
                fill
              />
            </div>

            <div className="mt-6">
              <h1 className="xl:text-3xl font-semibold text-[#FF8B00] ">
                <Link href="">{title}</Link>
              </h1>

              <h5 className="text-[#939393] text-sm mt-2 uppercase">
                {date} BY{" "}
                <Link href="" className="border-b border-[#939393]">
                  {figure}
                </Link>
              </h5>

              <p className="text-[#939393] text-base xl:mt-4">{text}</p>

              <Link
                href="#"
                className="bg-[#FF8B00] text-neutral-50 px-3 py-2.5 hover:bg-[#ff9e27] text-xs font-bold rounded-md inline-block xl:mt-6 duration-200"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Blog };
