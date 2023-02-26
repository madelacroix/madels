import CTA from "@/sections/home/CTA";
import Hero from "@/sections/home/hero.js";
import Intro from "@/sections/home/intro";
import Portfolio from "@/sections/home/portfolio";
import Slogan from "@/sections/home/slogan";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Slogan/>
      <Intro/>
      <Portfolio/>
      <CTA/>
    </div>
  )
}
