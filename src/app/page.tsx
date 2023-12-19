import Image from "next/image";

import { About } from "@components/about";
import { Blog } from "@components/blog";
import { Contact } from "@components/contact";
import { Jumbotron } from "@components/home/Jumbotron";

export default function HomePage() {
  return (
    <>
      <main>
        <Jumbotron />
        <About />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
