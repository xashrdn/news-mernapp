import Ad from "../components/Ad";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export const Lifestyle = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex ml-[7vw]">
        <div className="flex flex-col w-[64vw]">
          <div className="mt-[5vh] w-[64vw]">
            <div className="flex items-align justify-between w-[86vw] xl:w-[61vw] ">
              <div>
                <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
                  Life Style
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
            <div className="w-[86vw] xl:w-[61vw] h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row xl:w-[61vw]">
              <div className="w-[86vw] lg:w-[41vw] xl:w-[40vw]">
                <img
                  className="w-[86vw] h-[40vh] mt-[2vh] md:h-[50vh]"
                  src="pelje.JPG"
                  alt=""
                />
                <div className="flex mt-[25px] text-[14px]">
                  Craig Bator - <span className="opacity-60">27 Dec 2020</span>
                </div>
                <div className="text-[#393939] font-bold text-2xl w-[84vw] lg:w-[100%] xl:w-[100%] xl:text-lg 2xl:text-[30px] 2xl:mt-[1vh]">
                  Solskjaer dismisses Klopp comments on Man Utd penalty record
                </div>
                <div className="text-[gray] w-[84vw] lg:w-[41vw]  xl:w-[100%] text-base font-thin 2xl:text-[20px] 2xl:mt-[1vh]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero porro nesciunt reiciendis omnis? Ipsam ab, magni ipsum
                  quidem incidunt consectetur, laborum quo qui unde consequuntur
                  dolorum natus? Quaerat, hic omnis.
                </div>
              </div>
              <div className="w-[86vw] mt-[3vh] lg:mt-[0vh] lg:w-[41vw] lg:ml-[4vw] xl:w-[40vw]">
                <img
                  className="w-[86vw] h-[40vh] mt-[2vh] md:h-[50vh]"
                  src="pelje.JPG"
                  alt=""
                />
                <div className="flex mt-[25px] text-[14px]">
                  Craig Bator - <span className="opacity-60">27 Dec 2020</span>
                </div>
                <div className="text-[#393939] font-bold text-2xl w-[84vw] lg:w-[100%]  xl:w-[100%] xl:text-lg 2xl:text-[30px] 2xl:mt-[1vh]">
                  Solskjaer dismisses Klopp comments on Man Utd penalty record
                </div>
                <div className="text-[gray] w-[84vw] xl:w-[100%] lg:w-[41vw]  text-base font-thin 2xl:text-[20px] 2xl:mt-[1vh]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero porro nesciunt reiciendis omnis? Ipsam ab, magni ipsum
                  quidem incidunt consectetur, laborum quo qui unde consequuntur
                  dolorum natus? Quaerat, hic omnis.
                </div>
              </div>
            </div>
            <div className="w-[86vw] lg:flex lg:flex-row mt-[3vh]">
              <div>
                <div className="w-[100%] flex h-[100px] mt-[3vh] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex h-[100px] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-[3vh] xl:mt-[0vh] xl:ml-[3vw]">
                <div className="w-[100%] flex h-[100px] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex h-[100px] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-[3vh] xl:mt-[0vh] xl:ml-[3vw]">
                <div className="w-[100%] flex h-[100px] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex h-[100px] xl:mt-[2vh]">
                  <img
                    className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] xl:w-[120px] xl:h-[93px] 2xl:w-[130px] 2xl:h-[100px]"
                    src="pelje.JPG"
                    alt=""
                  />
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator -{" "}
                      <span className="text-[gray]">27 Dec 2020</span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[16px] xl:leading-[22px] 2xl:text-[20px] w-[100%]">
                      South Africa hammer injury-hit Sri Lanka Player
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ad />
      </div>
      <Footer />
    </div>
  );
};
