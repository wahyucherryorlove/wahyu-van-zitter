"use client";

import Image from "next/image";
import Link from "next/link";

import { BlogTemp } from "@temp/blog";

const Contact = () => {
  return (
    <section className="xl:py-[6rem] xl:w-3/4 xl:mx-auto">
      <div className="flex flex-col gap-y-2 items-center mb-12">
        <h6 className="text-sm font-semibold text-[#939393] uppercase">
          Get In Touch
        </h6>
        <h2 className="text-4xl font-semibold text-[#FF8B00] uppercase">
          Contact Me
        </h2>
      </div>

      <div className="w-1/2 mx-auto">
        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            className="py-3 px-4 rounded-sm text-neutral-300 outline-none text-sm bg-[#333333] border-2 border-transparent focus:border-[#343a40] duration-200"
            placeholder="Your name..."
          />
          <input
            type="text"
            className="py-3 px-4 rounded-sm text-neutral-300 outline-none text-sm bg-[#333333] border-2 border-transparent focus:border-[#343a40] duration-200"
            placeholder="Email address..."
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="py-3 px-4 rounded-sm text-neutral-300 outline-none text-sm bg-[#333333] border-2 border-transparent focus:border-[#343a40] duration-200"
            placeholder="Write your message..."
          />

          <button className="bg-[#FF8B00] py-3 text-sm rounded-sm w-1/3 mx-auto font-semibold text-neutral-50 hover:bg-[#e39a41] duration-300">
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
