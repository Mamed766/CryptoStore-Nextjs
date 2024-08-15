"use client";
import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import useSWR from "swr";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { BiHeart } from "react-icons/bi";
import { CardData } from "@/types/type";
import { fetcher } from "@/services/fetcher";

const Categories: React.FC = () => {
  const { data, error, isLoading } = useSWR<CardData[]>(
    "http://localhost:3001/categories",
    fetcher
  );

  if (error) {
    return <h1 className="text-red-500">ERROR</h1>;
  }
  if (isLoading) {
    return <h1 className="text-white">Loading..</h1>;
  }

  return (
    <div className=" flex flex-col mt-10">
      <div className="text-white text-[25px]">
        All Categories.{" "}
        <span className="text-gray-400 font-customFont italic">
          {" "}
          What`s you like{" "}
        </span>
      </div>
      <div>
        <div className="flex flex-wrap justify-between  ">
          {data &&
            data.map((category: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col group relative: mt-5 "
                >
                  <div className="overflow-hidden rounded-[15px]">
                    <img
                      className="w-[220px]   h-[150px] rounded-[15px] object-cover cursor-pointer hover:scale-110 duration-300"
                      src={category?.image}
                      alt=""
                    />
                  </div>

                  <h1 className="text-white mt-2 text-[18px] flex justify-center font-bold relative group  ">
                    <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {category?.title}
                    </span>
                  </h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
