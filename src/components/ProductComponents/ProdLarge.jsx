"use client"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { Tag } from "../Tag"
import { useEffect, useState } from "react"
import { DataProducts } from "../../../public/Database/AboutUsData"

export const ProdLarge = ({ data, text }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollTo] = useState(10);

    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
                setScrollTo(30)
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
                setScrollTo(100)
            } else {
                setItemsToShow(1);
                setScrollTo(100)
            }
        };

        handleResize(); // Call on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - itemsToShow));
    };

    return (
        <>
            <section className="md:mx-24 py-20">
                <div className="mx-5 md:mx-0 mb-10">
                    <Tag text={'jenis'} />
                    <p className="text-4xl mt-2 mb-5">
                        {text}
                    </p>
                </div>
                <div className="carousel2 w-full md:grid md:grid-cols-3 md:flex-row gap-3">
                    {data.map((el, idx) => (
                        <div
                            key={idx}
                            style={{ transform: `translateX(-${currentIndex * (scrollTo / itemsToShow)}%)` }}
                            className={`min-w-[80lvw] md:min-w-full grow transition-transform duration-500 ease-in-out border border-thirdColor md:w-[25%]
                                ${idx === 0 ? 'ml-5 md:ml-0' : ''} ${idx === data.length - 1 ? 'mr-5 md:mr-0' : ''} 
                                `}
                        >
                            <div className="flex flex-col items-center md:px-10 md:py-14 px-5 py-10">
                                <img
                                    src={el.img}
                                    alt={el.name}
                                    className="w-[80lvw] h-[30lvh] md:w-[20lvw] object-cover overflow-visible  mix-blend-multiply" />
                                <div className="space-y-2 text-mainColor mt-16">
                                    <h1 className="text-xl md:text-2xl font-semibold">
                                        {el.name}
                                    </h1>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-4 mt-5 md:hidden">
                    <button
                        className="h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
                        onClick={handlePrevClick}
                    >
                        <IoMdArrowBack />
                    </button>
                    <button
                        className="h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
                        onClick={handleNextClick}
                    >
                        <IoMdArrowForward />
                    </button>
                </div>
            </section>
        </>
    )
}