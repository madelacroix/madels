import Instagram from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Link from "next/link";

function CTA() {
    return (
        <div className="relative">
            <div className="h-[80vh] flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="font-rasfire text-[16vh] uppercase text-dirt-brown">Let's Talk.</h1>
                    <button className="font-thasadith uppercase bg-[#F5F5F5] px-[3vw] py-[1.5vh] rounded-full text-almost-black tracking-[0.5px] text-[1.8vh]">
                        <h2>Get in Touch</h2>
                    </button>
                </div>
            </div>
            <div className="flex left-0 bottom-0 absolute font-thasadith gap-6">
                <div className="flex pl-[2vw] gap-3">
                    <Instagram />
                    <LinkedIn />
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li className="cta-contact">
                            <span className="font-bold">E:</span>
                            <Link href="/">madel@fullstacksolutions.io</Link>
                        </li>
                        <li className="cta-contact">
                            <span className="font-bold">M:</span>
                            <Link href="/">(+64) 27-248-3824</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="text-[1.8vh] mb-[1rem] font-thasadith flex justify-center gap-1 uppercase tracking-[0.8px]">
                Made by
                <span className="font-bold">Mads.</span>
            </h2>
        </div>
    )
}

export default CTA;