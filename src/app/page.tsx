import { AboutUs } from "@/components/sections/about-us";
import { BProject } from "@/components/sections/b-project";
import { CanHelp } from "@/components/sections/can-help";
import { Hero } from "@/components/sections/hero";
import { Mision } from "@/components/sections/mision";
import { Progress } from "@/components/sections/progress";
import { api } from "@/lib/api";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Progress />
      <BProject />

      <div className="bg-baBlue h-[77px] w-full"/>

      <AboutUs />
      <Mision />
      <CanHelp />
    </main>
  );
}
