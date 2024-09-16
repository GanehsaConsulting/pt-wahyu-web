import Image from "next/image"
import Breadcrumbs from "./CategoryComponents/Breadcrumbs"
import { formatDate } from "@/app/helper/formatDateTime"
import { SideRec } from "./SideRec"


export const ArticleDetail = ({ data }) => {
    return (
        <>
            <section className="md:mx-24 md:py-24 mx-5 py-16">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[60%] space-y-2">
                        <Breadcrumbs title={data.title} categories={data.categories} />
                        <div className="space-y-5">
                            <p className="px-3 py-[2px] text-sm border-l-2 border-secondaryColor text-secondaryColor font-medium w-fit bg-opacity-20">
                                {formatDate(data.date)} - {data.categories}
                            </p>
                            <h1 className="text-xl md:text-2xl font-bold">
                                {data.title}
                            </h1>
                            <Image
                                width={500}
                                height={500}
                                className="w-full max-h-[50lvh] md:max-h-[70lvh] object-cover"
                                src={data.thumbnailImg}
                                alt={data.title} />

                            <div className="space-y-5">
                                <div className="prose prose-xl" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[40%]">
                        <SideRec />
                    </div>
                </div>
            </section>
        </>
    )
}