import { dataWhyUs } from "../../public/Database/AboutUsData"
import { Tag } from "./Tag"

export const WhyUs = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 min-h-screen flex flex-col justify-center gap-5">
                <div>
                    <Tag text={'apasaja'} />
                    <p className="text-4xl mt-2 mb-10">
                        Keunggulan Kami
                    </p>
                </div>
                <div className="flex gap-3 md:flex-row flex-col">
                    {dataWhyUs.map((el, idx) => (
                        <div
                            key={idx}
                            className={`p-5 border border-thirdColor text-mainColor
                                ${idx === dataWhyUs.length - 1 ? "rounded-tr-[100px] bg-secondaryBase border-none md:w-[40%]" : "  md:w-[25%]"}
                                ${idx === dataWhyUs.length - 2 ? "bg-mainColor !text-base !border-mainColor" : "  md:w-[25%]"}
                                `}
                        >
                            <div className="md:text-6xl text-5xl mb-[20lvh]">
                                {el.icon}
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-semibold text-xl">
                                    {el.title}
                                </h1>
                                <h2>
                                    {el.description}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}