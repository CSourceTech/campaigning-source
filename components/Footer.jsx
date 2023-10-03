import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-blue-100 text-center rounded-md text-black">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-12 pt-2">
                <Link href='/'>
                    <Image src={logo} alt="logo" width={200} height={200} />
                </Link>
                <div className="mt-4 md:mt-0">
                    <div className="text-center flex flex-col md:flex-row gap-3 justify-evenly mb-4 md:mb-0">
                        <div className="hover:underline"><Link href="/">Home</Link></div>
                        <div className="hover:underline"><Link href="/contact">Influencers</Link></div>
                        <div className="hover:underline"><Link href="/about">About Us</Link></div>
                        <div className="hover:underline"><Link href="/contact">Contact</Link></div>
                        <div className="hover:underline"><Link href="https://myfameguru.com/">Social Media Boost</Link></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end">
                <div className="flex items-center text-2xl gap-4 mt-2 px-2">
                    <Link href="https://github.com/prnvtripathi/campaigning-source" className="transition-all ease-in-out duration-200 hover:text-gray-500 hover:scale-125"><FaGithub /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaTwitter /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaFacebook /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-purple-500 hover:scale-125"><FaInstagram /></Link>
                </div>
            </div>
            <p className="py-4 select-none">© {year} Campaigning Source</p>
        </footer>
    )
}

export default Footer;
