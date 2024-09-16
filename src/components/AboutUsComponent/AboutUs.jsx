import { about } from "../../../public/Database/AboutUsData"
import { Tag } from "../Tag"

export const AboutUs = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 md:min-h-screen flex items-center py-10">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[50%] flex flex-col justify-center gap-10  p-10 bg-base bg-opacity-70 rounded-tr-[100px] md:rounded-tr-[0px] md:rounded-bl-[100px]">
                        <div className="">
                            <Tag text={'tentang'} />
                            <p className="text-4xl mt-2 mb-10">
                                Sejarah kami
                            </p>
                        </div>
                        <h1 className="tracking-wide md:text-lg font-medium text-mainColor">
                            {about}
                        </h1>
                    </div>
                    <div className="md:w-[50%] h-[70lvh]">
                        <img
                            className="w-full h-full object-cover md:rounded-tr-[100px] md:rounded-bl-[0px] rounded-bl-[100px]"
                            src="https://images.unsplash.com/photo-1576707948881-b485713fbad7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="about-us" />
                    </div>
                </div>
            </section>
        </>
    )
}