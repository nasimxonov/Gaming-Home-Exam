import { Link } from "react-router-dom";
import headerLogo from "./images/w_logo.png.svg";
import { HiBars3 } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import likeCount from "./images/Item → Link.svg";
import shopCount from "./images/Item → Link(1).svg";
import profile from "./images/Icon.svg";
import "../../index.css";

const Header = () => {
  return (
    <header>
      <div className="header-top bg-[#12253e]">
        <div className="my-con flex items-center justify-between py-[25px]">
          <div className="hedaer-top-left flex gap-7">
            <Link to={"/"}>
              <img src={headerLogo} alt="header-logo" />
            </Link>
            <button className="text-white text-3xl">
              <HiBars3 />
            </button>
          </div>
          <div className="header-top-right flex items-center gap-5">
            <div className="right flex justify-between w-[425px] h-[45px] items-center px-5 border-[2px] border-[#3a506b] rounded-[30px]">
              <form action="" className="flex justify-between w-[100%]">
                <input
                  type="text"
                  placeholder="Search here ..."
                  className="bg-transparent py-[14px] outline-none text-white"
                />
                <button className="text-white text-2xl">
                  <IoSearchSharp />
                </button>
              </form>
            </div>
            <div className="left flex gap-4 text-white text-[20px]">
              <button>
                <FaFacebookF />
              </button>
              <button>
                <FaTwitter />
              </button>
              <button>
                <FaInstagram />
              </button>
              <button>
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-botom bg-[#183354]">
        <div className="my-con flex items-center justify-between py-5">
          <div className="left flex gap-6">
            <Link
              to={"/"}
              className="text-[#f4796c] flex items-center gap-1 text-[16px]"
            >
              Home
              <IoIosArrowDown className="text-[12px]" />
            </Link>
            <Link
              to={"/"}
              className="text-white flex items-center gap-1 text-[16px]"
            >
              About Us
              <IoIosArrowDown className="text-[12px]" />
            </Link>
            <Link
              to={"/"}
              className="text-white flex items-center gap-1 text-[16px]"
            >
              Features
              <IoIosArrowDown className="text-[12px]" />
            </Link>
            <Link
              to={"/"}
              className="text-white flex items-center gap-1 text-[16px]"
            >
              Categories
              <IoIosArrowDown className="text-[12px]" />
            </Link>
            <Link
              to={"/"}
              className="text-white flex items-center gap-1 text-[16px]"
            >
              Contact
              <IoIosArrowDown className="text-[12px]" />
            </Link>
          </div>
          <div className="right flex gap-3 items-center mr-1 pr-[50px]">
            <div className="mt-[6px]">
              <img src={likeCount} alt="" />
            </div>
            <img src={shopCount} alt="" />
            <img src={profile} alt="" />
            <button className="text-white text-[16px] font-bold">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
