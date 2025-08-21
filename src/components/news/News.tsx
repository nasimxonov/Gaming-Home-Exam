import fighter from "./images/weekly_post01.jpg.svg";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";
import arrow from "./images/SVG.svg";
import car from "./images/Link(13).svg";
import fight from "./images/Link(14).svg";
import animal from "./images/Link(15).svg";
import plane from "./images/Link(16).svg";
import action from "./images/Link(17).svg";

const News = () => {
  return (
    <section className="mt-[80px] mb-[66px]">
      <div className="my-con">
        <div className="flex gap-14">
          <div className="left">
            <div className="top relative items-center h-[30px] mb-[30px]">
              <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] px-[28px] rounded-[5px] z-[100]">
                <h1 className="text-btn text-[20px] font-[800] text-white">
                  Weekly Best News
                </h1>
              </button>

              <div className="w-[678px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[215px] top-[25px] z-[10]"></div>
            </div>
            <div className="mt-[40px] max-w-[890px] flex gap-10">
              <div className="max-w-[440px]">
                <img
                  src={fighter}
                  alt=""
                  className="w-[440px] h-[300px] rounded-[6px]"
                />
              </div>
              <div className="mt-[5px]">
                <button className="text-white text-[13px] font-semibold bg-[rgba(244,_121,_108,_1)] py-[4px] px-[10px] rounded-[3px]">
                  FIGHTER
                </button>
                <h1 className="mt-[15px] w-[340px] text-[rgba(24,_51,_84,_1)] text-[22px] font-bold">
                  Taking The Stress Out Of Design System Management
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
                <p className="text-[16px] font-normal w-[405px] text-[rgba(84,_94,_105,_1)] mt-[15px]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className="mt-[20px] flex rounded-[4px] justify-center h-[36px] items-center w-[138px] text-[rgba(24,_51,_84,_1))] border-[1px] border-[rgba(207,_207,_207,_1)]">
                  READ MORE
                  <img
                    src={arrow}
                    alt=""
                    className="w-[10px] h-[10px] text-end"
                  />
                </button>
              </div>
            </div>
            <div className="mt-[20px] max-w-[890px] flex gap-10">
              <div className="max-w-[440px]">
                <img
                  src={car}
                  alt=""
                  className="w-[440px] h-[300px] rounded-[6px]"
                />
              </div>
              <div className="mt-[5px]">
                <button className="text-white text-[13px] font-semibold bg-[rgba(244,_121,_108,_1)] py-[4px] px-[10px] rounded-[3px]">
                  RACING
                </button>
                <h1 className="mt-[15px] w-[381px] text-[rgba(24,_51,_84,_1)] text-[22px] font-bold">
                  Boosting Productivity For Designers With Efficient Tools
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
                <p className="text-[16px] font-normal w-[405px] text-[rgba(84,_94,_105,_1)] mt-[15px]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className="mt-[20px] flex rounded-[4px] justify-center h-[36px] items-center w-[138px] text-[rgba(24,_51,_84,_1))] border-[1px] border-[rgba(207,_207,_207,_1)]">
                  READ MORE
                  <img
                    src={arrow}
                    alt=""
                    className="w-[10px] h-[10px] text-end"
                  />
                </button>
              </div>
            </div>
            <div className="mt-[20px] max-w-[890px] flex gap-10">
              <div className="max-w-[440px]">
                <img
                  src={fight}
                  alt=""
                  className="w-[440px] h-[300px] rounded-[6px]"
                />
              </div>
              <div className="mt-[5px]">
                <button className="text-white text-[13px] font-semibold bg-[rgba(244,_121,_108,_1)] py-[4px] px-[10px] rounded-[3px]">
                  ACTION
                </button>
                <h1 className="mt-[15px] w-[393px] text-[rgba(24,_51,_84,_1)] text-[22px] font-bold">
                  How To Prioritize User Security When Collecting Offline Data
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
                <p className="text-[16px] font-normal w-[405px] text-[rgba(84,_94,_105,_1)] mt-[15px]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className="mt-[20px] flex rounded-[4px] justify-center h-[36px] items-center w-[138px] text-[rgba(24,_51,_84,_1))] border-[1px] border-[rgba(207,_207,_207,_1)]">
                  READ MORE
                  <img
                    src={arrow}
                    alt=""
                    className="w-[10px] h-[10px] text-end"
                  />
                </button>
              </div>
            </div>
            <div className="mt-[20px] max-w-[890px] flex gap-10">
              <div className="max-w-[440px]">
                <img
                  src={animal}
                  alt=""
                  className="w-[440px] h-[300px] rounded-[6px]"
                />
              </div>
              <div className="mt-[5px]">
                <button className="text-white text-[13px] font-semibold bg-[rgba(244,_121,_108,_1)] py-[4px] px-[10px] rounded-[3px]">
                  ANIMATION
                </button>
                <h1 className="mt-[15px] w-[338px] text-[rgba(24,_51,_84,_1)] text-[22px] font-bold">
                  The Anatomy Of Themed Design System Components
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
                <p className="text-[16px] font-normal w-[405px] text-[rgba(84,_94,_105,_1)] mt-[15px]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className="mt-[20px] flex rounded-[4px] justify-center h-[36px] items-center w-[138px] text-[rgba(24,_51,_84,_1))] border-[1px] border-[rgba(207,_207,_207,_1)]">
                  READ MORE
                  <img
                    src={arrow}
                    alt=""
                    className="w-[10px] h-[10px] text-end"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top relative items-center h-[30px] mb-[30px]">
              <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] w-[148px] rounded-[5px] z-[100]">
                <h1 className="text-btn text-[20px] font-[800] text-white">
                  Hot News
                </h1>
              </button>

              <div className="w-[197px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[145px] top-[25px] z-[10]"></div>
            </div>
            <div className="w-[330px] mt-[30px]">
              <img
                src={plane}
                alt=""
                className="w-[330px] h-[220px] rounded-[5px]"
              />
              <div className="mt-[23px]">
                <button className="text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)] py-[4px] px-[10px] rounded-[3px]">
                  FIGHTER
                </button>
                <h1 className="mt-[8px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)] w-[324px]">
                  Racing Games Browned Buttadert Cookies Daily Breakfast
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
              <div className="mt-[20px]">
                <button className="text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)] py-[4px] px-[10px] rounded-[3px]">
                  ACTION
                </button>
                <h1 className="mt-[8px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)] w-[308px]">
                  The Anatomy Of Themed Design System Components
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
              <div className="mt-[20px]">
                <button className="text-[13px] font-semibold text-[rgba(109,_117,_127,_1)] border-[1px] border-[rgba(184,_193,_205,_1)] py-[4px] px-[10px] rounded-[3px]">
                  STORY
                </button>
                <h1 className="mt-[8px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)] w-[309px]">
                  Taking The Stress Out Of Design System Management
                </h1>
                <div className="flex gap-1 items-center mt-[15px]">
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
              <div className="mt-[58px]">
                <img src={action} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[100px] py-[73px] px-[95px] bg-[rgba(232,_241,_241,_1)] rounded-[6px] items-center ">
          <h1 className="text-[24px] font-bold w-[267px]">
            Get Our Latest Gaming News & Update
          </h1>
          <div className="w-[300px] h-[50px] flex items-center justify-center bg-white rounded-[6px] ml-[48px]">
            <input
              type="text"
              placeholder="Name"
              className="w-[260px] h-[17px] outline-none text-[rgba(111,_111,_111,_1)]"
            />
          </div>
          <div className="w-[300px] h-[50px] flex items-center justify-center bg-white rounded-[6px] ml-[7px]">
            <input
              type="text"
              placeholder="E-mail"
              className="w-[260px] h-[17px] outline-none text-[rgba(111,_111,_111,_1)]"
            />
          </div>
          <button className="ml-[7px] bg-[rgba(244,_121,_108,_1)] text-white text-[14px] font-bold py-[14px] px-[45px] rounded-[4px]">
            Submit Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
