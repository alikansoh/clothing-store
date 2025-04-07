import React from 'react'
import Image from "next/image";

export const Category = () => {
  const categories = [
    { src: '/images/men.jpg', label: 'Men' },
    { src: '/images/women.jpg', label: 'Women' },
    { src: '/images/kids.jpg', label: 'Kids' },
  ];

  return (
    <div className='mt-35 flex justify-center items-center flex-col px-4'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 text-center'>
        Discover Fashion
      </h1>
      <p className='text-md md:text-lg text-gray-600 mt-2 text-center'>
        Discover the latest trends and find your perfect outfit.
      </p>

      <div className='flex flex-col lg:flex-row gap-6 mt-8 w-full md:w-3/4 max-w-6xl'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-xl shadow-lg flex-1'
          >
            <Image
              src={category.src}
              alt={category.label}
              width={500}
              height={500}
              className='w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <p
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              bg-black bg-opacity-60 text-white px-6 py-3 rounded-full text-xl font-semibold 
              opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-500'
            >
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
