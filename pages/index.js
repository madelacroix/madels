import CTA from "@/components/layout/CTA";
import Hero from "@/sections/home/hero.js";
import Intro from "@/sections/home/intro";
import Portfolio from "@/sections/home/portfolio";
import Slogan from "@/sections/home/slogan";
import Header from "@/components/layout/header";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  console.log(`query = ${router.query}`)
  console.log(`pathname = ${router.pathname}`)
  console.log(router)

  if (router.asPath !== "/") {
    router.push(router.asPath);
  }
  
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
