import sunset from "../assets/Temujin/sunset.svg";
import clock from "../assets/Temujin/clock.svg";
import { User } from "../context/UserContext";
import logo from "../assets/Temujin/logo.svg";
import backgroundAd from "../assets/Temujin/backgroundAd.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const Navbar = () => {
  const { loggedIn } = useContext(User);
  return (
    <div className="w-[100vw]">
      <div className=" h-14 shadow items-center justify-between flex">
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
            Wednesday, 10 January 2021
          </div>
          <div className="w-20 h-14 bg-[#F65050] items-center justify-center flex text-[8px] sm:text-[12px] sm:w-28 lg:w-24 text-white">
            Breaking News
          </div>
        </div>
        {loggedIn ? (
          <div className="flex flex-row mr-[7vw] gap-2">
            <div
              style={{ transition: ".4s" }}
              className="ml-[1vw] rounded flex  border-black justify-center items-align hover:bg-red-500 hover:text-white hover:border-none border-[0.1px] w-[18vw] md:w-[14vw] lg:w-[14vw] p-1"
            >
              {localStorage.getItem("name")}
            </div>

            <Link to="/createNews">
              <div
                style={{ transition: ".4s" }}
                className=" rounded flex  border-black justify-center items-align hover:bg-red-500 hover:text-white hover:border-none border-[0.1px] w-[14vw] md:w-[10vw] lg:w-[5vw] p-1"
              >
                Post
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row mr-[7vw] gap-2">
            <Link to="/login">
              <div
                style={{ transition: ".4s" }}
                className="ml-[1vw] rounded flex  border-black justify-center items-align hover:bg-red-500 hover:text-white hover:border-none border-[0.1px] w-[14vw] md:w-[10vw] lg:w-[5vw] p-1"
              >
                Login
              </div>
            </Link>
            <Link to="/register">
              <div
                style={{ transition: ".4s" }}
                className=" rounded flex  border-black justify-center items-align hover:bg-red-500 hover:text-white hover:border-none border-[0.1px] w-[14vw] md:w-[10vw] lg:w-[5vw] p-1"
              >
                Register
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="ml-[7vw] mt-[6vh] w-[86vw] flex justify-between items-center">
        <img
          className="h-[30px] sm:h-[40px] md:h-[55px] xl:h-[60px] 2xl:h-[80px]"
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
            className="w-[20vw] h-[5vh] bg-[#F65050] text-[white] text-[8px] sm:text-[12px] md:text-[16px] xl:text-[22px] 2xl:text-[24px] sm:w-[15vw] sm:h-[3vh] lg:h-[5vh] lg:text-[19px] hover:bg-red-700"
          >
            Purchase now
          </button>
        </div>
      </div>
      <div className="flex items-center text-[white] ml-[7vw] mt-[6vh] w-[86vw] h-[40px] sm:h-[46px] md:h-[51px] xl:h-[58px] bg-[#393939]">
        <Link to="/">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px]  text-[8px]  sm:text-[12px] md:text-[16px] xl:text-[20px] hover:bg-[#F65050] "
          >
            Home
          </div>
        </Link>
        <Link to="/news">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] md:text-[16px] xl:text-[20px] hover:bg-[#F65050] "
          >
            News
          </div>
        </Link>
        <Link to="/entertainment">
          <div
            style={{ transition: ".4s" }}
            className="pb-[14px] pt-[14px] pr-[5px] pl-[5px] text-[8px] md:text-[16px] xl:text-[20px] sm:text-[12px]  hover:bg-[#F65050] "
          >
            Entertainment
          </div>
        </Link>
        <Link to="/sports">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] hover:bg-[#F65050] xl:text-[20px] md:text-[16px]"
          >
            Sports
          </div>
        </Link>
        <Link to="/lifeStyle">
          <div
            style={{ transition: ".4s" }}
            className="pb-[14px] pt-[14px] pr-[5px] pl-[5px] xl:text-[20px]  text-[8px] sm:text-[12px] md:text-[16px] hover:bg-[#F65050] "
          >
            Life Style
          </div>
        </Link>
        <Link to="/video">
          <div
            style={{ transition: ".4s" }}
            className="p-[14px] text-[8px] sm:text-[12px] xl:text-[20px] hover:bg-[#F65050] md:text-[16px]"
          >
            Video
          </div>
        </Link>
      </div>
    </div>
  );
};
