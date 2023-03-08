import Instagram from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Github from "../../public/icons/github.svg";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react";
import { Transition } from "@headlessui/react";

function CTA() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <div className="lm:h-[80vh] h-[70vh] flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="font-rasfire lm:text-[16vh] sm:text-[12vh] xs:text-[10vh] xxs:text-[8vh] text-[5vh] uppercase text-dirt-brown">Let's Talk.</h1>
                    <Link href="/contact">
                        <button className="font-thasadith uppercase bg-[#F5F5F5] md:px-[3vw] sm:px-[5vw] xs:px-[8vw] xxs:px-[10vw] px-[20vw] py-[1.5vh] rounded-full text-almost-black tracking-[0.5px] xs:text-[1.8vh] text-[1.6vh] lm:mt-0 sm:-mt-[8vh] xxs:-mt-[10vh]">
                            <h2>Get in Touch</h2>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex sm:hidden items-center left-0 bottom-0 absolute">
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        aria-controls="contact-details"
                    >
                        <span className="invisible">___</span>
                        {!isOpen ? (
                            <ChevronRightIcon />
                        ) : (
                            <XMarkIcon />
                        )}
                    </button>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div id="contact-details" className="font-thasadith bg-[#E0D7CE]">
                            <div className="xs:flex xs:gap-4 xs:space-y-0 space-y-3 mt-[2.2vh]">
                                <div className="flex pl-[2vw] gap-3">
                                    <Link href="www.vinorepo.com">
                                        <Instagram />
                                    </Link>
                                    <LinkedIn />
                                </div>
                                <div className="xs:pl-0 pl-[2vw]">
                                    <ul className="xs:flex xs:gap-4">
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
                        </div>
                    )}
                </Transition>
            </div>
            <div className="sm:flex hidden left-0 bottom-0 absolute font-thasadith gap-6">
                <div className="flex pl-[2vw] gap-3">
                    <Link href="https://www.instagram.com/mads.git/" target="_blank">
                        <Instagram />
                    </Link>
                    <Link href="https://www.linkedin.com/in/madeldelacruz/" target="_blank">
                        <LinkedIn />
                    </Link>
                    <Link href="https://github.com/madelacroix" target="_blank">
                        <Github />
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li className="cta-contact">
                            <span className="font-bold">E:</span>
                            <a href="mailto:madel@fullstacksolutions.io">
                                madel@fullstacksolutions.io
                            </a>
                        </li>
                        <li className="cta-contact">
                            <span className="font-bold">M:</span>
                            <Link href="tel:+0064-27-248-3824">(+64) 27-248-3824</Link>
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

export default CTA;