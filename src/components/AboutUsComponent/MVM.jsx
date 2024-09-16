import { mvm } from "../../../public/Database/AboutUsData"
import { Tag } from "../Tag"

export const MVM = () => {
    return (
        <>
            <section className="md:min-h-screen flex items-center md:mx-24 py-10 mx-5">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[30%]">
                        <div className="space-y-5 flex items-end md:justify-center md:px-20 p-10 md:p-0 flex-col border-base border w-full h-full rounded-l-[100px]">
                            <span className="px-2 py-1 bg-base text-mainColor w-fit text-4xl">
                                Motto <br />
                            </span>
                            <p className="text-mainColor font-bold text-3xl uppercase">
                                Visi & Misi
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[70%]">
                        <div className="space-y-5">
                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="bg-mainColor text-white space-y-10 p-5">
                                    <Tag text={'motto'} className={'!text-white'} />
                                    <h1 className="text-lg font-medium">
                                        {mvm.motto}
                                    </h1>
                                </div>
                                <div className="border border-secondaryColor text-secondaryColor space-y-10 p-5 rounded-tr-[100px]">
                                    <Tag text={'visi'} className={'text-secondaryColor'} />
                                    <h1 className="text-lg font-medium">
                                        {mvm.visi}
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-base text-mainColor space-y-10 p-5 rounded-br-[100px]">
                                <Tag text={'misi'} className={'text-mainColor'} />
                                <h1 className="text-lg font-medium">
                                    {mvm.misi}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}