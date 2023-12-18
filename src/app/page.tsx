import Image from "next/image";

import { About } from "@components/about";
import { Blog } from "@components/blog";
import { Jumbotron } from "@components/home/Jumbotron";

export default function Home() {
  return (
    <>
      <main>
        <Jumbotron />

        <About />

        <Blog />
      </main>
    </>
  );
}
