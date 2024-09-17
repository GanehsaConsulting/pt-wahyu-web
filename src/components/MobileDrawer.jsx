import Link from "next/link"
import { NavbarItems } from "../../public/Database/System"

export const MobileDrawer = () => {
    return (
        <>
            <ul className={`flex z-50 flex-col mx-5 my-10 min-h-full text-base-content noBar`}>
                <div className='flex flex-col justify-center gap-10 font-bold'>
                    {NavbarItems.main.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`flex flex-col items-start w-full group duration-200 hover:bg-white px-3 py-1 rounded-full  hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                                aria-current="page"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                  
                </div>
            </ul>
        </>
    )
}