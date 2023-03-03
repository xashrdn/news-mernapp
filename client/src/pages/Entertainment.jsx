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
      <div className="flex justify-center mt-[5vh]">
        <div style={{ width: "1920px", height: "770px" }}>
          <div>
            <p className="text-[10px] text-[#F65050] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
              Entertainment
            </p>
            <div
              style={{
                backgroundImage: `url(${line})`,
                width: "1920px",
                height: "1px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              height: "80vh",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${bgr})`,
                height: "650px",
                width: "1920px",
                backgroundSize: "cover",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px",
                marginTop: "2%",
              }}
            >
              <button
                style={{
                  backgroundColor: "#0088FF",
                  height: "28px",
                  width: "96px",
                }}
              >
                Hollywood
              </button>
              <div
                style={{
                  height: "170px",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Amanda Seyfried became ‘really obsessed’ with ghost stories
                </div>
                <div style={{ paddingTop: "30px", fontSize: "18px" }}>
                  Hollywood actress Amanda Seyfried has recalled the time when
                  she
                  <br />
                  became obsessed with ghost stories
                </div>
              </div>
            </div>
            <div style={{ display: "flex", height: "50%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "500px",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${jijig})`,
                    backgroundSize: "cover",
                    height: "130px",
                    width: "200px",
                  }}
                ></div>
                <div style={{ padding: "5px" }}>
                  <div style={{ color: "#39939" }}>
                    Craig Bator{" "}
                    <span style={{ color: "#e6e6e6" }}>- 27 Dec 2020</span>{" "}
                  </div>
                  <div style={{ fontWeight: "bold" }}>
                    Amanda Seyfried became ‘really <br /> obsessed’ with ghost
                    stories
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
