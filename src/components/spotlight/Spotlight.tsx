import car from "./images/spotlight_post01.jpg.svg";
import profile from "./images/Vector(1).svg";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";
import alpha from "./images/spotlight_post02.jpg.svg";
import plane from "./images/spotlight_post03.jpg.svg";
import gaming from "./images/spotlight_post04.jpg.svg";
import "../categories/cat.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import arrow from "./images/Button → SVG.svg";

const Spotlight = () => {
  return (
    <>
      <section>
        <div className="relative flex my-con">
          <div className="absolute left-0">
            <div className="top relative items-center h-[30px] mb-[30px]">
              <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] px-[28px] rounded-[5px] z-[100]">
                <h1 className="text-btn text-[20px] font-[800] text-white">
                  Today’s Spotlight
                </h1>
              </button>

              <div className="w-[678px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[215px] top-[25px] z-[10]"></div>
            </div>
            <div className="flex bottom mt-[70px]">
              <div className="bot-left w-[498px]">
                <img
                  src={car}
                  alt="rasm"
                  className="w-[100%] h-[300px] rounded-[6px]"
                />
                <button className="w-[72.8px] h-[24px] border-[1px] border-[rgba(184,_193,_205,_1)] mt-[23.5px]">
                  RACING
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] font-[700] w-[429px+] text-[28px]">
                  How To Build A Magazine Layout With CSS Grid Areas
                </h1>
                <div className="flex gap-1 mt-[19px] items-center justify-start">
                  <img src={profile} alt="" className="w-[16px] h-[16px]" />
                  <h1 className="text-[#bacce1] text-[13px] font-semibold">
                    BY ADMIN
                  </h1>

                  <img
                    src={vector}
                    alt=""
                    className="w-[16px] h-[16px] ml-[15px]"
                  />
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

              <div className="bot-right ml-[30px] h-[140px]">
                <div className="flex min-w-[362px] justify-between mb-[20px]">
                  <div>
                    <button className="w-[72.8px] h-[24px] border-[1px] border-[rgba(184,_193,_205,_1)] mt-[23.5px]">
                      ACTION
                    </button>
                    <h1 className="text-[rgba(24,_51,_84,_1)] font-[700] w-[193px] text-[20px] mt-[8px]">
                      Fortnite Ratings are Skyrocketing
                    </h1>
                    <div className="flex gap-1 mt-[14px] items-center">
                      <img src={vector} alt="" className="w-[16px] h-[16px] " />
                      <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                        27 August, 2024
                      </h2>
                    </div>
                  </div>
                  <img
                    src={alpha}
                    alt=""
                    className="w-[140px] h-[140px] rounded-[6px]"
                  />
                </div>
                <div className="flex min-w-[362px] justify-between mb-[20px]">
                  <div>
                    <button className="w-[72.8px] h-[24px] border-[1px] border-[rgba(184,_193,_205,_1)] mt-[23.5px]">
                      FIGHTER
                    </button>
                    <h1 className="text-[rgba(24,_51,_84,_1)] font-[700] w-[200px] text-[20px] mt-[8px]">
                      Everything You Need To Know About
                    </h1>
                    <div className="flex gap-1 mt-[14px] items-center">
                      <img src={vector} alt="" className="w-[16px] h-[16px] " />
                      <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                        27 August, 2024
                      </h2>
                    </div>
                  </div>
                  <img
                    src={plane}
                    alt=""
                    className="w-[140px] h-[140px] rounded-[6px]"
                  />
                </div>
                <div className="flex min-w-[362px] justify-between ">
                  <div>
                    <button className="w-[72.8px] h-[24px] border-[1px] border-[rgba(184,_193,_205,_1)] mt-[23.5px]">
                      GAMING
                    </button>
                    <h1 className="text-[rgba(24,_51,_84,_1)] font-[700] w-[197px] text-[20px] mt-[8px]">
                      We Can’t Wait to Try This Gaming Area
                    </h1>
                    <div className="flex gap-1 mt-[14px] items-center">
                      <img src={vector} alt="" className="w-[16px] h-[16px] " />
                      <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                        27 August, 2024
                      </h2>
                    </div>
                  </div>
                  <img
                    src={gaming}
                    alt=""
                    className="w-[140px] h-[140px] rounded-[6px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[-100px]">
            <div className="top relative items-center h-[30px] mb-[30px]">
              <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] w-[148px] rounded-[5px] z-[100]">
                <h1 className="text-btn text-[20px] font-[800] text-white">
                  Follow Us
                </h1>
              </button>

              <div className="w-[197px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[145px] top-[25px] z-[10]"></div>
            </div>
            <div className="flex gap-[7px] ">
              <div className="flex gap-[10px] w-[200px] mt-[40px] py-[10px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaFacebookF className="text-2xl" />
                <h1>Facebook</h1>
              </div>
              <div className="flex gap-[10px] w-[200px] mt-[40px] py-[10px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaTwitter className="text-2xl" />
                <h1>Twitter</h1>
              </div>
            </div>

            <div className="flex gap-[7px]  mt-[10px]">
              <div className="flex gap-[10px] w-[200px] py-[10px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaInstagram className="text-2xl" />
                <h1>Instagram</h1>
              </div>
              <div className="flex gap-[10px] py-[10px] w-[200px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaYoutube className="text-2xl" />
                <h1>YouTube</h1>
              </div>
            </div>
            <div className="flex gap-[7px] mt-[10px]">
              <div className="flex gap-[10px] py-[10px] w-[200px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaLinkedinIn className="text-2xl" />
                <h1>Linkedin</h1>
              </div>
              <div className="flex gap-[10px] py-[10px] w-[200px] rounded-[3px] px-[38px] items-center bg-[rgba(232,_241,_241,_1)]">
                <FaPinterest className="text-2xl" />
                <h1>Pinterest</h1>
              </div>
            </div>
            <div className="w-[410px] h-[300px] bg-[#183354] rounded-[5px] mt-[30px] letter flex flex-col items-center">
              <h1 className="text-[24px] text-white font-[800] mt-[50px]">
                Daily Newsletter
              </h1>
              <h2 className="text-[16px] text-white font-medium w-[218px] text-center mt-[25px]">
                Get all the top stories from Blogs to keep track.
              </h2>
              <div className="flex bg-[#f4796c] w-[260px] h-[50px] justify-between items-center px-[20px] rounded-[5px] mt-[25px]">
                <p className="text-[14px] font-normal text-white">
                  Enter your e-mail
                </p>
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlight;
