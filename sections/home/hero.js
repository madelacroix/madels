import Image from "next/image"
import Header from "@/components/layout/header";

function Hero() {
    return (
        <div>
            <div className="z-20 absolute text-center mx-auto -mt-[2.2vh] h-screen w-screen grid grid-rows-3">
                <div className="row-start-2 font-rasfire text-[14vh] uppercase -space-y-20">
                    <h1 className="text-almost-black">Designer,</h1>
                    <h1 className="-ml-[10vw] text-off-white">Developer</h1>
                    <h1 className="ml-[35vw]">Explorer.</h1>
                </div>
            </div>
            <div className="relative">
                <Header />
                <div className="grid grid-cols-3 z-0 relative">
                    <Image src="/img/hero-img03.png" width={520} height={480} className="mt-[20vh]" />
                    <Image src="/img/hero-img02.png" width={510} height={775} className="pt-[45vh] z-20 -ml-[8vw]" />
                    <div className="">
                        <Image src="/img/hero-img01.png" width={425} height={555} className="absolute ml-[5vw]" />
                        <div className="border-[1px] border-black w-[50vw] h-[110vh] mt-[30vh] -ml-[20vw] rounded-xl relative"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;