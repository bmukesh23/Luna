import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

const Navbar = () => {
    return (
        <header>
            <div className="px-10 py-[0.65rem] border-b border-slate-500 flex items-center">
                <Image
                    src={logo}
                    alt="logo"
                    className="w-6 h-6 lg:w-[20] lg:h-[20]"
                />
                <Link href='/' className="text-2xl font-bold">luna</Link>
            </div>
        </header>
    )
}
export default Navbar;