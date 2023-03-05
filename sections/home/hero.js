import Image from "next/image"
import HeroOne from "../../public/img/hero-img01.png";
import HeroTwo from "../../public/img/hero-img02.png";
import HeroThree from "../../public/img/hero-img03.png";

function Hero() {
    return (
        <div className="lm:py-[18vh] py-[15vh] md:py-0">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400 via-[#E0D7CE] md:bg-none">
                <div className="z-20 md:absolute text-center mx-auto -mt-[2.2vh] sm:h-screen w-screen grid grid-rows-3">
                    <div className="row-start-2 font-rasfire md:text-[14vh] lm:text-[12vh] xs:text-[10vh] xxs:text-[8vh] text-[5vh] uppercase lm:-space-y-20 xxs:-space-y-12 -space-y-6 md:mt-0 lm:mt-[2vh] mt-[4vh] ">
                        <h1 className="text-almost-black lg:ml-0 md:ml-[15vw]">Designer,</h1>
                        <h1 className="lm:-ml-[10vw] md:ml-[20vw] md:text-off-white text-[#655784]">Developer</h1>
                        <h1 className="lm:ml-[35vw] lm:mr-0 xxl:mr-[35vw] md:mr-[15vw] text-black ">Explorer.</h1>
                    </div>
                </div>
                <div className="md:relative">
                    <div className="md:grid hidden grid-cols-3 z-0 sm:relative ">
                        <Image src={HeroThree} width={520} height={480} alt="image" className="mt-[20vh]" />
                        <Image src={HeroTwo} width={510} height={775} alt="image" className="pt-[45vh] z-20 -ml-[8vw]" />
                        <div>
                            <Image src={HeroOne} width={425} height={555} alt="image" className="absolute ml-[5vw] lg:block hidden" />
                            <div className="border-[1px] border-black w-[50vw] lg:h-[110vh] md:h-[90vh] lm:h-[80vh] h-[70vh] lm:mt-[30vh] mt-[25vh] -ml-[20vw] rounded-xl relative"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;