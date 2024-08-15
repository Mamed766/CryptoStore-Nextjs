import React from "react";
import SwiperArtwork from "./SwiperArtworks";
import { ArtworksProps } from "@/types/type";

const Artworks: React.FC<ArtworksProps> = ({ title, desc, button }) => {
  return (
    <div>
      <div className="flex h-[30rem] justify-center items-center bg-[#262626] rounded-[15px] p-4">
        <div className="flex flex-col gap-2 w-[300px]">
          <h2 className="text-white  text-[30px] font-bold">{title}</h2>
          <p className="text-gray-300">{desc}</p>
          <div>
            <button className="text-white mt-10 bg-black py-2 px-5 rounded-[15px] hover:bg-white hover:text-black duration-300">
              {button}
            </button>
          </div>
        </div>
        <SwiperArtwork />
      </div>
    </div>
  );
};

export default Artworks;
