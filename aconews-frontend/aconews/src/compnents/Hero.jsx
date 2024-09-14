import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full overflow-x-hidden bg-gray-900 mt-10 mb-10 md:mb-0">
      <div className="bg-contain bg-[url('/public/news-hero.png')] bg-no-repeat w-full z-0">
        <div className="relative lg:left-[55%] w-full flex flex-col h-full">
          <div className="my-auto mx-auto lg:mx-0 w-11/12 sm:w-10/12 md:w-8/12 lg:w-2/5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] mb-4 text-white text-center lg:text-left">
              <span className="text-[#00df9a]">Stay Updated</span> with the Latest News!
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-8 text-white text-center lg:text-left">
              Catch up on the trending news from around the world, straight to your feed.
            </p>
            <div className="flex justify-center lg:justify-start items-center">
              <Link to="/top-news">
                <button className="rounded px-6 sm:px-8 md:px-10 py-2 sm:py-3 mb-2 text-white bg-[#00df9a] hover:bg-[#089c6d]">
                  Explore Top Stories
                </button>
              </Link>
            </div>
            <div className="relative mt-6">
              <input
                className="appearance-none border-2 pl-10 border-[#00df9a] hover:border-[#089c6d] transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="search"
                type="text"
                placeholder="Search news"
              />
              <div className="absolute right-0 inset-y-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
