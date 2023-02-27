import CTA from "@/components/layout/CTA";
import Hero from "@/sections/home/hero.js";
import Intro from "@/sections/home/intro";
import Portfolio from "@/sections/home/portfolio";
import Slogan from "@/sections/home/slogan";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Slogan/>
      <Intro/>
      <Portfolio/>
      <CTA/>
    </div>
  )
}
