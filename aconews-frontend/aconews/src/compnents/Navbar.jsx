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
    <div className="bg-gray-900 flex justify-between items-center h-20 md:h-24 max-w-[1340px] mx-auto px-4 text-white">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00df9a] cursor-pointer">
          ACONEWS
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 m-2 cursor-pointer duration-300 text-xl md:text-2xl hover:bg-[#00df9a] rounded-lg hover:text-black"
          >
            <Link to={item.path} className="duration-300">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-gray-800 z-10 ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 z-10"
        }
      >
        {/* Mobile Logo */}
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">ACONEWS</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={handleNav} // Close the menu on click
            className="p-4 border-b border-gray-700 hover:bg-[#00df9a] hover:text-black rounded-lg duration-300 cursor-pointer"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
