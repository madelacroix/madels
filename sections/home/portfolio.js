function Portfolio() {
    return(
        <div className="bg-black text-off-white font-rasfire pt-[20vh] pb-[15vh] mt-[30vh]">
            <div className="uppercase text-[8vh] text-center -space-y-8">
                <h1>Projects &</h1>
                <h1>Portfolio</h1>
            </div>
            <div className="my-[5vw] flex justify-evenly text-[4vh] tracking-[0.5px]">
                <div className="w-[40vw] h-[45vh] bg-vinorepo bg-cover text-center grid grid-rows-3 rounded-xl drop-shadow-lg">
                    <h2 className="row-start-2 my-auto">vinorepo</h2>
                </div>
                <div className="w-[40vw] h-[45vh] bg-neubrandz bg-cover bg-center text-center grid grid-rows-3 rounded-xl drop-shadow-lg">
                    <h2 className="row-start-2 my-auto">neubrandz</h2>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;