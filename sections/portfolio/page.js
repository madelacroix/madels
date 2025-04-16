import ImageOne from "@/public/img/p1.png"
import ImageTwo from "@/public/img/p2.png"
import ImageThree from "@/public/img/p3.png"
import ImageFour from "@/public/img/p4.png"
import ImageFive from "@/public/img/p5.png"
import ImageSix from "@/public/img/p6.png"
import Image from "next/image"

function Page() {
    return(
        <div className="pt-[20vh]">
            <div className="font-thasadith text-[2vh] text-off-white bg-almost-black bg-opacity-50 w-full py-10">
                <p className="px-20">
                    Here&apos;s a curated selection of pages and posts I&apos;ve designed—some for real-world brands, others as creative concepts. I hope you enjoy exploring them.
                </p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 px-20">
                <div>
                    <Image src={ImageOne} alt="image" className="pt-[5vh]" />
                    <Image src={ImageFour} alt="image" className="pt-[5vh]" />
                </div>
                <div>
                    <Image src={ImageTwo} alt="image" className="pt-[5vh]" />
                    <Image src={ImageFive} alt="image" className="pt-[5vh]" />
                </div>
                <div>
                    <Image src={ImageThree} alt="image" className="pt-[5vh]" />
                    <Image src={ImageSix} alt="image" className="pt-[5vh] max-md:hidden" />
                </div>
                <div className="md:hidden">
                    <Image src={ImageSix} alt="image" className="pt-[5vh]" />
                </div>
            </div>            
        </div>
    )
}

export default Page