import React from "react";
import { useLocation } from "react-router-dom"; // Fixed import from react-router-dom

const Search = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div className="max-w-full mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {results.length > 0 ? (
        results.map((article, index) => (
          <div
            key={index}
            className="bg-black shadow-md border border-[#00df9a] rounded-lg max-w-sm mb-5"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg"
                src={article.image || "/default-news.jpg"} // Simplified image path, ensure this image exists
                alt={article.title || "News image"} // Fallback for missing alt text
              />
            </a>
            <div className="p-5">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h5 className="text-[#00df9a] font-bold text-2xl tracking-tight mb-2">
                  {article.title || "Untitled News"} {/* Fallback for missing titles */}
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
        ))
      ) : (
        <p className="text-white text-center col-span-full">
          No results found. Please try a different search term.
        </p>
      )}
    </div>
  );
};

export default Search;
