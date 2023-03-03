import logo from "../assets/newsCast.svg";
import IG from "../assets/IG.svg";
import FB from "../assets/FB.svg";
import YT from "../assets/YT.svg";
import TW from "../assets/TW.svg";
import LINE from "../assets/lline.svg";
import OneByOne from "../assets/cook.jpeg";
const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#393939",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "1900px",
            height: "240px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "405px",
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
              pellentesque dictum posuere id diam rutrum.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
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
          <div
            style={{
              width: "275px",
              height: "240px",
            }}
          >
            <div style={{}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "40px",
                }}
              >
                <p style={{ color: "white", fontSize: "20px" }}>
                  Photo Gallery
                </p>
                <div
                  style={{
                    backgroundImage: `url(${LINE})`,
                    backgroundSize: "cover",
                    height: "1px",
                    width: "34  0px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                  height: "100px",
                  width: "350px",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${OneByOne})`,
                    backgroundSize: "cover",
                    height: "105px",
                    width: "105px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div style={{ width: "275px", height: "240px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "40px",
              }}
            >
              <p style={{ color: "white", fontSize: "20px" }}>Tags</p>
              <div
                style={{
                  backgroundImage: `url(${LINE})`,
                  backgroundSize: "cover",
                  height: "1px",
                  width: "270px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "275px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#F65050",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Football
                </button>
                <button
                  style={{
                    backgroundColor: "#0088FF",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Cricket
                </button>
                <button
                  style={{
                    backgroundColor: "#A56CBD",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Covid 19
                </button>
                <button
                  style={{
                    backgroundColor: "#997C00",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  LifeStyle
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "5px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#FFB8B8",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Tranding news
                </button>
                <button
                  style={{
                    backgroundColor: "#49CFE8",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Technology
                </button>
                <button
                  style={{
                    backgroundColor: "#4281FF",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  Travel
                </button>
              </div>
            </div>
          </div>
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "40px",
              }}
            >
              <p style={{ color: "white", fontSize: "20px" }}>Stay In Touch</p>
              <div
                style={{
                  backgroundImage: `url(${LINE})`,
                  backgroundSize: "cover",
                  height: "1px",
                  width: "270px",
                }}
              ></div>
            </div>

            <p style={{ color: "white", fontSize: "14px" }}>
              To be updated with all the latest news, offers and special
              annoucements.
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Your email address"
                style={{
                  border: "none",
                  outline: "none",
                  padding: "10px",
                  fontSize: "14px",
                  textAlign: "center",
                  height: "60px",
                }}
              />
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#F65050",
                  color: "white",
                  fontWeight: "bold",
                  height: "50px",
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
