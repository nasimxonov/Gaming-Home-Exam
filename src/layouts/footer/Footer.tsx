import { Link } from "react-router-dom";
import zaira from "./images/w_logo.png(1).svg";
import bold from "./images/Background+Shadow.svg";
import br from "./images/Button.svg";

const Footer = () => {
  return (
    <footer className="bg-[rgba(12,_22,_34,_1)] relative">
      <div className="my-con py-[50px]">
        <div className="flex">
          <div>
            <img src={zaira} alt="" className="w-[171px] h-[50px]" />
            <p className="text-[rgba(186,_204,_225,_1)] mt-[20px] text-[16px] font-normal w-[265px]">
              Browned butter and brown sugar caramelly goodness, crispy edges
              thick and soft centers and melty little puddles of chocolate.
            </p>
          </div>
          <div className="flex flex-col ml-[65px] w-[190px]">
            <h1 className="text-[20px] font-extrabold text-[rgba(255,_255,_255,_1)]">
              Company
            </h1>
            <div className="w-[32px] h-[5px] bg-[rgba(244,_121,_108,_1)] mt-[5px]">
              _
            </div>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              About Us
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              The Test Kitchen
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Podcast
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Events
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Jobs
            </Link>
          </div>
          <div className="flex flex-col ml-[65px] w-[190px]">
            <h1 className="text-[20px] font-extrabold text-[rgba(255,_255,_255,_1)]">
              Get Help
            </h1>
            <div className="w-[32px] h-[5px] bg-[rgba(244,_121,_108,_1)] mt-[5px]">
              _
            </div>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Contact & Faq
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Oders & Returns
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Gift Cards
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Register
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Catalog
            </Link>
          </div>
          <div className="flex flex-col ml-[65px] w-[190px]">
            <h1 className="text-[20px] font-extrabold text-[rgba(255,_255,_255,_1)]">
              Explore
            </h1>
            <div className="w-[32px] h-[5px] bg-[rgba(244,_121,_108,_1)] mt-[5px]">
              _
            </div>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              The Shop
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Recipes
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Food
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Travel
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Hotline
            </Link>
          </div>
          <div className="flex flex-col ml-[65px] w-[190px]">
            <h1 className="text-[20px] font-extrabold text-[rgba(255,_255,_255,_1)]">
              Follow Us On
            </h1>
            <div className="w-[32px] h-[5px] bg-[rgba(244,_121,_108,_1)] mt-[5px]">
              _
            </div>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Twitter
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Instagram
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Youtube
            </Link>
            <Link
              to={"/"}
              className="text-[15px] font-medium text-[rgba(186,_204,_225,_1)] mt-[10px]"
            >
              Pinterest
            </Link>
          </div>
        </div>
        <div className="flex justify-between pt-[136px]">
          <h1 className="text-[16px] font-normal text-[rgba(124,_145,_170,_1)]">
            Privacy Policy & Terms * Site Credits
          </h1>
          <h2 className="text-[16px] font-normal text-[rgba(124,_145,_170,_1)]">
            © 2023 All Rights Reserved
          </h2>
        </div>
      </div>
      <div className="h-[1px] bg-[rgba(32,_46,_63,_1)] w-[100%] absolute bottom-28"></div>
      <div className="flex items-center justify-center flex-col absolute right-[10px] top-[170px]">
        <img src={bold} alt="" className="bg-transparent" />
        <button>
          <img src={br} alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
