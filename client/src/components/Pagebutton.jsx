import { Link } from "react-router-dom";


export const Pagebutton = () => {
  return (
    <div className="flex gap-5 h-[30px] text-[white]">
      <Link to="/">
        <div
          style={{ transition: ".4s" }}
          className=" pl-3 pr-3 bg-[#F65050] hover:bg-red-700"
        >
          All
        </div>
      </Link>
      <Link to="/News">
        <div
          style={{ transition: ".4s" }}
          className="pl-3 pr-3  bg-[#A56CBD] hover:bg-[#bd28eb]"
        >
          News
        </div>
      </Link>
      <Link to="/Entertainment">
        <div
          style={{ transition: ".4s" }}
          className="pl-3 pr-3  bg-[#2ECC71] hover:bg-[#13ed4d]"
        >
          Entertainment
        </div>
      </Link>
      <Link to="/Sports">
        <div
          style={{ transition: ".4s" }}
          className="pl-3 pr-3  bg-[#0088FF] hover:bg-[#0c30e8]"
        >
          Sports
        </div>
      </Link>
      <Link to="/Life Style">
        <div
          style={{ transition: ".4s" }}
          className="pl-3 pr-3  bg-[#997C00] hover:bg-[#595c04]"
        >
          Life Style
        </div>
      </Link>
      <Link to="/Video">
        <div
          style={{ transition: ".4s" }}
          className="pl-3 pr-3  bg-[#F65050] hover:bg-red-700"
        >
          Video
        </div>
      </Link>
    </div>
  );
};
