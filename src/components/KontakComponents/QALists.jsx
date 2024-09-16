import { BsQuestionCircleFill } from "react-icons/bs";
import { Tag } from "../Tag";
import { DataFAQ } from "../../../public/Database/AboutUsData";
export const QALists = () => {
    return (
        <>
            <div id="scroll" />
            <section className="py-24 md:px-24 px-5 bgPolka">
                <div className="space-y-3">
                    <Tag text={'FAQ'} />
                    {DataFAQ.map((el, idx) => (
                        <>
                            <div key={idx} className="collapse collapse-arrow border-thirdColor border-b rounded-none">
                                <input type="checkbox" className="w-full" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium text-mainColor flex items-center gap-3">
                                    <div>
                                        <BsQuestionCircleFill />
                                    </div>
                                    <div>
                                        {el.question}
                                    </div>
                                </div>
                                <div className="collapse-content text-secondaryColor">
                                    <p>{el.answer}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}