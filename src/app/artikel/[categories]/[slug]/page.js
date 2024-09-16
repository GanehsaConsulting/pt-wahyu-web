"use client"

import { ArticleDetail } from "@/components/ArticleComponent/ArticleDetail";
import { ArticleDetailSkeleton } from "@/components/Loading/ArticleDetailSkeleton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DataArticles } from "../../../../../public/Database/Dummy";
import slugify from "@/app/helper/slugify";


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
            <ArticleDetail data={article} />
        </>
    )
}