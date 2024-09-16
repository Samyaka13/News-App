import axios from "axios";
import React, { useEffect, useState } from "react";

const HeadlineCards = () => {
  const [news, setNews] = useState([]);

  // Fetch news articles on component mount
  useEffect(() => {
    axios
      .get(`https://news-app-2-hxyu.onrender.com/api/v1/acowale/search-entertainment`) // Updated API endpoint to fetch news
      .then((response) => {
        setNews(response.data.articles); // Assuming the news data is under "articles"
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []); // Added dependency array to run the effect only on mount

  return (
    <div className="max-w-full mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-black shadow-md border border-[#00df9a] rounded-lg max-w-sm mb-5"
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-t-lg"
              src={article.image || "/public/default-news.jpg"} // Fallback image if not provided
              alt={article.title}
            />
          </a>
          <div className="p-5">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h5 className="text-[#00df9a] font-bold text-2xl tracking-tight mb-2">
                {article.title}
              </h5>
            </a>
            <p className="font-normal text-white mb-3">
              {article.description || "No description available."}
            </p>
            <a
              className="text-white bg-[#00df9a] hover:bg-[#089c6d] focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
