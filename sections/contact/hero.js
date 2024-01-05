import Image from "next/image"
import Piano from "../../public/img/piano.jpg"
import LinkedIn from "../../public/icons/linkedin-big.svg"
import Link from "next/link";

function Hero() {

    return (
        <div>
            <div className="grid sm:grid-cols-2 xxl:pt-[18vh] sm:pt-[15vh] pt-[20vh] pb-[8vh]">
                <Image src={Piano} width={620} height={725} alt="image" className="rounded-3xl sm:block hidden" />
                <div className="font-rasfire mx-auto pt-[5vh]">
                    <div className="-space-y-10">
                        <div className="md:text-[14vh] lm:text-[12vh] xxs:text-[10vh] text-[7vh] uppercase md:-space-y-20 lm:-space-y-18 xxs:-space-y-14 -space-y-10 text-dirt-brown tracking-[2px] text-center">
                            <h1>Let's</h1>
                            <h1>Talk.</h1>
                        </div>
                        <div className="text-center text-almost-black space-y-5">
                            <div className="font-rasfire sm:text-[5.5vh] xs:text-[5vh] xxs:text-[4.5vh] text-[3.5vh] xs:-space-y-8 xxs:-space-y-8 -space-y-5">
                                <h2>i'd love to get</h2>
                                <h2>to know you!</h2>
                            </div>
                            <p className="md:w-[30vw] sm:w-[45vw] m-auto font-thasadith xs:text-[2vh] xxs:text-[1.6vh] text-[1.5vh] tracking-[0.5px]">
                                Whether it&apos;s to talk business or about the weather, you can feel free to reach out to me here:
                            </p>
                        </div>
                    </div>
                    <div className="mt-[8vh] flex gap-10 justify-center">
                        <Link href="https://www.linkedin.com/in/madeldelacruz/" target="_blank">
                            <div className="hover:text-white">
                                <LinkedIn />
                            </div>
                        </Link>
                        <ul className="font-thasadith my-auto">
                            <li className="cta-contact">
                                <span className="font-bold">E:</span>
                                <Link href="/">madel@fullstacksolutions.io</Link>
                            </li>
                            <li className="cta-contact">
                                <span className="font-bold">M:</span>
                                <Link href="/">(+64) 27-248-3824</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;