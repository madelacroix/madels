import Image from "next/image"
import Link from "next/link";
import IntroOne from "../../public/img/intro01.png"
import IntroTwo from "../../public/img/intro02.png"

function Intro() {
    return (
        <div className="h-[140vh] m-auto">
            <div className="flex justify-center">
                <div className="absolute xs:p-[5rem] xxs:p-[1rem] p-[0.5rem]">
                    <Image src={IntroOne} width={716} height={755} alt="image of madel" />
                    <div className="text-center py-[3vh] bg-almost-black rounded-b-xl -mt-[0.5vh]">
                        <h3 className="text-off-white sm:text-[2vh] xxs:text-[1.8vh] text-[1.5vh] font-thasadith xs:tracking-[1.5px] xxs:tracking-[0.8px]">welcome to my little corner of the world.</h3>
                        <Link href="/about">
                            <button className="bg-off-white font-rasfire py-[1vh] sm:px-[8vw] xs:px-[5vw] xxs:px-[8vw] px-[15vw] uppercase xxs:mt-[2vh] mt-[1vh] rounded-3xl sm:text-[1.8vh] text-[1.5vh] tracking-[1px]">
                                <h2>About Me</h2>
                            </button>
                        </Link>
                    </div>
                </div>
                <Image src={IntroTwo} width={365} height={515} alt="image of cat" className="relative ml-[35vw] -mt-[5vh] md:block hidden" />
            </div>
            <div className="flex justify-center">
                <div className="absolute font-rasfire md:-mt-[14vh] md:ml-[5vw] sm:mt-[38vh] xs:mt-[35vh] mt-[25vh] md:-space-y-20 sm:-space-y-16 xxs:-space-y-12 -space-y-5">
                    <h1 className="md:text-[12vh] sm:text-[7vh] xxs:text-[5vh] text-[3vh] text-off-white uppercase md:ml-[8vw] opacity-70">Hi, my name is</h1>
                    <h1 className="md:text-[15vh] sm:text-[12vh] xxs:text-[10vh] text-[5vh] md:text-black text-off-white md:ml-[30vw]">madel.</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;