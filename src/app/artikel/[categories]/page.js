"use client"

import { ArticleList } from "@/components/ArticleComponent/ArticleList";
import Breadcrumbs from "@/components/ArticleComponent/CategoryComponents/Breadcrumbs";
import { DataArticles } from "../../../../public/Database/Dummy";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function ArticleCategories() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of articles to display

    const path = usePathname();

    const category = path.split("/artikel/")[1];

    const filteredData = [...DataArticles.new, ...DataArticles.trend].filter(article =>
        article.categories.toLowerCase() === category.toLowerCase()
    );

    return (
        <>
            <Breadcrumbs className={'md:mx-24 mx-5 md:pt-24 pt-16 mb-5'} categories={category} />
            <ArticleList
                label={`${category} Artikel`}
                data={filteredData}
                visibleCount={visibleCount}
                setVisibleCount={setVisibleCount}
            />
        </>
    )
}