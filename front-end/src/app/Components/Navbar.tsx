'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import navdata from '../fakeData/navData';


interface SubCategory {
    name: string;
    subCategories?: SubCategory[];
    image?: string;
}

interface NavItem {
    name: string;
    subCategories?: SubCategory[];
    image?: string;
}


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const [isUnderNav, setIsUnderNav] = useState<boolean>(false);
    const [selectedDropdown, setSelectedDropdown] = useState<SubCategory | null>(null);
    const [selectedDropdown2, setSelectedDropdown2] = useState<SubCategory | null>(null);
    const [isOpen3, setIsOpen3] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);

    const toggleNavbar = () => {
        if (isOpen2 || isOpen3) {
            setIsOpen2(false);

        } else {
            setIsOpen(!isOpen);
            ;
        }
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleback = () => {
        setIsOpen(true);
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleNavbar2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen3(false);
        setIsOpen(false);
    };

    const toggleNavbar3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen2(false);

    };

    const showUnderNav = () => {
        setIsUnderNav(true);
    };

    const hideUnderNav = () => {
        setIsUnderNav(false);
    };

    const toggleback1 = () => {
        setIsOpen3(false);
        setIsOpen(false);
        setIsOpen2(true);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 font-inter">
            <div className="bg-white h-18 flex items-center px-3 justify-between flex-wrap tablet:gap-x-0 mobile:pt-2 tablet:pt-2">
                <div className="flex items-center  gap-5">
                {/* Burger Icon */}
                <div className="flex gap-2">
                <Image
                    src={isOpen || isOpen2 || isOpen3 ? 'images/x.svg' : 'images/burger.svg'}
                    alt="burger"
                    className="h-6"
                    onClick={toggleNavbar}
                    width={50}
                    height={50}
                />
                <p className=''>Menu</p>
                </div>
                <div className='flex'>
                <Image
                    src='images/search.svg'
                    alt="search"
                    className="h-6"
                    onClick={toggleNavbar}
                    width={50}
                    height={50}
                />
                <p>Search</p>
                </div>
                </div>
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    className="w-[11rem] mobile:h-[2rem] mobile:w-[8rem] h-9 mobile:pt-1 tablet:h-[2rem] tablet:w-[10rem]"
                    width={800}
                    height={600}
                />


                {/* Search Input */}
                
                    

                {/* Icons - Bag, Favorite, User */}
                <div className="flex gap-2 items-center tablet:gap-6 mobile:h-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8 text-black-500 mobile:hidden"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7z"
                        />
                    </svg>
                    <Image
                        src="images/fav.svg"
                        alt="favorite"
                        className="w-8 h-8 mobile:w-[3rem] mobile:h-8"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="images/bag.svg"
                        alt="bag"
                        className="w-8 h-8 mobile:w-[3rem] mobile:h-8"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            {/* Navbar for Large Screens */}
            

            {/* Navbar for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 left-0 z-50 bg-white w-full p-2 pb-4 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <ul className="flex flex-col items-center gap-5 mobile:items-start tablet:items-start">
                    {navdata.map((item, index) => (
                        <li
                            key={index}
                            className={`relative group w-full ${item.name === 'Deals' || item.name === 'Deals' ? 'bg-orange-600 text-white' : ''}`}
                            onClick={() => {
                                toggleNavbar2();
                                setSelectedDropdown(item as unknown as SubCategory);
                            }}
                        >
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center border-b border-b-gray-200"
                            >

                                <span className="ml-4 font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                                <span className="font-bold text-xl absolute right-6">
                                    {'>'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-center w-[90%] text-l m-auto text-gray-600 mt-4 tablet:text-xl">
                    Become a Member with us for the best products, offers and more.
                </p>

                {/* Buttons for Join Us and Sign In */}
                <div className="flex justify-center gap-4 mt-4 w-full">
                    <button className="text-white w-[5.5rem] h-[2.5rem] rounded-full bg-black hover:bg-gray-800 tablet:w-[7.5rem] tablet:h-[2.5rem]">
                        Join Us
                    </button>
                    <button className="w-[5.5rem] h-[2.5rem] rounded-full text-black border border-gray-400 hover:bg-gray-800 tablet:w-[7.5rem] tablet:h-[2.5rem]">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Submenu for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 right-0 z-50 bg-white w-full overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen2 ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ maxHeight: '80vh' }}
            >
                <section className="flex justify-between items-center p-5 tablet:text-xl">
                    <p className="text-black tablet:text-xl" onClick={toggleback}>
                        {'<'}
                        <span className="font-bold pl-5 tablet:text-xl">
                            {selectedDropdown?.name}
                        </span>
                    </p>
                    <p className="text-blue-700 border-b-blue-700 border-b-2 text-sm font-semibold tablet:text-xl">
                        View All
                    </p>
                </section>
                <ul className="flex flex-col items-center gap-5 mobile:items-start mt-4 tablet:items-start">
                    {selectedDropdown?.subCategories?.map((item, index) => (
                        <li key={index} className="group w-full relative">
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center border-b border-b-gray-200"
                                onClick={() => {
                                    toggleNavbar3();
                                    setSelectedDropdown2(item);
                                }}
                            >
                                {item.image && (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[2.5rem] mobile:h-[2.5rem] rounded-sm tablet:w-[3.5rem] tablet:h-[3.5rem]"
                                    />
                                )}
                                <span className="ml-4 text-black font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                                <span className="font-bold text-black text-xl absolute right-6">
                                    {'>'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Third-level Submenu for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 right-0 z-50 bg-white w-full overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen3 ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ maxHeight: '80vh' }}
            >
                <section className="flex justify-between items-center p-5">
                    <p className="text-black tablet:text-xl" onClick={toggleback1}>
                        {'<'}
                        <span className="font-bold pl-5 tablet:text-xl">
                            {selectedDropdown2?.name}
                        </span>
                    </p>
                    <p className="text-blue-700 border-b-blue-700 border-b-2 text-sm font-semibold tablet:text-xl">
                        View All
                    </p>
                </section>
                <ul className="flex flex-col gap-5 items-start mt-4">
                    {selectedDropdown2?.subCategories?.map((item, index) => (
                        <li key={index} className="group w-full relative">
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center hover:text-white border-b border-b-gray-200"
                            >
                                <span className="ml-4 text-black font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;