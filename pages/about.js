import CTA from "@/components/layout/CTA"
import Header from "@/components/layout/header"
import Hero from "@/sections/about/hero"
import Pitch from "@/sections/about/pitch"
import Slogan from "@/sections/about/slogan"

export default function About() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Slogan/>
            <Pitch/>
            <CTA/>
        </div>
    )
}