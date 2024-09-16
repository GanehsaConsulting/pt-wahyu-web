"use client"

import Head from "next/head";
import Breadcrumbs from "@/components/ArticleComponent/CategoryComponents/Breadcrumbs";
import { ArticleList } from "@/components/ArticleComponent/ArticleList";
import { DataArticles } from "../../../../public/Database/Dummy";
import { usePathname } from "next/navigation";
import { useState } from "react";
import slugify from "@/app/helper/slugify";

export default function ArticleCategories() {
    const [visibleCount, setVisibleCount] = useState(6); // Initial number of articles to display

    const path = usePathname();

    const category = path.split("/artikel/")[1];

    const filteredData = [...DataArticles.new, ...DataArticles.trend].filter(article =>
        article.categories.toLowerCase() === category.toLowerCase()
    );

    return (
        <>
            <Head>
                <title>{filteredData ? filteredData.title : 'PT Wahyu Tatawasana'}</title>
                <meta name="description" content={filteredData ? filteredData.exerpt : 'PT Wahyu Tatawasana'} />
                <meta property="og:url" content={`https://www.wahyutatawasana.co.id/artikel/${slugify(filteredData?.categories || '')}/${slugify(filteredData?.title || '')}`} />
                <meta property="og:title" content={`PT Wahyu Tatawasana - ${filteredData ? filteredData.title : 'Artikel Tidak Ditemukan'}`} />
                <meta property="og:description" content={filteredData ? filteredData.exerpt : 'Deskripsi tidak tersedia'} />
            </Head>

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