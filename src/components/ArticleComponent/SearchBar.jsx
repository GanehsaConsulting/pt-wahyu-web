"use client"
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export const SearchBar = ({ className, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); // Update search term in parent component
    };

    const handleResetSearch = () => {
        setSearchTerm(""); // Reset search term
        onSearch(""); // Reset search in parent component
    };
    return (
        <>
            <section className={className}>
                <label className="input  input-bordered rounded-full flex items-center gap-2">
                    <div className="w-full flex items-center gap-2">
                        <RiSearchLine />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Cari artikel..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    {searchTerm && (
                        <button
                            className="-mr-1"
                            type="button"
                            onClick={handleResetSearch}
                        >
                            <MdCancel className="text-2xl text-gray-300 hover:text-red-500" />
                        </button>
                    )}
                    {/* <button className="flex items-center px-4 py-1 gap-4 bg-mainColor text-white font-semibold rounded-full text-xs -mr-[9px] duration-300 hover:brightness-90 hover:scale-95">
                        Search
                        <div className="p-[6px] bg-thirdColor rounded-full -mr-[12px]">
                            <RiSearchLine />
                        </div>
                    </button> */}
                </label>
            </section>
        </>
    )
}