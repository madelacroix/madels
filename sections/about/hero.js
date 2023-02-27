import Image from "next/image";
import AboutOne from "../../public/img/about01.png"

function Hero() {
    return (
        <div className="flex pt-[30vh] pb-[10vh] px-[8vw] space-x-[5vw]">
            <div className="space-y-10 m-auto">
                <div className="-space-y-10">
                    <h1 className="font-rasfire text-[8vh] uppercase text-almost-black">It's Me, Hi</h1>
                    <h2 className="font-thasadith text-[2vh] tracking-[0.5px]">welcome to my little corner of the world. make yourself at home.</h2>
                </div>
                <div className="font-thasadith text-[2vh] tracking-[0.5px] w-[40vw] space-y-5">
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
                <Image src={AboutOne} width={485} height={535} alt="image" className="rounded-3xl"/>
            </div>
        </div>
    )
}

export default Hero;