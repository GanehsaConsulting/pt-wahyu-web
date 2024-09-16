export const Pagination = ({ onclick }) => {
    return (
        <>
            <button
                onClick={onclick}
                className="px-4 py-2 border text-secondaryColor duration-200 hover:bg-base hover:text-mainColor hover:scale-95 rounded-full font-bold">
                Load More
            </button>
        </>
    )
}