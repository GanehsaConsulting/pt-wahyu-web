
import Image from "next/image";
import { FaMapSigns } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { Tag } from "../Tag";
import { DataAreaKerja } from "../../../public/Database/AboutUsData";
export const MarketLocation = () => {
    const data = DataAreaKerja
    return (
        <>
            <section className="md:mx-0 space-y-3 pt-16 md:space-y-5 py-5">
                <div className="md:mx-24 mx-5">
                    <Tag text={'Titik'} />
                    <p className="text-4xl mt-2 mb-5">
                        Area Kerja Kami
                    </p>
                </div>
                <div className="carousel2 w-[100%] gap-5">
                    {data.map((el, idx) => (
                        <div className={`${idx === 0 ? "md:!ml-24 !ml-5" : ""} ${idx === data.length - 1 ? "md:mr-24 mr-5" : ""} flex flex-col gap-0`}>
                            <div id={el.id} key={idx} className={`w-[80lvw] md:w-[30lvw] carousel-item relative grow h-auto`}>
                                <Image
                                    width={500}
                                    height={500}
                                    className="grow w-full h-[80lvh] object-cover"
                                    src={el.img}
                                    alt={el.lokasi} />
                                {/* <span className="absolute top-0 w-full rounded-t- h-[50%] bg-gradient-to-b from-[#01010162] via-transparent to-transparent"></span> */}
                                <div className="absolute top-0 bg-base bg-opacity-80 backdrop-blur-md p-5 flex justify-between w-full items-center">
                                    <h2 className="font-semibold flex items-center gap-2 tracking-wider text-2xl capitalize">
                                        {el.lokasi}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}