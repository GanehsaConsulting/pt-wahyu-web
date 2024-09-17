import { DataProducts } from "../../../public/Database/AboutUsData"
import { Tag } from "../Tag"

export const Products = () => {
    const data = [...DataProducts.udang.lists, ...DataProducts.kepiting.lists, ...DataProducts.ikan.lists]
    return (
        <>
            <section className="bg-thirdColor py-20">
                <div>
                    <div className="flex md:flex-row flex-col md:items-center justify-between md:mx-24 mx-5">
                        <div>
                            <Tag text={'jelajahi'} />
                            <p className="text-4xl mt-2 mb-5 md:mb-10">
                                Seluruh Produk Laut Kami
                            </p>
                        </div>
                        <a
                            href="/produk"
                            className="px-4 py-2 border border-mainColor w-fit text-mainColor rounded-full hover:bg-mainColor hover:text-base font-semibold hover:brightness-90 duration-300 text-xs md:text-sm"
                        >
                            Cek Semua
                        </a>
                    </div>
                    <div className="marquee noBar">
                        <div className="flex gap-5 md:gap-10 marquee-content mix-blend-multiply py-10 h-full">
                            {data.concat(data).map((el, idx) => (
                                <div className={`min-w-[60lvw] md:min-w-[30lvw] h-full p-3 border border-mainColor rounded-t-full`}>
                                    <img
                                        className="w-full h-full object-cover mix-blend-multiply brightness-[1.2]"
                                        src={el.img}
                                        alt={el.name}
                                    />
                                    <h1 className="text-center font-medium text-base bg-mainColor rounded-full py-1">
                                        {el.name}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}