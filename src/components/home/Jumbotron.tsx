import Link from "next/link";

const Jumbotron = () => {
  return (
    <section className="relative bg-neutral-400 h-[550px] xl:mt-[6rem]">
      <div
        className="h-full flex flex-col items-center justify-center bg-contain"
        style={{ backgroundImage: "url('/images/home/jumbotron.png')" }}
      >
        <div className="absolute inset-0 bg-neutral-900/60" />

        <div className="absolute flex items-center flex-col justify-center xl:gap-y-6 h-full">
          <h1 className="lg:text-5xl font-bold flex flex-col gap-y-3 text-center text-neutral-50">
            HI, I&apos;M WAHYUDI UMAR
            <span className="text-[#FF8B00]">
              I&apos;M A FRONTEND DEVELOPER
            </span>
          </h1>

          <p className="xl:w-1/2 text-center text-lg text-neutral-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, autem
            possimus. Aliquid pariatur quod iure odio consectetur accusantium
            neque explicabo!
          </p>

          <Link
            href=""
            className="bg-transparent border border-neutral-50 text-neutral-50 px-6 py-2.5 hover:bg-neutral-50 hover:text-black text-base font-bold rounded-md xl:mt-4 duration-200"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Jumbotron };
