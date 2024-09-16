"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DataArticles } from "../../../public/Database/Dummy"
import { FaArrowDownLong } from "react-icons/fa6";
import slugify from "@/app/helper/slugify";

export const BannerArticle = () => {
    const data = DataArticles.new
    const delay = 6000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
    }, [index]);
    return (
        <>
            <section>
                <div className="overflow-hidden w-screen h-screen relative">
                    <div
                        className="whitespace-nowrap ransition-transform ease-in-out duration-700 w-full h-full rounded-lg relative"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx}
                                className="inline-block w-full relative overflow-hidden h-full"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    key={idx}
                                    className="inline-block w-full h-full object-cover brightness-75"
                                    src={el.thumbnailImg}
                                    alt={el.title}
                                />
                                <div className="absolute inset-5 h-full w-full flex flex-col justify-center item-center">
                                    <div className="w-[70lvw] blur-[200px] h-32 bg-[#151515dd]"></div>
                                </div>
                                <div className="absolute inset-0 z-50">
                                    <div className="h-full flex flex-col justify-center md:mx-10 mx-5">
                                        <div className="text-wrap md:w-[50%] space-y-5">
                                            <span className="text-gray-300 tracking-wider text-sm bg-opacity-15 rounded-full">
                                                Rekomendasi Artikel Kami
                                                <div className="w-24 h-[2px] bg-gray-300 rounded-full"></div>
                                            </span>
                                            <h1 className="text-3xl md:text-5xl text-white font-semibold drop-shadow-lg truncate-last py-1">
                                                {el.title}
                                            </h1>
                                            <button
                                                className="px-4 py-2 rounded-full font-bold bg-white text-sm backdrop-blur-lg duration-300 hover:scale-95 hover:brightness-90"
                                            >
                                                <Link
                                                    href={"/artikel/" + slugify(el.categories) + "/" + slugify(el.title)}
                                                >
                                                    Baca Sekarang
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute right-5 bottom-5 md:right-14 md:bottom-10">
                                    <button className="text-white text-sm flex items-center animate-bounce gap-3">
                                        Jelajahi Sekarang
                                        <span className="p-2 rounded-full bg-white text-gray-800">
                                            <FaArrowDownLong />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}