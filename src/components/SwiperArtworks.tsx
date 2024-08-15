"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { CardData } from "@/types/type";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";

const SwiperArtworks: React.FC = () => {
  const { data, error, isLoading } = useSWR<CardData[]>(
    "http://localhost:3001/data",
    fetcher
  );

  return (
    <div className="w-[70%] flex  flex-col">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          nextEl: ".swiper-button-next-artworks",
          prevEl: ".swiper-button-prev-artworks",
        }}
        pagination={{
          el: ".swiper-pagination-artworks",
          clickable: true,
        }}
        modules={[FreeMode, Navigation, Pagination]}
        className="swiperArtworks"
      >
        {data &&
          data.map((card: any, index: number) => (
            <SwiperSlide key={index} className="rounded-[30px] bg-white">
              <div className="border-[10px] flex flex-col justify-start rounded-lg border-white overflow-hidden bg-white">
                <div className="overflow-hidden rounded-lg relative group">
                  <img
                    src={card?.image}
                    alt={card?.title}
                    className="max-w-[400px] max-h-[20rem] rounded-lg object-cover cursor-pointer hover:scale-110 duration-300"
                  />

                  <div className="flex flex-col gap-1 absolute bottom-2 right-[-30px] group-hover:right-2 duration-300 text-white ">
                    <div className="bg-white text-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      <TiShoppingCart />
                    </div>
                    <div className="bg-white text-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      <BiHeart />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 gap-1 bg-white">
                  <h2 className="flex text-black">{card?.title}</h2>
                  <p className="flex items-center text-black">
                    <BsCurrencyBitcoin /> {card?.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-center mt-4 gap-4">
        <div className="swiper-button-prev-artworks cursor-pointer text-white bg-gray-700 p-2 rounded-full">
          <FaAngleLeft />
        </div>
        <div className="swiper-button-next-artworks cursor-pointer text-white bg-gray-700 p-2 rounded-full">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default SwiperArtworks;
