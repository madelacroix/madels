import Link from "next/link";

function NotFoundPage() {
    return (
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400 via-[#E0D7CE] h-screen text-center grid grid-rows-3">
            <div className="row-start-2 text-dirt-brown">
                <h1 className="sm:text-[16vh] xs:text-[14vh] xxs:text-[10vh] text-[6vh] -tracking-[1px]">whoops!</h1>
                <h2 className="font-thasadith xs:font-bold xs:text-[2vh] text-[1.8vh] xs:-mt-[5vh] xxs:-mt-[3vh] -mt-[2vh] sm:-ml-[5vw] xxs:pb-[5vh] pb-[2vh] xs:tracking-[0.8px] tracking-[0px] xxs:px-0 px-[5vw]">either Mads hasn't finished this page or it doesn't exist.</h2>
                <Link href="/">
                    <button className="font-thasadith uppercase bg-[#F5F5F5] hover:bg-grey-brown hover:text-off-white md:px-[3vw] sm:px-[5vw] xs:px-[8vw] xxs:px-[10vw] px-[20vw] py-[2vh] rounded-full text-almost-black tracking-[0.8px] xs:text-[1.8vh] text-[1.6vh] lm:mt-0 sm:-mt-[8vh] xxs:-mt-[10vh]">
                        <h2>Go back home</h2>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;