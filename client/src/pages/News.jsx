import { Navbar } from "../components/Navbar";
import newsbusiness from "../assets/Temujin/newsbusiness.svg";
import newspicture from "../assets/Temujin/newspicture.svg";
import { Test } from "./Test";
import Ad from "../components/Ad";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <div className="flex flex-row">
        <div>
          <div className="ml-[7vw] mt-[5vh] w-[64vw]">
            <div className="flex items-align justify-between w-[86vw] xl:w-[61vw] ">
              <div>
                <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">News</p>
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
            <div className="w-[86vw] lg:w-[61vw] h-[1px] bg-gray-400"></div>
          </div>
          <div className="ml-[7vw] xl:flex xl:flex-row">
            <div className=" mt-[2vh]">
              <img className="w-[86vw] xl:w-[35vw]" src={newsbusiness} alt="" />
              <div className="mt-[5vh] xl:w-[35vw]">
                <div>
                  Craig Bator -{" "}
                  <span className="text-[gray]">27 Dec 2020 </span>
                </div>
                <div className="text-[#393939] font-bold text-2xl w-[84vw] xl:w-[100%] xl:text-lg 2xl:text-[30px] 2xl:mt-[1vh]">
                  Now Is the Time to Think About Your Small Business Success
                </div>
                <div className="text-[gray] w-[84vw] xl:w-[100%] text-base font-thin 2xl:text-[20px] 2xl:mt-[1vh]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus lobortis augue condimentum maecenas. Metus at in
                  fames vitae posuere ut vel vulputate....
                </div>
              </div>
            </div>
             <div className="flex flex-col h-[30vh] xl:ml-[3vw] xl:w-[23vw] xl:h-[50vh] overflow-scroll overflow-x-hidden">
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={ 
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              />
              <Test
                image={newspicture}
                text={"Craig Bator"}
                text2={"27 Dec 2020"}
                text3={
                  " Penn’s expanding political climate gears up for 2020 election"
                }
              /> 
            </div>
          </div>
        </div>
        <div>
          <Ad />
        </div>
      </div>
     </div>
  );
};
