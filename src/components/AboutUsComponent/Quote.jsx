import { FaQuoteLeft } from "react-icons/fa6"
import { founder } from "../../../public/Database/AboutUsData"
import { Tag } from "../Tag"

export const Quote = () => {
    return (
        <>
            <section className="md:min-h-screen py-10 md:mx-24 mx-5 flex items-center">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[50%]">
                        <img
                            className="h-[65lvh] w-full object-cover rounded-tl-[100px]"
                            src={founder.img}
                            alt="Ghina Erry Hernawaty" />
                    </div>
                    <div className="md:w-[50%] p-10 rounded-br-[100px] bg-base text-mainColor flex flex-col justify-between">
                        <Tag text={'Kata Sambutan'} />
                        <div>
                            <FaQuoteLeft className="text-4xl" />
                            {founder.speech}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}