"use client"

import { ArticleDetail } from "@/components/ArticleComponent/ArticleDetail";
import { ArticleDetailSkeleton } from "@/components/Loading/ArticleDetailSkeleton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DataArticles } from "../../../../../public/Database/Dummy";
import slugify from "@/app/helper/slugify";
import Head from "next/head";


export default function ArticleDetailPage() {
    const pathname = usePathname();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true); // State untuk menangani status loading
    const slug = pathname.split('/').pop();

    useEffect(() => {
        const fetchArticle = () => {
            setLoading(true); // Set loading ke true saat data mulai diambil
            const allArticles = [...DataArticles.new, ...DataArticles.trend];
            const foundArticle = allArticles.find(article => slugify(article.title) === slug);
            setArticle(foundArticle);
            setLoading(false); // Set loading ke false setelah data selesai diambil
        };

        fetchArticle();
    }, [slug]);

    if (loading) {
        return <div><ArticleDetailSkeleton /></div>; // Tampilkan indikator loading
    }

    if (!article) {
        return <div className="min-h-screen w-screen font-medium flex justify-center items-center">Artikel tidak ditemukan</div>;
    }

    return (
        <>
            <Head>
                <title>{article ? article.title : 'PT Wahyu Tatawasana'}</title>
                <meta name="description" content={article ? article.exerpt : 'PT Wahyu Tatawasana'} />
                <meta property="og:url" content={`https://www.wahyutatawasana.co.id/artikel/${slugify(article?.categories || '')}/${slugify(article?.title || '')}`} />
                <meta property="og:title" content={`PT Wahyu Tatawasana - ${article ? article.title : 'Artikel Tidak Ditemukan'}`} />
                <meta property="og:description" content={article ? article.exerpt : 'Deskripsi tidak tersedia'} />
            </Head>

            <ArticleDetail data={article} />
        </>
    )
}