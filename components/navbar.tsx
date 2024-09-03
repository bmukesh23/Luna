import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import LinksDropDown from "@/components/linksDropDownComponent";

const Navbar = () => {
    return (
        <nav>
            <div className="px-4 md:px-10 py-2 md:py-[0.65rem] border-b border-slate-500 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-6 h-6 lg:w-[20] lg:h-[20]"
                    />
                    <Link href='/' className="text-2xl font-bold">luna</Link>
                </div>

                <LinksDropDown />
            </div>
        </nav>
    )
}
export default Navbar;