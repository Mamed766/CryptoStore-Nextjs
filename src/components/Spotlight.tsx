"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import React from "react";
import SwiperSpotlight from "./SwiperSpotlight";
import Categories from "./Categories";
import Artworks from "./Artworks";
import { SpotLightType } from "@/types/type";

const Spotlight: React.FC<SpotLightType> = ({ title, desc, button }) => {
  return (
    <div className="bg-[#000000] h-[100rem]">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="flex justify-between pt-3">
            <h1 className="text-white text-[25px] ">
              <span className="font-bold"> {title} </span>
              <span className="text-gray-400  font-customFont italic">
                {desc}
              </span>
            </h1>
            <button className="text-white border border-gray-500 py-1 px-5 rounded-lg hover:bg-[#17ef97] duration-300">
              {button}
            </button>
          </div>
          <div>
            <SwiperSpotlight />
          </div>
        </div>
        <div>
          <Categories title="All Categories." desc="What's you like" />
        </div>
        <div className="mt-10">
          <Artworks
            title={"Most Popular Artworks"}
            desc={
              "Our marketplace has 2M+ works of popular artists around the world."
            }
            button={" View All NFTs"}
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
