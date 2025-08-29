import Link from "next/link"

function Hero() {
    return (
        <div className="bg-vinorepo bg-cover bg-fixed bg-center pt-[30vh] pb-[10vh] px-[5vw]">
            <h1 className="text-[16vh] font-rasfire m-auto text-off-white text-center opacity-80">vinorepo</h1>
            <Link href="https://www.vinorepo.com" target="_blank">
                <button className="white-button float-right">
                    <h2>View Site</h2>
                </button>
            </Link>
        </div>
    )
}

export default Hero;