import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react"

function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="md:px-[8vw] pt-[8vh] pb-[15vh] grid grid-cols-6 text-base bg-gradient-to-b md:from-grey-brown from-[#E0D7CE] md:text-off-white text-almost-black z-50 absolute w-screen">
            <h1 className="font-rasfire text-[3vh] tracking-[0.8px] font-medium pl-[8vw] lg:pl-[2vw]">
                <Link href="/">
                    madel.
                </Link>
            </h1>
            <div className="font-thasadith uppercase md:flex md:gap-x-28 hidden text-[1.6vh] tracking-[1.5px]">
                <h2 className={
                    router.pathname == "/about"
                        ? 'active'
                        : 'inactive'
                }>
                    <Link href="/">
                        about
                    </Link>
                </h2>
                <h2 className={
                    router.pathname == "/projects"
                        ? 'active'
                        : 'inactive'
                }>
                    <Link href="/">
                        projects
                    </Link>
                </h2>
                <h2 className={
                    router.pathname == "/contact"
                        ? 'active'
                        : 'inactive'
                }>
                    <Link href="/">
                        contact
                    </Link>
                </h2>
            </div>
            <div className="md:hidden flex justify-end -mt-[3vh] col-start-6 pr-[5vw]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="invisible">____</span>
                    {!isOpen ? (
                        <Bars3Icon className="text-almost-black" />
                    ) : (
                        <XMarkIcon className="text-almost-black" />
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
                    <div id="mobile-menu" className="md:hidden pt-[2rem] font-dosis text-[2.2vh] tracking-[1px]">
                        <div ref={ref} className="flex flex-col">
                            <Link
                                href="/"
                                className="nav-text"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="nav-text"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="nav-text"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

export default Header;