import Instagram from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Link from "next/link";

function CTATwo() {
    return (
        <div className="relative">
            <div className="sm:flex hidden left-0 bottom-0 absolute font-thasadith gap-6">
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
            <h2 className="sm:text-[1.8vh] text-[1.6vh] mb-[1rem] md:mr-0 mr-[2vw] font-thasadith flex md:justify-center justify-end gap-1 uppercase tracking-[0.8px]">
                Made by
                <span className="font-bold">Mads.</span>
            </h2>
        </div>
    )
}

export default CTATwo;