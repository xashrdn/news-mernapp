import sunset from "../assets/Temujin/sunset.svg";
import clock from "../assets/Temujin/clock.svg";
import socials from "../assets/Temujin/socials.svg";
import logo from "../assets/Temujin/logo.svg";
import backgroundAd from "../assets/Temujin/backgroundAd.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="w-[100vw] h-14 shadow items-center lg:space-x-6 flex">
        <div className="flex items-center ml-[7vw] gap-0 sm:gap-2">
          <img
            className="w-[20px] h-[10px] sm:w-[30px] sm:h-[20px]"
            src={sunset}
            alt=""
          />
          <div className="text-[8px] sm:text-[12px]">15°C New York</div>
          <img
            className="w-[20px] h-[10px] sm:w-[30px] sm:h-[20px]"
            src={clock}
            alt=""
          />
          <div className="text-[8px] sm:text-[12px]">
            {" "}
            Wednesday, 10 January 2021{" "}
          </div>
          <div className="w-20 h-14 bg-[#F65050] items-center justify-center flex text-[8px] sm:text-[12px] sm:w-28 lg:w-24 text-white">
            Breaking News
          </div>
          <div className="text-[0px] sm:text-[12px]">
            Indonesia says located black box recorders from crashed plane
          </div>
        </div>
        <div className="mr-[7vw] xl:mr-[0] xl:ml-[20vw]">
          <img className="" src={socials} alt="" />
        </div>
      </div>
      <div className="ml-[7vw] mt-[6vh] w-[86vw] flex justify-between items-center">
        <img
          className="h-[30px] sm:h-[40px] md:h-[55px] xl:h-[60px]"
          src={logo}
          alt=""
        />
        <div
          style={{ backgroundImage: `url(${backgroundAd})` }}
          className="flex items-center justify-between w-[50vw] h-[10vh] sm:h-[12vh] left-0 p-5 bg-no-repeat bg-cover bg-center"
        >
          <div className="text-[8px] sm:text-[12px] md:text-[16px] text-[white]">
            Best Selling BLOG and MAGAZINE <br /> Theme of All Time <br />
            <span className="font-[Oswald] text-[#F65050]">
              Experience the change!
            </span>
          </div>
          <button
            style={{ transition: ".4s" }}
            className="w-[20vw] h-[5vh] bg-[#F65050] text-[white] text-[8px] sm:text-[12px] md:text-[16px] hover:bg-red-700"
          >
            Purchase now
          </button>
        </div>
      </div>
      <div className="flex items-center text-[white] ml-[7vw] mt-[6vh] w-[86vw] h-[40px] sm:h-[46px] md:h-[51px] bg-[#393939]">
        <Link to="/">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px]  text-[8px]  sm:text-[12px] md:text-[16px] hover:bg-[#F65050] "
          >
            Home
          </div>
        </Link>
        <Link to="/News">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] md:text-[16px] hover:bg-[#F65050] "
          >
            News
          </div>
        </Link>
        <Link to="/Entertainment">
          <div
            style={{ transition: ".4s" }}
            className="pb-[14px] pt-[14px] pr-[5px] pl-[5px] text-[8px] md:text-[16px] sm:text-[12px] hover:bg-[#F65050] "
          >
            Entertainment
          </div>
        </Link>
        <Link to="/Sports">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] hover:bg-[#F65050] md:text-[16px]"
          >
            Sports
          </div>
        </Link>
        <Link to="/Life Style">
          <div
            style={{ transition: ".4s" }}
            className="pb-[14px] pt-[14px] pr-[5px] pl-[5px]   text-[8px] sm:text-[12px] md:text-[16px] hover:bg-[#F65050] "
          >
            Life Style
          </div>
        </Link>
        <Link to="/Video">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] hover:bg-[#F65050] md:text-[16px]"
          >
            Video
          </div>
        </Link>
      </div>
    </div>
  );
};
