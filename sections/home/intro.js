import Image from "next/image"

function Intro() {
    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <div className="absolute">
                    <Image src="/img/intro01.png" width={716} height={755} />
                    <div className="text-center py-[3vh] bg-almost-black rounded-b-xl -mt-[0.5vh]">
                        <h3 className="text-off-white text-[2vh] font-thasadith tracking-[1.5px]">welcome to my little corner of the world.</h3>
                        <button className="bg-off-white font-rasfire py-[1vh] px-[3vw] uppercase mt-[2vh] rounded-3xl text-[1.8vh] tracking-[1px]">
                            <h2>About Me</h2>
                        </button>
                    </div>
                </div>
                <Image src="/img/intro02.png" width={365} height={515} className="relative ml-[35vw] -mt-[5vh]" />
            </div>
            <div className="flex justify-center">
                <div className="absolute font-rasfire -mt-[14vh] ml-[5vw] -space-y-20">
                    <h1 className="text-[12vh] text-off-white uppercase ml-[8vw]">Hi, my name is</h1>
                    <h1 className="text-[15vh] text-black ml-[30vw]">madel.</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;