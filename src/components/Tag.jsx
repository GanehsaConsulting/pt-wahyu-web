import { RiArrowRightDownFill } from "react-icons/ri";
export const Tag = ({ text, className }) => {
    return (
        <>
            <div className={`flex items-center gap-2 ${className ? className : "text-mainColor"}`}>
                <p className="uppercase font-light ">
                    {text}
                </p>
                <p>
                    <RiArrowRightDownFill />
                </p>
            </div>
        </>
    )
}