import Image from "next/image";

import { Navbar } from "@components/Navbar";

import { Jumbotron } from "@components/home/Jumbotron";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Jumbotron />
      </main>
    </>
  );
}
