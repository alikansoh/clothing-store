"use client";
import Image from "next/image";
import React, { useState } from "react";
import navdata from "../fakeData/navData";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Men");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const selectedData = navdata.find(
    (item) => item.category === selectedCategory
  );

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex flex-wrap fixed top-0 left-0 right-0 z-50 bg-white shadow-md  ">
      <div className="flex items-center justify-between px-8 w-full h-18">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <div className="flex gap-2 cursor-pointer" onClick={toggleNavbar}>
            <Image
              src={isOpen ? "images/x.svg" : "images/burger.svg"}
              alt="menu"
              className="h-6 cursor-pointer"
              width={24}
              height={24}
            />
            <p className="hidden sm:block">{isOpen ? "Close" : "Menu"}</p>
          </div>
          <div className="hidden  sm:flex sm:items-center sm:gap-2 cursor-pointer" onClick={toggleSearch}>
            <Image
              src="images/search.svg"
              alt="search"
              className="sm:h-6 cursor-pointer"
              width={24}
              height={24}
              
            />
            <p>Search</p>
          </div>
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 ">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-[5rem] h-[2rem]  sm:h-[3rem]  sm:w-[8rem]"
            width={100}
            height={100}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-5">
          <Image
            src="images/heart.svg"
            alt="favorite"
            className="hidden sm:w-7 sm:h-7 sm:block cursor-pointer"
            width={25}
            height={25}
          />
          <Image
            src="images/person.svg"
            alt="person"
            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
            width={25}
            height={25}
          />
          <Image
            src="images/bag.svg"
            alt="bag"
            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
            width={25}
            height={25}
          />
        </div>
      </div>

      {/* Mobile Navbar Menu */}
      <nav
        className={`fixed top-18 left-0 z-50 bg-white h-full w-full p-4 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full flex-wrap "
        }`}
      >
        {/* Category Tabs */}
        <div className="flex items-center gap-5 justify-center mb-5 flex-wrap">
          {navdata.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(item.category)}
              className={`px-4 py-2 rounded-lg transition-all ease-in-out duration-200 ${
                selectedCategory === item.category
                  ? "bg-black text-white font-semibold shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Subcategories */}
        <ul className="flex flex-col gap-5 px-4 items-center overflow-y-auto max-h-100">
          {selectedData?.subCategories.map((sub, idx) => (
            <li key={idx}>
              <p className="font-semibold mb-2 cursor-pointer border-b text-gray-800 hover:text-blue-600">
                {sub.name}
              </p>
              <ul className="pl-2 flex flex-col gap-1">
                {sub.subCategories.map((subItem, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Search Page Section */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-60 transform transition-all duration-300 ${
          isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSearch}
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-white p-10 text-black flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo at the top of the search page */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="w-[8rem] h-[3rem]"
              width={100}
              height={100}
            />
          </div>

          {/* Search Input */}
          <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-lg flex items-center mb-10">
            <input
              className="w-full border-none p-2 rounded-l-lg text-gray-800"
              placeholder="Find your perfect outfit..."
            />
            <Image
              src="images/x.svg"
              alt="close"
              className="h-6 cursor-pointer ml-3"
              width={24}
              height={24}
              onClick={toggleSearch}
            />
          </div>

          {/* Fun and Interactive Section */}
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold  mb-6">Explore Fashion</h2>
            <p className="mb-6 text-lg text-gray-600">
              Discover the latest trends and find your perfect outfit.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-200 hover:scale-105">
                <h3 className="font-semibold text-xl mb-2">Trending Now</h3>
                <p className="text-gray-600 text-sm">Stay ahead with the hottest styles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-200 hover:scale-105">
                <h3 className="font-semibold text-xl mb-2">New Arrivals</h3>
                <p className="text-gray-600 text-sm">Fresh collections just for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="flex w-full items-center justify-center sm:hidden">
        <input
          className="w-7/8 border text-sm border-gray-300 rounded-3xl h-12 mb-2 pl-8"
          placeholder="Find your perfect outfit..."
          onClick={toggleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
