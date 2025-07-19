"use client";

import Link from "next/link";
import { use } from "react";

type Lang = "ar" | "en";
interface ArticleProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: Lang }>;
}

export default function SingleArticle({ params, searchParams }: ArticleProps) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div className="space-x-5">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=ar`}>Arabic</Link>
      </div>
    </div>
  );
}
