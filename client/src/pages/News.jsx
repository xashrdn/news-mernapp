import { Navbar } from "../components/Navbar";
import line1 from "../assets/Temujin/line1.svg";
import newsbusiness from "../assets/Temujin/newsbusiness.svg";
import newspicture from "../assets/Temujin/newspicture.svg";
import { Test } from "./Test";
import { Pagebutton } from "../components/pagebutton";

export const News = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-[7vw] mt-[5vh] w-[86vw]">
        <div className="flex items-align justify-between w-[1370px]">
          <div>
            <p className="text-3xl text-[#F65050]">News</p>
          </div>
          <Pagebutton />
        </div>
        <img src={line1} alt="" />
      </div>
      <div className="flex ml-[7vw] flex-row">
        <div className=" mt-[2vh]">
          <img src={newsbusiness} alt="" />
          <div className="mt-[5vh]">
            <div>
              Craig Bator - <span className="text-[gray]">27 Dec 2020 </span>
            </div>
            <div className="text-[#393939] text-3xl font-medium w-[30vw]">
              Now Is the Time to Think About Your Small Business Success
            </div>
            <div className="text=[gray] font-extralight w-[29vw] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              lobortis augue condimentum maecenas. Metus at in fames vitae
              posuere ut vel vulputate....
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[50vh] overflow-scroll">
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
        {/* <div className="ml-[2vw] w-[100%] flex h-[100px]">
          <img src={newspicture} alt="" />
          <div className="ml-[1vw]">
            <div className="font-normal text-base">
              Craig Bator - <span className="text-[gray]">27 Dec 2020 </span>
            </div>
            <div className="text-[#393939] text-xl font-medium w-[23vw]">
              Penn’s expanding political climate gears up for 2020 election
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
