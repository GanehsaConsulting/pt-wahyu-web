import slugify from "@/app/helper/slugify"
import { DataArticles } from "../../../public/Database/Dummy"

export const Categories = () => {
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
            <section className="md:mx-24">
                <div className="carousel2 w-[100%] gap-3">
                    {uniqueCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`${idx === 0 ? "md:!ml-0 !ml-5" : ""} ${idx === uniqueCategories.length - 1 ? "md:mr-0 mr-5" : ""}`}
                        >
                            <a
                                className={`carousel-item px-4 py-2 bg-secondaryColor bg-opacity-15 rounded-full hover:bg-opacity-100 hover:text-white duration-300 truncate`}
                                href={"/artikel/" + slugify(category)}
                            >
                                <span className="capitalize font-medium">
                                    {category}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}