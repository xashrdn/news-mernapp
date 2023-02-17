import sunset from "../assets/Temujin/sunset.svg";
import clock from "../assets/Temujin/clock.svg";
import socials from "../assets/Temujin/socials.svg";
import logo from "../assets/Temujin/logo.svg";
import backgroundAd from "../assets/Temujin/backgroundAd.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="w-[100vw] h-12 shadow items-center flex justify-between">
        <div className="flex items-center space-x-5 ml-[7vw]">
          <img src={sunset} alt="" />
          <div className="text-xs ">15°C New York</div>
          <img src={clock} alt="" />
          <div className="text-xs "> Wednesday, 10 January 2021 </div>
          <div className="w-24 h-12 bg-[#F65050] items-center flex text-xs text-white justify-center">
            Breaking News
          </div>
          <div className="text-xs">
            Indonesia says located black box recorders from crashed plane
          </div>
        </div>
        <div className="mr-[7vw]">
          <img className="" src={socials} alt="" />
        </div>
      </div>
      <div className="ml-[7vw] mt-[6vh] w-[86vw] flex justify-between items-center">
        <img
          className="w-[140px] h-[30px] xl:w-[247px] xl:h-[60px]"
          src={logo}
          alt=""
        />
        <div
          style={{ backgroundImage: `url(${backgroundAd})` }}
          className="flex justify-between w-[60vw] left-0 p-5 bg-no-repeat bg-cover bg-center"
        >
          <div className="text-md text-[white]">
            Best Selling BLOG and MAGAZINE <br /> Theme of All Time <br />
            <span className="font-[Oswald] text-[#F65050]">
              Experience the change!
            </span>
          </div>
          <button
            style={{ transition: ".4s" }}
            className="w-80 h-16 bg-[#F65050] text-[white] text-3xl hover:bg-red-700"
          >
            Purchase now
          </button>
        </div>
      </div>
      <div className="flex items-center text-[white] ml-[7vw] mt-[6vh] w-[86vw] h-[7vh] bg-[#393939]">
        <Link to="/">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            Home
          </div>
        </Link>
        <Link to="/News">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            News
          </div>
        </Link>
        <Link to="/Entertainment">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            Entertainment
          </div>
        </Link>
        <Link to="/Sports">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            Sports
          </div>
        </Link>
        <Link to="/Life Style">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            Life Style
          </div>
        </Link>
        <Link to="/Video">
          <div
            style={{ transition: ".4s" }}
            className="p-7 text-xl hover:bg-[#F65050] "
          >
            Video
          </div>
        </Link>
      </div>
    </div>
  );
};
