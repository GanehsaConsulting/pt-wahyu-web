import { formatDate } from "@/app/helper/formatDateTime"
import slugify from "@/app/helper/slugify"
import { Pagination } from "./Pagination";

export const ArticleList = ({ data, label, visibleCount, setVisibleCount, isSearching }) => {
    // Determine the articles to display
    const dataDisplayed = data.slice(0, visibleCount);

    // Handle load more functionality
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Increment count by 6
    };

    // Check if articles are empty
    const isArticlesEmpty = data.length === 0;

    return (
        <>
            <section className="">
                <div className="md:mx-24 mx-5">
                    {!isSearching && (
                        <p className="font-semibold text-2xl md:text-4xl mb-10 capitalize">
                            {label}
                        </p>
                    )}
                    <div className="md:grid md:grid-cols-3 flex flex-col gap-5 md:gap-10">
                        {dataDisplayed.map((el, idx) => (
                            <a
                                key={idx}
                                href={"/artikel/" + el.categories + "/" + slugify(el.title)}
                                className="group mb-5"
                            >
                                <div className="grow space-y-5">
                                    <div className="h-[40lvh] w-full overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover duration-200 group-hover:scale-125"
                                            src={el.thumbnailImg}
                                            alt={el.title}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-sm text-gray-500 capitalize">
                                            {formatDate(el.date)} | {el.categories}
                                        </p>
                                        <h1 className="font-semibold text-xl truncate-last group-hover:text-secondaryColor">
                                            {el.title}
                                        </h1>
                                        <h2 className="truncate-last-2 text-gray-500">
                                            {el.exerp}
                                        </h2>
                                    </div>

                                </div>
                            </a>
                        ))}
                    </div>
                    {isArticlesEmpty ? (
                        <div className="py-52 flex justify-center gap-3 items-center text-center mt-10 text-gray-600">
                            <p>No articles found. Please try a different search term.</p>
                        </div>
                    ) : null}
                </div>
                <div className="w-full flex justify-center mt-10 mb-10">
                    <Pagination onclick={handleLoadMore} />
                </div>
            </section>
        </>
    )
}