import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/articlecard.css"; 

const ArticleCard = ({ image, title, summary, tags, url }) => {
  return (
    <Link to={`/articles/${url}`} className="article-card"> 
      <img src={image} alt={title} />
      <div className="article-card-content">
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