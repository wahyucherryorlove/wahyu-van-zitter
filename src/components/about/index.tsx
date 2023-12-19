import Image from "next/image";
import Link from "next/link";

import Profile from "@images/about/profile.webp";

const About = () => {
  return (
    <section className="xl:py-[6rem] xl:w-3/4 xl:mx-auto">
      <article className="flex xl:gap-x-20">
        <Image
          src={Profile}
          alt="Wahyudi Umar"
          className="w-full h-full object-contain object-center"
        />
        <div className="xl:w-[1500px] xl:mt-24 xl:pl-10">
          <h5 className="text-[#FF8B00] xl:text-2xl font-semibold xl:mb-[20px]">
            WHO I AM?
          </h5>

          <p className="text-[#939393] xl:text-base">
            A creative front-end developer with more than a year of experience.
            Have the ability and experience in designing, developing and testing
            technology websites with the latest technology. Already uses Java
            Script, React Js, Next Js, and PHP programming languages. Want to
            look for more challenges and want to further expand your knowledge
            in the field of Programming.
          </p>

          <Link
            href=""
            className="bg-[#FF8B00] text-neutral-50 px-6 py-2.5 hover:bg-[#ff9e27] text-sm font-bold rounded-md inline-block xl:mt-6 duration-200"
          >
            Download Resume
          </Link>
        </div>
      </article>
    </section>
  );
};

export { About };
