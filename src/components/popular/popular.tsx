import { Link } from "react-router-dom";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";
import car from "./images/car2.svg";
import arthur from "./images/Link(8).svg";
import animal from "./images/Link(9).svg";
import plane from "./images/Link(10).svg";
import car2 from "./images/Link(11).svg";
import advertisement from "./images/Link(12).svg";
import "./popular.css";

const Popular = () => {
  return (
    <section className="mt-[650px]">
      <div className="my-con flex gap-[92px]">
        <div className="left">
          <div className="top relative items-center h-[30px] mb-[30px]">
            <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] px-[28px] rounded-[5px] z-[100]">
              <h1 className="text-btn text-[20px] font-[800] text-white">
                Our Popular News
              </h1>
            </button>

            <div className="w-[678px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[215px] top-[25px] z-[10]"></div>
          </div>
          <div className="mt-[39px] flex gap-[10px] w-[880px]">
            <div className="popular-left w-[435px] h-[300px] rounded-[6px] pl-[30px] pt-[146px]">
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.3)]"
              >
                RACING
              </Link>
              <h1 className="w-[365px] text-[20px] font-bold text-[rgba(255,_255,_255,_1)] mt-[15px]">
                Racing Games Browned Butte roadert Cookies Daily Breakfast
              </h1>
              <div className="flex gap-1 mt-[15px] items-center">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
                <img
                  src={time}
                  alt=""
                  className="w-[78px] h-[16px] ml-[15px]"
                />
              </div>
            </div>
            <div className="popular-right w-[435px] h-[300px] rounded-[6px] pl-[30px] pt-[146px]">
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.3)]"
              >
                ACTION
              </Link>
              <h1 className="w-[365px] text-[20px] font-bold text-[rgba(255,_255,_255,_1)] mt-[15px]">
                How To Host A WordPress Site On Amazon Lightsail
              </h1>
              <div className="flex gap-1 mt-[15px] items-center">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
                <img
                  src={time}
                  alt=""
                  className="w-[78px] h-[16px] ml-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[880px] gap-[10px] flex mt-[10px]">
            <div className="fighter w-[290px] h-[300px] rounded-[6px] pl-[30px] pt-[146px]">
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.3)]"
              >
                FIGHTER
              </Link>
              <h1 className="w-[214px] text-[20px] font-bold text-[rgba(255,_255,_255,_1)] mt-[15px]">
                The Magic Of February 2024 Wallpapers
              </h1>
              <div className="flex gap-1 mt-[15px] items-center">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
              </div>
            </div>
            <div className="animation w-[290px] h-[300px] rounded-[6px] pl-[30px] pt-[146px]">
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.3)]"
              >
                ANIMATION
              </Link>
              <h1 className="w-[214px] text-[20px] font-bold text-[rgba(255,_255,_255,_1)] mt-[15px]">
                Customization And Animation
              </h1>
              <div className="flex gap-1 mt-[15px] items-center">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
              </div>
            </div>
            <div className="story w-[290px] h-[300px] rounded-[6px] pl-[30px] pt-[146px]">
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.3)]"
              >
                STORY
              </Link>
              <h1 className="w-[214px] text-[20px] font-bold text-[rgba(255,_255,_255,_1)] mt-[15px]">
                Better ROI For Your Digital Products
              </h1>
              <div className="flex gap-1 mt-[15px] items-center">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top relative items-center h-[30px] mb-[30px]">
            <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] w-[148px] rounded-[5px] z-[100]">
              <h1 className="text-btn text-[20px] font-[800] text-white">
                Recent Posts
              </h1>
            </button>

            <div className="w-[197px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[145px] top-[25px] z-[10]"></div>
          </div>
          <div className="mt-[39px] flex gap-4">
            <img
              src={car}
              alt=""
              className="rounded-[5px] w-[110px] h-[110px]"
            />
            <div>
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)]"
              >
                RACING
              </Link>
              <h1 className="mt-[7px] text-[18px] font-bold text-[rgba(24,_51,_84,_1)] w-[185px] mb-[7px]">
                The Butter Chocolate Cookies Daily
              </h1>
              <div className="flex">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[15px] flex gap-4">
            <img
              src={arthur}
              alt=""
              className="rounded-[5px] w-[110px] h-[110px]"
            />
            <div>
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)]"
              >
                STORY
              </Link>
              <h1 className="mt-[7px] text-[18px] font-bold text-[rgba(24,_51,_84,_1)] w-[185px] mb-[7px]">
                Copying Designs Doesn`t Work
              </h1>
              <div className="flex">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[15px] flex gap-4">
            <img
              src={animal}
              alt=""
              className="rounded-[5px] w-[110px] h-[110px]"
            />
            <div>
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)]"
              >
                ANIMATION
              </Link>
              <h1 className="mt-[7px] text-[18px] font-bold text-[rgba(24,_51,_84,_1)] w-[194px] mb-[7px]">
                ollaboration Problems Go Away By Sharing
              </h1>
              <div className="flex">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[15px] flex gap-4">
            <img
              src={plane}
              alt=""
              className="rounded-[5px] w-[110px] h-[110px]"
            />
            <div>
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)]"
              >
                FIGHTER
              </Link>
              <h1 className="mt-[7px] text-[18px] font-bold text-[rgba(24,_51,_84,_1)] w-[194px] mb-[7px]">
                Level Up Your CSS Skills With The
              </h1>
              <div className="flex">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[15px] flex gap-4">
            <img
              src={car2}
              alt=""
              className="rounded-[5px] w-[110px] h-[110px]"
            />
            <div>
              <Link
                to={"/"}
                className="rounded-[3px] py-[4px] px-[10px] text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)]"
              >
                RACING
              </Link>
              <h1 className="mt-[7px] text-[18px] font-bold text-[rgba(24,_51,_84,_1)] w-[194px] mb-[7px]">
                The Key To Good Component Design
              </h1>
              <div className="flex">
                <img src={vector} alt="" className="w-[16px] h-[16px]" />
                <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                  27 August, 2024
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-con pt-[70px] pb-[70px]">
        <img src={advertisement} alt="" />
      </div>
    </section>
  );
};

export default Popular;
