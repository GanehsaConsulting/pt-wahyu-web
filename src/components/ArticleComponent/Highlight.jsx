import { formatDate, formatDateTime } from "@/app/helper/formatDateTime"
import { DataArticles } from "../../../public/Database/Dummy"
import Link from "next/link";
import slugify from "@/app/helper/slugify";
import Image from "next/image";

export const Highlight = () => {
    const articleMain = [...DataArticles.new, ...DataArticles.trend]
        .filter(article => article.hot === true)
        .slice(0, 1); // Mengambil hanya 3 item pertama

    const article = [...DataArticles.new, ...DataArticles.trend]
        .filter(article => article.hot === true)
        .slice(1, 4); // Mengambil hanya 3 item pertama

    return (
        <>
            <section className="md:mx-24 md:my-24 mx-5 my-10">
                <p className="font-semibold text-2xl md:text-4xl mb-10">
                    Artikel Populer
                </p>
                <div className="flex md:flex-row flex-col gap-10 md:gap-5">
                    <div className="md:w-[50%]">
                        <Link
                            href={"/" + slugify(articleMain[0].categories) + "/" + slugify(articleMain[0].title)}
                            className="space-y-3 group"
                        >
                            <div className="w-full h-[50lvh] overflow-hidden">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-125 duration-200"
                                    src={articleMain[0].thumbnailImg}
                                    alt=""
                                />
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-400">
                                    {formatDate(articleMain[0].date)}
                                </p>
                                <h1 className="font-semibold truncate-last text-2xl group-hover:text-red-900">
                                    {articleMain[0].title}
                                </h1>
                                <h2 className="truncate-last-2">
                                    {articleMain[0].exerp}
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-[50%]">
                        <div className="flex flex-col h-full gap-5">
                            {article.map((el, idx) => (
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
                                            <h1 className="font-semibold md:text-xl truncate-last group-hover:text-red-900">
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
                    </div>
                </div>

            </section>
        </>
    )
}