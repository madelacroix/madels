import Image from "next/image";
import AboutTwo from "../../public/img/about02.png"

function Pitch() {
    return (
        <div className="bg-[#78736E] xs:py-[15vh] py-[10vh] xl:px-[10vw] px-[6.5vw]">
            <div>
                <div className="md:grid md:grid-cols-3 flex flex-col-reverse">
                    <div className="m-auto md:block lm:flex">
                        <div className="bg-black text-off-white font-thasadith xs:text-[1.8vh] text-[1.6vh] sm:pl-[5vw] sm:pr-[10vw] px-[8vw] lg:py-[10vh] sm:py-[8vh] xxs:py-[6vh] py-[5vh] rounded-3xl md:mb-0 sm:mb-[10vh] xs:mb-[5vh] mb-[4vh]">
                            <div className="md:w-[30vw] lm:w-[50vw] xs:space-y-8 space-y-5 tracking-[0.5px]">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. In non in tortor commodo commodo imperdiet mi sit. Molestie orci egestas egestas felis tellus diam lectus. Integer dictumst quam nec nisl ornare mi.
                                </p>
                                <p>
                                    A elit diam molestie purus in sodales lacus turpis nibh. Dictum velit consequat dictum rhoncus dictumst sed tristique. Sed id enim porttitor interdum vivamus imperdiet purus.
                                </p>
                                <p>
                                    Sit urna interdum fringilla tempor eget tellus. Orci lorem suspendisse nulla nulla lobortis ultrices urna a ac. Eu pulvinar laoreet odio lectus tellus porttitor urna habitasse. Sed est senectus est turpis. Faucibus tellus porta enim massa convallis.
                                </p>
                            </div>
                        </div>
                        <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl lm:-ml-[8vw] mt-[15vh] md:hidden max-lm:hidden"/>
                    </div>
                    <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl ml-[12vw] mt-[25vh] md:block hidden" />
                    <div className="text-off-white md:text-right md:pr-0 sm:pr-[25vw] xs:pr-[15vw] md:pb-0 pb-[5vh] space-y-2 relative">
                        <h2 className="font-thasadith xxs:text-[2vh] text-[1.8vh] tracking-[0.5px] opacity-80">but let&apos;s bring ourselves back down to earth.</h2>
                        <h1 className="font-rasfire uppercase xl:text-[7vh] xs:text-[6vh] xxs:text-[5.5vh] text-[4.5vh] leading-none opacity-90">What&apos;s it Like to work with me?</h1>
                    </div>
                </div>
                <div className="sm:flex sm:place-content-between lm:mt-[10vh] sm:space-y-0 space-y-8 sm:px-0 px-[2vw]">
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">01</h1>
                        <p className="about-pitch-p">
                            Sit urna interdum fringilla tempor eget tellus. Orci lorem suspendisse nulla nulla lobortis ultrices urna a ac. Eu pulvinar laoreet odio lectus tellus porttitor urna habitasse. Sed est senectus est turpis. Faucibus tellus porta enim massa convallis.
                        </p>
                    </div>
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">02</h1>
                        <p className="about-pitch-p">
                            A elit diam molestie purus in sodales lacus turpis nibh. Dictum velit consequat dictum rhoncus dictumst sed tristique. Sed id enim porttitor interdum vivamus imperdiet purus.
                        </p>
                    </div>
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">03</h1>
                        <p className="about-pitch-p">
                            Lorem ipsum dolor sit amet consectetur. In non in tortor commodo commodo imperdiet mi sit. Molestie orci egestas egestas felis tellus diam lectus. Integer dictumst quam nec nisl ornare mi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pitch;