import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import epic from "../assets/Temujin/epic.svg";
import play from "../assets/Temujin/play.svg";
import videopicture from "../assets/Temujin/videopicture.svg";
import { Test2 } from "./Test2";
import Ad from "../components/Ad";
import Footer from "../components/Footer";

export const Video = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div>
          <div className="ml-[7vw] mt-[5vh] w-[61vw]">
            <div className="flex items-align justify-between w-[86vw] xl:w-[61vw] ">
              <div>
                <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
                  Video
                </p>
              </div>
              <div className="flex gap-1 h-[10px] text-[white]">
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
            <div className="w-[86vw] h-[1px] bg-gray-400"></div>
          </div>
          <div className="ml-[7vw] mt-[5vh]">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <div
                style={{ backgroundImage: `url(${epic})` }}
                className="w-[86vw] h-[20vh] sm:h-[30vh] lg:h-[50vh] xl:w-[61vw] bg-no-repeat pl-[3vw] pt-[19vh] sm:pt-[22vh] lg:pt-[40vh] xl:pt-[32vh] bg-cover bg-center h-[90%] flex justify-between"
              >
                <div>
                  <p className="text-lg font-normal text-[white]">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <p className="text-2xl font-semibold text-[white] xl:text-5xl">
                    Play This Game for Free on Epic Store This Weekend
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-wrap gap-10 w-[61vw] mt-[7vh] lg:w-[86vw] xl:w-[61vw]">
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
              <Test2
                image={videopicture}
                image1={play}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  "At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                }
              />
            </div>
          </div>
        </div>
        <div className="ml-[3vw]">
          <Ad />
          <Ad />
          <Ad />
        </div>
      </div>
      <Footer />
    </div>
  );
};
