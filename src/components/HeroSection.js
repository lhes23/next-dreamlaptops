import React from "react";
import Image from "next/image";

const HeroSection = ({ title, description }) => {
  return (
    <>
      <section className="bg-gradient-to-tr from-pink-200 to-purple-200 rounded shadow">
        <div className="container flex flex-col justify-center text-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {title}
            </h1>
            <div
              className="mt-6 mb-8 text-lg sm:mb-12"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className="relative flex p-6 mt-8 w-full sm:w-1/2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src="https://dreamlaptops.com/wp-content/uploads/2021/08/cropped-Dream-Laptops.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
