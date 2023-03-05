import Image from "next/image"
import Link from "next/link";
import Piano from "../../public/img/piano.jpg"

function Hero() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 xxl:pt-[18vh] sm:pt-[15vh] pt-[20vh]">
                <Image src={Piano} width={620} height={725} alt="image" className="rounded-3xl sm:block hidden"/>
                <div className="font-rasfire md:text-[14vh] lm:text-[12vh] xxs:text-[10vh] text-[7vh] uppercase m-auto md:-space-y-20 lm:-space-y-18 xxs:-space-y-14 -space-y-10 tracking-[2px] text-dirt-brown">
                    <h1>Let's</h1>
                    <h1>Talk.</h1>
                </div>
            </div>
            <div className="mx-[5vw] my-[8vh] xs:p-[2.5em] py-[2.5em] px-[5vw] border-[1px] border-[#A5998E] xxs:rounded-2xl rounded-xl">
                <div className="text-center text-almost-black">
                    <div className="font-rasfire sm:text-[5.5vh] xs:text-[5vh] xxs:text-[4.5vh] text-[3.5vh] xs:-space-y-8 xxs:-space-y-8 -space-y-5">
                        <h2 className="xxs:ml-[4vw]">i'd love to get</h2>
                        <h2 className="lg:mr-[4vw] md:mr-[6vw] lm:mr-[8vw] sm:mr-[10vw] xxs:mr-[15vw]">to know you!</h2>
                    </div>
                    <p className="md:w-[35vw] sm:w-[45vw] m-auto font-thasadith xs:text-[1.8vh] xxs:text-[1.6vh] text-[1.5vh] tracking-[0.5px]">
                        Lorem ipsum dolor sit amet consectetur. Egestas leo vitae ullamcorper blandit id. Habitant sed nibh penatibus ipsum nulla ut purus pulvinar nunc.
                    </p>
                </div>
                <div className="sm:pt-[5vh] pt-[4vh] pb-[8vh]">
                    <div className="lm:flex justify-between pb-[3vh] lm:space-y-0 space-y-5">
                        <input type="text" placeholder="Name" className="contact-textbox"/>
                        <input type="text" placeholder="Email" className="contact-textbox"/>
                    </div>
                    <textarea type="text" placeholder="Message" className="w-full p-[1em] font-thasadith tracking-[1px] xs:rounded-2xl rounded-md h-[26vh] xs:text-[2vh] xxs:text-[1.8vh] text-[1.6vh]"/>
                    <Link href="/">
                        <button className="bg-dusty font-thasadith uppercase tracking-[2px] lm:px-[3vw] xs:px-[8vw] px-[10vw] py-[1.5vh] max-xxs:w-full xxs:text-right text-center xs:rounded-xl rounded-md text-off-white xs:text-[2vh] text-[1.8vh] mt-[2vh] float-right">
                            <h2>Submit</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;