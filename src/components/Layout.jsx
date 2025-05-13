import React, { Children, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import "../index.css"

export default function Layout({ children }) {
  const location = useLocation();
  

  useEffect(() => {
    const body = document.body;

    if (location.pathname.startsWith("/articles/")) {
      body.className = "bg-article";
    } else if (location.pathname.startsWith("/articles") || location.pathname.startsWith("/projects")) {
      body.className = "bg-articles-page";
    } else {
      body.className = ""; 
    }
  }, [location.pathname]);

  
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  );
}
