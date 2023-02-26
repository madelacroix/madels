import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();

    return(
        <nav className="px-[8vw] pt-[8vh] pb-[15vh] grid grid-cols-6 text-base bg-gradient-to-b from-grey-brown text-off-white z-10 absolute">
            <h1 className="font-rasfire text-[3vh] tracking-[0.8px] font-medium">
                <Link href='/'>
                    madel.
                </Link>
            </h1>
            <div className="font-thasadith uppercase flex gap-x-28 text-[1.6vh] tracking-[1.5px]">
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
        </nav>
    )
}

export default Header;