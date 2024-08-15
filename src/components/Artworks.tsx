import React from "react";
import SwiperArtwork from "./SwiperArtworks";

const Artworks: React.FC = () => {
  return (
    <div>
      <div className="flex h-[30rem] justify-center items-center bg-[#262626] rounded-[15px] p-4">
        <div className="flex flex-col gap-2 w-[300px]">
          <h2 className="text-white  text-[30px] font-bold">
            Most Popular Artworks
          </h2>
          <p className="text-gray-300">
            Our marketplace has 2M+ works of popular artists around the world.
          </p>
          <div>
            <button className="text-white mt-10 bg-black py-2 px-5 rounded-[15px] hover:bg-white hover:text-black duration-300">
              View All NFTs
            </button>
          </div>
        </div>
        <SwiperArtwork />
      </div>
    </div>
  );
};

export default Artworks;
