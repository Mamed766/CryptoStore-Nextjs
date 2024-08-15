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

const SwiperSpotlight: React.FC = () => {
  const { data, error, isLoading } = useSWR<CardData[]>(
    "http://localhost:3001/data",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div className="mt-5">
      <div className="relative">
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 hover:opacity-100 duration-300">
          <FaAngleLeft />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 hover:opacity-100 duration-300">
          <FaAngleRight />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {data &&
            data.map((card: any, index: number) => (
              <SwiperSlide key={index} className="rounded-[30px] bg-[#262626]">
                <div className="border-[10px] flex flex-col justify-start rounded-lg border-[#262626] overflow-hidden bg-[#262626]">
                  <div className="overflow-hidden rounded-lg relative group">
                    <img
                      src={card?.image}
                      alt={card?.title}
                      className="max-w-[400px] max-h-[20rem] rounded-lg object-cover cursor-pointer hover:scale-110 duration-300"
                    />

                    <div className="flex flex-col gap-1 absolute bottom-2 right-[-30px] group-hover:right-2 duration-300 text-white ">
                      <div className="bg-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                        <TiShoppingCart />
                      </div>
                      <div className="bg-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                        <BiHeart />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-2 gap-1 bg-[#262626]">
                    <h2 className="flex text-white">{card?.title}</h2>
                    <p className="flex items-center text-[#17ef97]">
                      <BsCurrencyBitcoin /> {card?.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSpotlight;
