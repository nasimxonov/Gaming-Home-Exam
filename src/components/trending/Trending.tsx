import "./style.css";
import profile from "./images/Vector(1).svg";
import calendar from "./images/Vector(2).svg";
import arrow from "./images/Vector.svg";

const Trending = () => {
  return (
    <section className="w-full flex justify-center py-[60px] trending">
      <div className="w-[1120px] p-[30px] rounded-[6px]">
        <div className="flex items-center justify-between h-[50px] mb-[30px] w-full">
          <button className="btn-rhomb bg-[#f4796c] py-[8px] px-[28px] rounded-[5px] z-[100]">
            <h1 className="text-btn text-[24px] font-[800] text-white">
              Exciting Categories
            </h1>
          </button>

          <div className="flex-grow w-[3px] h-[5px] border-t border-[rgba(223,223,223,1)] mx-[20px]"></div>

          <button className="flex items-center gap-1 px-[15px] py-[5px] bg-[rgba(255,255,255,0.1)] text-white text-xs font-semibold rounded-[4px]">
            VIEW ALL <img src={arrow} alt="arrow" />
          </button>
        </div>

        <div className="flex gap-[30px]">
          <div className="w-[630px]  flex flex-col gap-[16px]">
            <div className="relative rounded-[8px] overflow-hidden">
              <iframe
                className="w-full h-[300px]"
                src="https://www.youtube.com/embed/GosbsR60tSw"
                title="Main Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-[3px] w-fit font-semibold tracking-wide">
              FIGHTER
            </span>

            <h2 className="text-white text-[20px] font-bold leading-6">
              Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#B4C7DD] font-semibold">
              <div className="flex items-center gap-1">
                <img src={profile} alt="admin" className="w-[14px]" />
                <span>BY ADMIN</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={calendar} alt="calendar" className="w-[14px]" />
                <span>27 AUGUST, 2024</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] w-[500px]">
            {/* 1-video */}
            <div className="flex gap-4">
              <div className="relative w-[170px] h-[140px] rounded-[6px] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GosbsR60tSw"
                  title="Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-1">
                <span className="bg-white/10 text-white text-xs px-2 py-[2px] rounded-[3px] w-fit font-semibold">
                  ANIMATION
                </span>
                <h3 className="text-white text-sm font-semibold leading-[18px] max-w-[320px]">
                  A Guide To Getting Data Visualization Right
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#B4C7DD] font-semibold">
                  <div className="flex items-center gap-1">
                    <img src={profile} alt="admin" className="w-[14px]" />
                    <span>BY ADMIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={calendar} alt="calendar" className="w-[14px]" />
                    <span>27 AUGUST, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-[170px] h-[140px] rounded-[6px] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  title="Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-1">
                <span className="bg-white/10 text-white text-xs px-2 py-[2px] rounded-[3px] w-fit font-semibold">
                  ACTION
                </span>
                <h3 className="text-white text-sm font-semibold leading-[18px] max-w-[320px]">
                  Fluid Typography: Predicting A Problem With Your User’s
                  Zoom-In
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#B4C7DD] font-semibold">
                  <div className="flex items-center gap-1">
                    <img src={profile} alt="admin" className="w-[14px]" />
                    <span>BY ADMIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={calendar} alt="calendar" className="w-[14px]" />
                    <span>27 AUGUST, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-[170px] h-[140px] rounded-[6px] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-1">
                <span className="bg-white/10 text-white text-xs px-2 py-[2px] rounded-[3px] w-fit font-semibold">
                  RACING
                </span>
                <h3 className="text-white text-sm font-semibold leading-[18px] max-w-[320px]">
                  Deploying CSS Logical Properties On Web Apps
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#B4C7DD] font-semibold">
                  <div className="flex items-center gap-1">
                    <img src={profile} alt="admin" className="w-[14px]" />
                    <span>BY ADMIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={calendar} alt="calendar" className="w-[14px]" />
                    <span>27 AUGUST, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
