"use client"
import { usePathname } from "next/navigation";
import { DataBanner } from "../../public/Database/System";
import Image from "next/image";
import { DataContact } from "../../public/Database/AboutUsData";

export const HomeBanner = () => {
    const pathname = usePathname();

    const bannerData = DataBanner[0]

    if (!bannerData) return null;

    const { bannerImage, mainText, desc } = bannerData.data;
    return (
        <>
            <section className="h-screen relative group overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    className="inline-block h-full w-full object-cover brightness-90"
                    src={bannerImage}
                    alt={mainText}
                />
                <div className="absolute bottom-0 md:w-[50%] md:h-full h-fit border-t md:border-t-0 md:border-r border-gray-200 border-opacity-30 flex items-end md:py-0 py-5 md:items-center bg-black bg-opacity-50 backdrop-blur-[10px] hover:backdrop-blur-0 origin-left duration-300 ease-in-out">
                    <div className="mx-5 space-y-5">
                        <h1 className="text-4xl md:text-5xl font-bold text-base">
                            {mainText}
                        </h1>
                        <div className="w-32 h-1 bg-white text-gray-400" />
                        <h2 className="text-gray-300">
                            {desc}
                        </h2>
                        <button
                            className="px-4 py-2 font-semibold bg-thirdColor rounded-[4px]">
                            <a
                                className="mt-10"
                                href={DataContact.contact.link}
                            >
                                Kontak
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}