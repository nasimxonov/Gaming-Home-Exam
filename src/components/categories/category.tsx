import "./cat.css";
import reklama from "./images/Link7.svg";
const Category = () => {
  return (
    <section className="mt-[60px] mb-[70px]"> 
      <div className="my-con">
        <div className="relative items-center h-[30px] mb-[30px]">
          <button className="absolute btn-rhomb bg-[#f4796c] py-[8px] px-[28px] rounded-[5px] z-[100]">
            <h1 className="text-btn text-[24px] font-[800] text-white">
              Exciting Categories
            </h1>
          </button>

          <div className="w-[1055px] h-[5px] border-[1px] border-[rgba(223,_223,_223,_1)] absolute left-[230px] top-[25px] z-[10]"></div>
        </div>
        <div className="flex relative gap-[30px] mt-[50px]">
          <div className="showcase-bg-1 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              ACTION
            </button>
          </div>
          <div className="showcase-bg-2 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              GAMING
            </button>
          </div>
          <div className="showcase-bg-3 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              RACING
            </button>
          </div>
          <div className="showcase-bg-4 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              ANIMATION
            </button>
          </div>
          <div className="showcase-bg-5 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              FIGHTER
            </button>
          </div>
          <div className="showcase-bg-6 min-w-[180px] min-h-[180px] rounded-[30px] flex items-end justify-center">
            <button className="mb-[30px] text-[rgba(255,_255,_255,_1)] text-[13px] font-[600] py-[4px] px-[10px] bg-[rgba(255,255,255,0.3)] cursor-pointer rounded-[3px]">
              STORY
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[70px]">
          <img src={reklama} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Category;
