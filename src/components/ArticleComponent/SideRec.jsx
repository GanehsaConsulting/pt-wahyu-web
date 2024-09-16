import { formatDate } from "@/app/helper/formatDateTime";
import { DataArticles } from "../../../public/Database/Dummy";
import slugify from "@/app/helper/slugify";
import Link from "next/link";
import Image from "next/image";

export const SideRec = () => {
    const filteredData = [...DataArticles.new, ...DataArticles.trend].filter(article =>
        article.hot === true
    );
    return (
        <>
            <div className="flex flex-col h-full w-fit gap-5">
                <h1 className="font-semibold text-xl text-mainColor">
                    Rekomendasi Kami
                </h1>
                {filteredData.map((el, idx) => (
                    <Link
                        key={idx}
                        href={"/artikel/" + slugify(el.categories) + "/" + slugify(el.title)}
                        className="group"
                    >
                        <div
                            className="h-[25lvh] md:h-[22lvh] w-full flex gap-5"
                        >
                            <div className="min-w-[40%] md:min-w-[40%] md:h-full overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover group-hover:scale-125 duration-200"
                                    src={el.thumbnailImg}
                                    alt={el.title}
                                />
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-gray-500">
                                    {formatDate(el.date)} | {el.categories}
                                </p>
                                <h1 className="font-semibold md:text-xl truncate-last group-hover:text-secondaryColor">
                                    {el.title}
                                </h1>
                                <h2 className="truncate-last-2">
                                    {el.exerp}
                                </h2>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </>
    )
}