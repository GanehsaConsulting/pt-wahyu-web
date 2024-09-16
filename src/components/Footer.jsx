import Image from "next/image"
import Logo from '../app/icon.png';
import { DataContact } from "../../public/Database/AboutUsData";
import Link from "next/link";
import { DataArticles } from "../../public/Database/Dummy";
import slugify from "@/app/helper/slugify";

export const Footer = () => {
    const data = [...DataArticles.new, ...DataArticles.trend];

    // Menggunakan Set untuk menyimpan kategori unik
    const uniqueCategories = [];

    data.forEach(el => {
        if (!uniqueCategories.includes(el.categories)) {
            uniqueCategories.push(el.categories);
        }
    });
    return (
        <>
            <footer className="flex flex-col justify-between gap-10 p-10">
                <div className="w-full h-[1px] bg-mainColor"></div>
                <div className="flex md:flex-row flex-col gap-10 justify-between">
                    <nav className="flex flex-col">
                        <h6 className="footer-title text-mainColor">Layanan</h6>
                        <div className="text-sm flex flex-col gap-4">
                            <Link
                                href={'/produk'}
                                className="link link-hover">
                                Produk
                            </Link>
                            <Link
                                href={'/artikel'}
                                className="link link-hover">
                                Artikel
                            </Link>
                            <Link
                                href={'/kontak'}
                                className="link link-hover">
                                Marketing
                            </Link>
                        </div>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title text-mainColor">Company</h6>
                        <div className="text-sm flex flex-col gap-4">
                            <Link
                                href={'/tentang-kami'}
                                className="link link-hover"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href={'/kontak'}
                                className="link link-hover"
                            >
                                Kontak
                            </Link>
                            <Link
                                href={'/kontak'}
                                className="link link-hover"
                            >
                                FAQ
                            </Link>
                        </div>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title text-mainColor">Kategori</h6>
                        <div className="text-sm flex flex-col gap-4">
                            {uniqueCategories.slice(0, 3).map((category, idx) => (
                                <Link
                                    key={idx}
                                    href={"/artikel/" + slugify(category)}
                                    className="link link-hover"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div className="md:w-[30%] order-first md:order-none">
                        <div>
                            <p className="text-3xl font-light uppercase mb-5 md:mb-10 text-secondaryColor">
                                PT Wahyu Tatawasana
                            </p>
                            <p className="text-sm">
                                {DataContact.addressMain.location}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-base"></div>
                <footer className="footer  text-mainColor items-center justify-center md:justify-normal px-4">
                    <aside className="grid-flow-col items-center">
                        <Image
                            width={30}
                            height={30}
                            src={Logo}
                            className=""
                            alt="" />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                </footer>
            </footer>
        </>
    )
}