"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarItems } from "../../public/Database/System";
import { usePathname } from "next/navigation";
import Logo from '../app/icon.png';
import Image from "next/image";
import { MegaMenuNavbar } from "./MegaMenuNavbar";
import { IoMdMenu } from "react-icons/io";
import { MobileDrawer } from "./MobileDrawer";


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const path = usePathname()
    const isCategoryPage = path !== '/artikel' && path.split('/artikel').length > 1;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`fixed navbar duration-300 ease-in-out transition-all z-[100]
                ${isScrolled && isExpanded !== true  ? "bg-white bg-opacity-50 backdrop-blur-xl" : "bg-transparent"}
                `}>
                <div className="navbar-start">
                    <a className={`btn btn-ghost text-xl
                        ${isScrolled ? "!text-gray-800" : "text-white"} 
                        ${isCategoryPage ? "!text-gray-800" : ""} 
                        `}>
                        <Image
                            width={40}
                            height={40}
                            src={Logo}
                            alt="pt wahyu tatawasana logo"
                            className={` ${isScrolled ? '' : 'brightness-[200] contrast-200 grayscale'} ease-in-out duration-300`}
                        />
                        <span className="md:block hidden">
                            PT Wahyu Tatawasana
                        </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`font-medium menu menu-horizontal px-1
                        ${isScrolled ? "!text-gray-800" : "text-white"}
                        ${isCategoryPage ? "!text-gray-800" : ""} 

                    `}>
                        {NavbarItems.main.slice(0, 4).map((el, idx) => (
                            <>
                                <li key={idx}>
                                    <Link
                                        href={el.href}
                                    >
                                        {el.label}
                                    </Link>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Link
                        href="kontak"
                        className={`font-bold px-5 py-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-md
                        ${isScrolled ? "!text-gray-800" : "text-white"} 
                        ${isCategoryPage ? "!text-gray-800" : ""} 

                        `}>
                        <span className="md:block hidden">
                            Kontak & FAQ
                        </span>
                        <span className="block md:hidden">
                            Kontak
                        </span>
                    </Link>
                    <MegaMenuNavbar
                        icon={<IoMdMenu className='text-xl' />}
                        iconClassName={`p-[9px] rounded-lg text-white bg-gray-200 bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor  ${isScrolled ? "!text-gray-800" : "text-white"} ${isCategoryPage ? "!text-gray-800" : ""}`}
                        arrowVisibility={'hidden'}
                        children={
                            <MobileDrawer />
                        }
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}
                    />
                </div>
            </div>
        </>
    )
}