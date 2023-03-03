import line from "../assets/line.svg";
import bgr from "../assets/Image.svg";
import jijig from "../assets/imgg.svg";

export const Entertaiment = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "1500px", height: "770px" }}>
        {" "}
        <div>
          {" "}
          <div
            style={{
              fontSize: "30px",
              color: "#F65050",
              height: "6vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            Entertainment
          </div>
          <div
            style={{
              backgroundImage: `url(${line})`,
              width: "1480px",
              height: "1px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            height: "80vh",
            flexDirection: "column",
            // justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${bgr})`,
              height: "650px",
              width: "1480px",
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
                Hollywood actress Amanda Seyfried has recalled the time when she
                <br />
                became obsessed with ghost stories
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100px",
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
  );
};
