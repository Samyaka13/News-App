import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "World", path: "/world" },
    { id: 3, text: "Technology", path: "/technology" },
    { id: 4, text: "Sports", path: "/sports" },
    { id: 5, text: "Entertainment", path: "/entertainment" },
  ];

  return (
    <div className="bg-gray-900 flex justify-between items-center h-24 max-w-[1340px] mx-auto px-4 text-white">
      {/* Logo */}
      <Link to= '/'>
      <h1 className="w-full md:text-4xl cursor-pointer text-3xl font-bold text-[#00df9a]">
        ACONEWS
      </h1>
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-lg m-2 mt-3 cursor-pointer duration-300 text-2xl hover:text-black"
          >
            <Link
              to={item.path}
              className="hover:bg-[#00df9a] rounded-lg hover:text-black duration-300"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          ACONEWS
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link
              to={item.path}
              className="hover:bg-[#00df9a] rounded-lg hover:text-black duration-300"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
