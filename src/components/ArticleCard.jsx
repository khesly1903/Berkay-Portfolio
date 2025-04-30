import React from "react";
import { Link } from "react-router-dom"; // React Router'dan Link'i içe aktar
import "../styles/articlecard.css"; // Stil dosyasını ayırdık

const ArticleCard = ({ image, title, summary, tags, url }) => {
  return (
    <Link to={`/articles/${url}`} className="article-card"> 
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="tags">
          {tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;