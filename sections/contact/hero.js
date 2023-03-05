import Image from "next/image"
import Link from "next/link";
import Piano from "../../public/img/piano.jpg"

function Hero() {
    return (
        <div>
            <div className="grid grid-cols-2 pt-[18vh]">
                <Image src={Piano} width={620} height={725} alt="image" className="rounded-3xl" />
                <div className="font-rasfire text-[14vh] uppercase m-auto -space-y-24 tracking-[2px] text-dirt-brown">
                    <h1>Let's</h1>
                    <h1>Talk.</h1>
                </div>
            </div>
            <div className="mx-[5vw] my-[8vh] p-[2.5em] border-[1px] border-[#A5998E] rounded-2xl">
                <div className="text-center text-almost-black">
                    <div className="font-rasfire text-[5.5vh] -space-y-10">
                        <h2 className="ml-[4vw]">i'd love to get</h2>
                        <h2 className="mr-[4vw]">to know you!</h2>
                    </div>
                    <p className="w-[35vw] m-auto font-thasadith text-[1.8vh] tracking-[0.5px]">
                        Lorem ipsum dolor sit amet consectetur. Egestas leo vitae ullamcorper blandit id. Habitant sed nibh penatibus ipsum nulla ut purus pulvinar nunc.
                    </p>
                </div>
                <div className="pt-[5vh] pb-[8vh]">
                    <div className="flex justify-between pb-[3vh]">
                        <input type="text" placeholder="Name" className="contact-textbox"/>
                        <input type="text" placeholder="Email" className="contact-textbox"/>
                    </div>
                    <textarea type="text" placeholder="Message" className="w-full p-[1em] font-thasadith tracking-[1px] rounded-2xl h-[26vh]"/>
                    <Link href="/">
                        <button className="bg-dusty font-thasadith uppercase tracking-[2px] px-[3vw] py-[1.5vh] text-right rounded-xl text-off-white text-[2vh] mt-[2vh] float-right">
                            <h2>Submit</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;