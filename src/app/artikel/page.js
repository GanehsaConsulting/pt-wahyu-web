
"use client"

import Head from 'next/head';
import { useState } from "react";
import { ArticleList } from "@/components/ArticleComponent/ArticleList";
import { BannerArticle } from "@/components/ArticleComponent/BannerArticle";
import { Categories } from "@/components/ArticleComponent/Categories";
import { Highlight } from "@/components/ArticleComponent/Highlight";
import { SearchBar } from "@/components/ArticleComponent/SearchBar";
import { DataArticles } from "../../../public/Database/Dummy";

export default function ArtikelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of articles to display

  // Combine articles from both sources for search
  const allArticles = [...DataArticles.new, ...DataArticles.trend];

  // Filter articles based on searchTerm
  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAllArticles = filteredArticles.filter((article) =>
    [...DataArticles.new, ...DataArticles.trend].some((item) => item.title === article.title)
  );

  const filteredNewArticles = filteredArticles.filter((article) =>
    DataArticles.new.some((item) => item.title === article.title)
  );

  const filteredTrendArticles = filteredArticles.filter((article) =>
    DataArticles.trend.some((item) => item.title === article.title)
  );

  // Determine the articles to display
  const displayedAllArticles = filteredAllArticles.slice(0, visibleCount);
  const displayedNewArticles = filteredNewArticles.slice(0, visibleCount);
  const displayedTrendArticles = filteredTrendArticles.slice(0, visibleCount);
  return (
    <>
      <Head>
        <title>PT Wahyu Tatawasana - Artikel</title>
        <meta name="description" content="Temukan artikel menarik dari PT Wahyu Tatawasana." />
        <meta property="og:url" content="https://www.wahyutatawasana.co.id/artikel" />
        <meta property="og:title" content="PT Wahyu Tatawasana - Artikel" />
        <meta property="og:description" content="Temukan artikel menarik dari PT Wahyu Tatawasana." />
      </Head>

      <BannerArticle />
      <Highlight />
      <div className="space-y-5 mb-10">
        <SearchBar
          onSearch={setSearchTerm}
          className={'md:mx-24 mx-5 '} />
        <Categories />
      </div>
      <ArticleList
        label={'Artikel Terbaru'}
        data={displayedAllArticles}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        isSearching={!!searchTerm}
      />

    </>
  );
}
