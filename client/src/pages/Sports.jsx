import Ad from "../components/Ad";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Sports = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex ml-[7vw]">
        <div className="flex flex-col w-[64vw]">
          <div className="mt-[43px] w-[60vw]">
            <div className="flex items-align justify-between w-[86vw] xl:w-[61vw] ">
              <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
                Sports
              </p>
            </div>
            <div className="h-[1px] w-full bg-black mt-3"></div>
            <div className="flex">
              <div className="w-[580px]">
                <img
                  className="w-[560px] h-[330px] mt-[41px]"
                  src="pelje.JPG"
                  alt=""
                />
                <div className="flex mt-[25px] text-[14px]">
                  Craig Bator - <span className="opacity-60">27 Dec 2020</span>
                </div>
                <div className="font-sans-serif text-[24px] mt-[12px] leading-7">
                  Solskjaer dismisses Klopp comments on Man Utd penalty record
                </div>
                <div className="mt-[14px] opacity-60 text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero porro nesciunt reiciendis omnis? Ipsam ab, magni ipsum
                  quidem incidunt consectetur, laborum quo qui unde consequuntur
                  dolorum natus? Quaerat, hic omnis.
                </div>
              </div>
              <div className="flex flex-col mt-[41px]">
                <div className="ml-[30px] flex flex-col">
                  <div className="flex mb-[17px] w-[500px]">
                    <img
                      className="w-[130px] h-[100px]"
                      src="pelje.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div className="text-[14px]">
                        Craig Bator -{" "}
                        <span className="opacity-60">27 Dec 2020</span>
                      </div>
                      <div className="text-[17px]">
                        South Africa hammer injury-hit Sri Lanka Player
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[30px] flex flex-col">
                  <div className="flex mb-[17px] w-[500px]">
                    <img
                      className="w-[130px] h-[100px]"
                      src="pelje.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div className="text-[14px]">
                        Craig Bator -{" "}
                        <span className="opacity-60">27 Dec 2020</span>
                      </div>
                      <div className="text-[17px]">
                        South Africa hammer injury-hit Sri Lanka Player
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[30px] flex flex-col">
                  <div className="flex mb-[17px] w-[500px]">
                    <img
                      className="w-[130px] h-[100px]"
                      src="pelje.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div className="text-[14px]">
                        Craig Bator -{" "}
                        <span className="opacity-60">27 Dec 2020</span>
                      </div>
                      <div className="text-[17px]">
                        South Africa hammer injury-hit Sri Lanka Player
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[30px] flex flex-col">
                  <div className="flex mb-[17px] w-[500px]">
                    <img
                      className="w-[130px] h-[100px]"
                      src="pelje.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div className="text-[14px]">
                        Craig Bator -{" "}
                        <span className="opacity-60">27 Dec 2020</span>
                      </div>
                      <div className="text-[17px]">
                        South Africa hammer injury-hit Sri Lanka Player
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[30px] flex flex-col">
                  <div className="flex mb-[17px] w-[500px]">
                    <img
                      className="w-[130px] h-[100px]"
                      src="pelje.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div className="text-[14px]">
                        Craig Bator -{" "}
                        <span className="opacity-60">27 Dec 2020</span>
                      </div>
                      <div className="text-[17px]">
                        South Africa hammer injury-hit Sri Lanka Player
                      </div>
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
