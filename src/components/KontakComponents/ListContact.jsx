import { DataContact } from "../../../public/Database/AboutUsData"

export const ListContact = () => {
    return (
        <>
            <div id="scroll" />
            <section className="md:px-32 px-5 py-10 flex flex-col md:flex-row gap-3">
                <div className="space-y-5 md:w-[60%] flex flex-col">
                    <div className="overflow-hidden border border-mainBlue flex-grow h-[60lvh] md:h-[50lvh]">
                        <iframe
                            className="w-full h-full"
                            src={DataContact.addressMain.map}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                  
                   
                </div>
                <div className="md:w-[40%] p-5 border border-secondaryColor space-y-3">
                <div className="duration-300 hover:shadow-secondaryShadow space-y-2 p-5 grow h-auto bg-mainColor bg-opacity-70 w-full backdrop-blur-xl z-20 relative flex flex-col ">
                        <h1 className="font-semibold text-xl text-base z-20">
                            {DataContact.addressMain.label}
                        </h1>
                        <h2 className="z-20 text-base">
                            {DataContact.addressMain.location}
                        </h2>
                    </div>
                    <a
                        href={DataContact.contact.link}
                        className="grow duration-300 hover:shadow-secondaryShadow space-y-2 p-5 bg-thirdColor bg-opacity-70 w-full backdrop-blur-xl z-20 relative flex flex-col ">
                        <h1 className="font-semibold text-mainColor z-20">
                            {DataContact.contact.name}
                        </h1>
                        <h2 className="z-20">
                            {DataContact.contact.data}
                        </h2>
                    </a>
                    <a
                        href={DataContact.contactMarketing.link}
                        className="grow duration-300 hover:shadow-secondaryShadow space-y-2 p-5 bg-thirdColor bg-opacity-70 w-full backdrop-blur-xl z-20 relative flex flex-col ">
                        <h1 className="font-semibold text-mainColor z-20">
                            {DataContact.contactMarketing.name}
                        </h1>
                        <h2 className="z-20">
                            {DataContact.contactMarketing.data}
                        </h2>
                    </a>
                </div>
            </section>
        </>
    )
}
