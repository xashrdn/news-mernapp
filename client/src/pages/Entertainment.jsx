import line from "../assets/line.svg";
import bgr from "../assets/Image.svg";
import jijig from "../assets/imgg.svg";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const Entertaiment = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}  
    >
      <Navbar />
        <div className="w-[86vw] mt-[5vh] ml-[7vw]">
          <div>
            <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
              Entertainment
            </p>
            <div className="w-[86vw] h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col">
            <div
              style={{
                backgroundImage: `url(${bgr})`
              }}
              className="w-[86vw] h-[30vh] bg-cover bg-center bg-no-repeat pl-[3vw] pt-[19vh] sm:pt-[22vh] mt-[2%] flex flex-col text-white justify-between"
            >
              <div className="h-[17vh]">
                <div className="font-bold text-[14px] leading-[16px] sm:text lg:text-[22px]">
                  Amanda Seyfried became ‘really obsessed’ with ghost stories
                </div>
                <div className="text-[10px] lg:text-[14px]">
                  Hollywood actress Amanda Seyfried has recalled the time when
                  she
                  became obsessed with ghost stories
                </div>
              </div>
            </div>
            <div>
              <div className="flex h-[50&]">
                <div
                  className="flex flex-row w-[100%] mt-[2%]"
                >
                  <div
                    style={{
                      backgroundImage: `url(${jijig})`
                    }}
                    className="bg-cover bg-center bg-no-repeat h-[10vh] w-[50vw] lg:w-[12vw] lg:h-[12vh]"
                  ></div>
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator - <span className="text-[gray]">27 Dec 2020 </span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-bold xl:text-[12px] xl:leading-[22px] 2xl:text-[16px] w-[100%]">
                      Amanda Seyfried became ' really obssessed ' with ghost stories
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[50&]">
                <div
                  className="flex flex-row w-[100%] mt-[2%]"
                >
                  <div
                    style={{
                      backgroundImage: `url(${jijig})`
                    }}
                    className="bg-cover bg-center bg-no-repeat h-[10vh] w-[50vw] lg:w-[12vw] lg:h-[12vh]"
                  ></div>
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator - <span className="text-[gray]">27 Dec 2020 </span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-bold xl:text-[12px] xl:leading-[22px] 2xl:text-[16px] w-[100%]">
                      Amanda Seyfried became ' really obssessed ' with ghost stories
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[50&]">
                <div
                  className="flex flex-row w-[100%] mt-[2%]"
                >
                  <div
                    style={{
                      backgroundImage: `url(${jijig})`
                    }}
                    className="bg-cover bg-center bg-no-repeat h-[10vh] w-[50vw] lg:w-[12vw] lg:h-[12vh]"
                  ></div>
                  <div className="ml-[1vw]">
                    <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
                      Craig Bator - <span className="text-[gray]">27 Dec 2020 </span>
                    </div>
                    <div className="text-[#393939] text-sm sm:text-lg font-bold xl:text-[12px] xl:leading-[22px] 2xl:text-[16px] w-[100%]">
                      Amanda Seyfried became ' really obssessed ' with ghost stories
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
      </div>
      <Footer />
    </div>
  );
};
