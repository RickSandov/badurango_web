'use client'
import { AboutUs } from "@/components/sections/about-us";
import { Hero } from "@/components/sections/hero";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {


  return (
    <main className=" overflow-hidden">
      <Hero />
      <AboutUs />
    </main>
  );
}
