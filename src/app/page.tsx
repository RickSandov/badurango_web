'use client'
import { AboutUs } from "@/components/sections/about-us";
import { CanHelp } from "@/components/sections/can-help";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Mision } from "@/components/sections/mision";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {


  return (
    <main className=" overflow-hidden">
      <Hero />
      <AboutUs />
      <Mision />
      <CanHelp />
      <Footer />
    </main>
  );
}
