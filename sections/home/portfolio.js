function Portfolio() {
    return(
        <div className="bg-black text-off-white font-rasfire lg:pt-[20vh] pt-[12vh] lg:pb-[15vh] sm:pb-[10vh] pb-[8vh] xxs:mt-[10vh] mt-[30vh]">
            <div className="uppercase xs:text-[8vh] xxs:text-[6vh] text-[4.5vh] text-center xxs:-space-y-8 -space-y-5">
                <h1>Projects &</h1>
                <h1>Portfolio</h1>
            </div>
            <div className="my-[5vw] sm:flex sm:justify-evenly grid grid-cols-1 text-[4vh] tracking-[0.5px]">
                <div className="portfolio-item bg-vinorepo bg-cover">
                    <h2 className="row-start-2 my-auto">vinorepo</h2>
                </div>
                <div className="portfolio-item bg-neubrandz bg-cover bg-center">
                    <h2 className="row-start-2 my-auto">neubrandz</h2>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;