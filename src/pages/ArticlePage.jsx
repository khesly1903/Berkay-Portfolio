import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/article.css"
import articles from "../data/articles.json"; 

export default function ArticlePage() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const article = articles.find((a) => a.url === id);

  useEffect(() => {
    if (article?.contentFile) {
      fetch(article.contentFile)
        .then((res) => res.text())
        .then((html) => setContent(html))
        .catch((err) => console.error("HTML dosyası yüklenemedi:", err));
    }
  }, [article]);

  if (!article) return <div>Makale bulunamadı</div>;

  return (
    <div className="article-container">
      <div className="article-container2">
        <div
          className="article-html"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

