import { Link } from "react-router-dom";
import profile from "./images/Vector(1).svg";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";

const ShowCase = () => {
  return (
    <section className="flex w-[100%]">
      <div className="showcase-right w-[50%] h-[600px] flex flex-col items-center justify-end pb-[50px]">
        <Link
          to={"/"}
          className="bg-[#f4796c] w-[78px] text-white text-[13px] py-[4px] px-[10px] rounded-[3px] text-center"
        >
          FIGHTER
        </Link>
        <h1 className="w-[542px] text-white text-[28px] font-bold text-center mt-[17px]">
          Mobile Apple Planning Big Mac Redesign ander Nigh HalfMacShare
        </h1>
        <div className="flex gap-1 w-[760px] px-[207px] mt-[21px] items-center">
          <img src={profile} alt="" className="w-[16px] h-[16px]" />
          <h1 className="text-[#bacce1] text-[13px] font-semibold">BY ADMIN</h1>
          <img src={vector} alt="" className="w-[16px] h-[16px] ml-[15px]" />
          <h2 className="text-[#bacce1] text-[13px] font-semibold">
            27 August, 2024
          </h2>
          <img src={time} alt="" className="w-[78px] h-[16px] ml-[15px]" />
        </div>
      </div>
      <div className="showcase-left w-[50%] h-[600px] flex flex-col items-center justify-end pb-[50px]">
        <Link
          to={"/"}
          className="bg-[#f4796c] w-[78px] text-white py-[4px] px-[10px] rounded-[3px] text-[13px] text-center"
        >
          ACTION
        </Link>
        <h1 className="w-[542px] text-white text-[28px] font-bold text-center mt-[17px]">
          How To Build A Magazine Layout With CSS Grid Areas
        </h1>
        <div className="flex gap-1 w-[760px] px-[207px] mt-[21px] items-center">
          <img src={profile} alt="" className="w-[16px] h-[16px]" />
          <h1 className="text-[#bacce1] text-[13px] font-semibold">BY ADMIN</h1>
          <img src={vector} alt="" className="w-[16px] h-[16px] ml-[15px]" />
          <h2 className="text-[#bacce1] text-[13px] font-semibold">
            27 August, 2024
          </h2>
          <img src={time} alt="" className="w-[78px] h-[16px] ml-[15px]" />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
