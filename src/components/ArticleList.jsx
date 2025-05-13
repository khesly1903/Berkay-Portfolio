import React from 'react';
import ArticleCard from './ArticleCard';
import articles from '../data/articles.json'; 
const ArticleList = () => {
  return (
    <div className="card-grid">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
