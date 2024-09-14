import axios from "axios";
import React, { useEffect, useState } from "react";

const HeadlineCards = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    axios
      .get(`/blog/get-all-blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  });
  return (
    <div className="max-w-full mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {blogs.map((blog) => {
        return (
          <div
            key={blog._id}
            className="bg-black shadow-md border border-[#00df9a] rounded-lg max-w-sm mb-5"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={blog.image}
                alt="Image needed to be submitted"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-[#00df9a] font-bold text-2xl tracking-tight mb-2">
                  {blog.title}
                </h5>
              </a>
              <p className="font-normal text-white mb-3">{blog.description}</p>
              <a
                className="text-white bg-[#00df9a] hover:bg-[#089c6d] focus:ring-4   focus:ring-white font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default HeadlineCards;
