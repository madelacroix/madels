import Link from "next/link"

function Hero() {
    return (
        <div className="bg-neubrandz bg-cover bg-fixed bg-center pt-[30vh] pb-[10vh] px-[5vw]">
            <h1 className="text-[16vh] font-rasfire m-auto text-off-white text-center opacity-80">neubrandz</h1>
            <Link href="/404">
                <button className="font-thasadith uppercase bg-[#F5F5F5] bg-opacity-50 md:px-[3vw] sm:px-[5vw] xs:px-[8vw] xxs:px-[10vw] px-[20vw] py-[1.5vh] rounded-full text-off-white tracking-[0.8px] xs:text-[1.8vh] text-[1.6vh] lm:mt-0 sm:-mt-[8vh] xxs:-mt-[10vh] float-right">
                    <h2>View Site</h2>
                </button>
            </Link>
        </div>
    )
}

export default Hero;