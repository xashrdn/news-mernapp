import { Navbar } from "../components/Navbar";
import line2 from "../assets/Temujin/line2.svg";
import { Pagebutton } from "../components/pagebutton";
import epic from "../assets/Temujin/epic.svg";
import play from "../assets/Temujin/play.svg";
import videopicture from "../assets/Temujin/videopicture.svg";
import { Test2 } from "./Test2";

export const Video = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-[7vw] mt-[5vh] w-[86vw]">
        <div className="flex items-align justify-between">
          <p className="text-3xl text-[#F65050]">Video</p>
          <Pagebutton />
        </div>
        <img className="w-[86vw]" src={line2} alt="" />
      </div>
      <div className="ml-[7vw] mt-[5vh]">
        <div
          style={{ backgroundImage: `url(${epic})` }}
          className="w-[1370px] h-[50vh] bg-no-repeat bg-cover bg-center"
        >
          <p className="text-lg font-normal left-[45px] top-[331px] relative  text-[white]">
            Craig Bator - 27 Dec 2020
          </p>
          <p className="text-6xl font-semibold relative left-[45px] top-[331px] text-[white]">
            Play This Game for Free on Epic Store This Weekend
          </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <img
              className="relative left-[655px] top-[10vh]"
              src={play}
              alt=""
            />
          </a>
        </div>

          <div className="flex flex-wrap gap-10 w-[70vw]">
    
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
            <Test2
              image={videopicture}
              image1={play}
              text={"Craig Bator"}
              text2={"27 Dec 2020"}
              text3={"At Value-Focused Hotels, the Free Breakfast Gets Bigger"}
            />
          </div>
        </div>  
    </div>
  );
};
