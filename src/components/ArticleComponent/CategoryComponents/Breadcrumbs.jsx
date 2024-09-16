import slugify from "@/app/helper/slugify";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";

export const Breadcrumbs = ({ title, categories, className }) => {

    return (
        <section className={className}>
            <div className="breadcrumbs text-sm noBar">
                <ul>
                    <li>
                        <Link href="/"
                        >
                            <FaBookOpen />
                        </Link>
                    </li>
                    {categories ? (
                        <li className="capitalize">
                            <Link href={`/${slugify(categories.toLowerCase())}`}>
                                {categories}
                            </Link>
                        </li>
                    ) : null}
                    {title ? (

                        <li>
                            <p
                                className="text-mainColor">
                                {title}
                            </p>
                        </li>
                    ) : null}
                </ul>
            </div>
        </section>
    );
};

export default Breadcrumbs;
