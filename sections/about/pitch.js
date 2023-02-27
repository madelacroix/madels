import Image from "next/image";
import AboutTwo from "../../public/img/about02.png"

function Pitch() {
    return (
        <div className="bg-[#78736E] py-[15vh] px-[10vw]">
            <div>
                <div className="grid grid-cols-3">
                    <div className="bg-black text-off-white font-thasadith text-[1.8vh] pl-[5vw] pr-[10vw] py-[10vh] m-auto rounded-3xl">
                        <div className="w-[30vw] space-y-8 tracking-[0.5px]">
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
                    <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl ml-[12vw] mt-[25vh]"/>
                    <div className="text-off-white text-right space-y-2">
                        <h2 className="font-thasadith text-[2vh] tracking-[0.5px] opacity-80">but let&apos;s bring ourselves back down to earth.</h2>
                        <h1 className="font-rasfire uppercase text-[7vh] leading-none opacity-90">What&apos;s it Like to work with me?</h1>
                    </div>
                </div>
                <div className="flex place-content-between mt-[10vh]">
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