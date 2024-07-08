import { AboutUs } from "@/components/sections/about-us";
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
      
      <AboutUs />
      <Mision />
      <CanHelp />
    </main>
  );
}
