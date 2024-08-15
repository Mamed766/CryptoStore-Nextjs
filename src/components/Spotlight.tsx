"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import React from "react";
import SwiperSpotlight from "./SwiperSpotlight";
import Categories from "./Categories";
import Artworks from "./Artworks";

const Spotlight = () => {
  return (
    <div className="bg-[#000000] h-[100rem]">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="flex justify-between pt-3">
            <h1 className="text-white text-[25px] ">
              Spotlight.{" "}
              <span className="text-gray-400  font-customFont italic">
                Collection you love
              </span>
            </h1>
            <button className="text-white border border-gray-500 py-1 px-5 rounded-lg hover:bg-[#17ef97] duration-300">
              Browse All
            </button>
          </div>
          <div>
            <SwiperSpotlight />
          </div>
        </div>
        <div>
          <Categories />
        </div>
        <div className="mt-10">
          <Artworks />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
