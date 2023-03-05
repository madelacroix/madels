import Image from "next/image";
import AboutOne from "../../public/img/about01.png"

function Hero() {
    return (
        <div className="flex max-md:flex-col-reverse xl:pt-[30vh] pt-[20vh] pb-[10vh] xl:px-[8vw] xxs:px-[5vw] px-[2vw] space-x-[5vw]">
            <div className="xs:space-y-10 space-y-8 m-auto md:px-0 px-[5vw] md:py-0 xs:py-[5vh] py-[2vh]">
                <div className="xl:-space-y-10 xs:-space-y-8 -space-y-5">
                    <h1 className="font-rasfire xs:text-[8vh] xxs:text-[7vh] text-[5vh] uppercase text-almost-black">It's Me, Hi</h1>
                    <h2 className="font-thasadith xs:text-[2vh] xxs:text-[1.8vh] text-[1.6vh] xxs:tracking-[0.5px] tracking-[0.2px]">welcome to my little corner of the world. make yourself at home.</h2>
                </div>
                <div className="font-thasadith xs:text-[2vh] xxs:text-[1.8vh] text-[1.5vh] tracking-[0.5px] md:w-[40vw] space-y-5">
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
            <div>
                <Image src={AboutOne} width={585} height={535} alt="image" className="rounded-3xl pr-[2vw]"/>
            </div>
        </div>
    )
}

export default Hero;