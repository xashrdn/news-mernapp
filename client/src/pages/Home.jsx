import logo from "../assets/newsCast.svg";
import IG from "../assets/IG.svg";
import FB from "../assets/FB.svg";
import YT from "../assets/YT.svg";
import TW from "../assets/TW.svg";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "1480px",
          backgroundColor: "#393939",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "240px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "275px",
              height: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                height: "60px",
                width: "240px",
              }}
            ></div>
            <p style={{ color: "white", fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.{" "}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <div
                style={{
                  backgroundImage: `url(${FB})`,
                  backgroundSize: "cover",
                  height: "40px",
                  width: "40px",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${TW})`,
                  backgroundSize: "cover",
                  height: "40px",
                  width: "40px",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${IG})`,
                  backgroundSize: "cover",
                  height: "40px",
                  width: "40px",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${YT})`,
                  backgroundSize: "cover",
                  height: "40px",
                  width: "40px",
                }}
              ></div>
            </div>
          </div>
          <div style={{ width: "275px", height: "240px" }}></div>{" "}
          <div style={{ width: "275px", height: "240px" }}></div>{" "}
          <div style={{ width: "275px", height: "240px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
