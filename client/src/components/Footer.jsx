import logo from "../assets/newsCast.svg";
import LINE from "../assets/lline.svg";
import OneByOne from "../assets/cook.jpeg";
import socials from "../assets/Temujin/socials.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center mt-[2vh]">
      <div className="w-[100vw] bg-[#393939] h-[46vh] sm:h-[43vh] md:h-[35vh] lg:h-[36vh] xl:h-[38vh] 2xl:h-[32vh]">
        <div className="w-[86vw] 2xl:w-[86vw] ml-[7vw] mt-[2vh] sm:mt-[4vh] lg:flex lg:flex-row lg:justify-between">
          <div className="flex flex-col h-[18vh] md:h-[14vh] lg:h-[32vh] 2xl:h-[28vh]">
            <div
              style={{ backgroundImage: `url(${logo})` }}
              className="bg-contain bg-no-repeat h-[4vh] w-[86vw] lg:w-[18vw] lg:h-[8vh]"
            ></div>
            <p className="text-[white] text-[14px] sm:text-[16px] md:text-[18px] lg:w-[19vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.
            </p>
            <a href="https://www.instagram.com/tmjn_nasa/" target="_blank">
              <img className="h-[70px] w-[200px]" src={socials} alt="" />
            </a>
          </div>
          <div className="w-[100%] h-[1px] bg-red-500 mt-[0vh] lg:hidden"></div>
          <div className="hidden lg:block lg:w-[19vw]">
            <div className="flex flex-col justfy-between h-[40px]">
              <p className="text-white text-[20px]">Photo Gallery</p>
              <div className="w-[335px] h-[1px] bg-red-500 lg:w-[19vw]"></div>
            </div>
            <div className="flex mt-[1vh] flex-wrap gap-2 lg:w-[19vw]">
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
              <div className="w-[5.5vw]">
                <img src={OneByOne} alt="" />
              </div>
            </div>
          </div>
          <div className=" hidden lg:block w-[19vw]">
            <p className="text-[white] text-[20px]">Tags</p>
            <div className="w-[19vw] h-[1px] bg-red-500"></div>
            <div className="flex gap-1 h-[10px] text-[white] flex-wrap mt-[2vh]">
              <Link to="/">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px] bg-[#F65050] hover:bg-red-700"
                >
                  All
                </div>
              </Link>
              <Link to="/News">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px]  md:text-[14px] lg:text-[18px] bg-[#A56CBD] hover:bg-[#bd28eb]"
                >
                  News
                </div>
              </Link>
              <Link to="/Entertainment">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px] bg-[#2ECC71] hover:bg-[#13ed4d]"
                >
                  Entertainment
                </div>
              </Link>
              <Link to="/Sports">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px]  md:text-[14px] lg:text-[18px] bg-[#0088FF] hover:bg-[#0c30e8]"
                >
                  Sports
                </div>
              </Link>
              <Link to="/Life Style">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px] bg-[#997C00] hover:bg-[#595c04]"
                >
                  LifeStyle
                </div>
              </Link>
              <Link to="/Video">
                <div
                  style={{ transition: ".4s" }}
                  className="pl-[8px] pr-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px] bg-[#F65050] hover:bg-red-700"
                >
                  Video
                </div>
              </Link>
            </div>
          </div>
          <div className="h-[100%] flex flex-col md:mt-[1vh] lg:mt-[0vh]">
            <p className="text-white text-[20px]">Stay In Touch</p>
            <div className="hidden lg:block w-[19vw] h-[1px] bg-red-500"></div>
            <p className="text-white text-[14px] w-[82vw] lg:w-[19vw] sm:text-[16px] md:text-[18px]">
              To be updated with all the latest news, offers and special
              annoucements.
            </p>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your email address"
                className="outline-none p-[10px] text-[14px] text-center w-[86vw] h-[50px] lg:w-[19vw] mt-[1vh] "
              />
              <button
                style={{ transition: "0.4s" }}
                className=" mt-[10px] lg:w-[19vw] w-[86vw] bg-[#F65050] text-white font-bold h-[50px] hover:bg-red-500"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
