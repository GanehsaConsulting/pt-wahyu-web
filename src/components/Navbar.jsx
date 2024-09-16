"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarItems } from "../../public/Database/System";
import { usePathname } from "next/navigation";
import Logo from '../app/icon.png';
import Image from "next/image";


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
                ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-xl" : "bg-transparent"}
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
                            className={` ${isScrolled ? '-z-50' : 'brightness-[200] contrast-200 grayscale'} ease-in-out duration-300`}
                             />
                        PT Wahyu Tatawasana
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`font-medium menu menu-horizontal px-1
                        ${isScrolled ? "!text-gray-800" : "text-white"}
                        ${isCategoryPage ? "!text-gray-800" : ""} 

                    `}>
                        {NavbarItems.main.map((el, idx) => (
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
                <div className="navbar-end">
                    <Link
                        href="kontak"
                        className={`font-bold px-5 py-2 bg-white bg-opacity-20 rounded-lg
                        ${isScrolled ? "!text-gray-800" : "text-white"} 
                        ${isCategoryPage ? "!text-gray-800" : ""} 

                        `}>
                        Kontak & FAQ
                    </Link>
                </div>
            </div>
        </>
    )
}