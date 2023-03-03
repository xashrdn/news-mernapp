import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <div
          className="bg-no-repeat bg-cover bg-center w-[890px] h-[750px] ml-[7vw] mt-[2vh]
        bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)]"
        >
          <div className="flex flex-col justify-between h-[95%] ml-[2vw]">
            <div>
              <button className="mt-[2vh] bg-[#0088FF] p-2">Business</button>
            </div>
            <div>
              <p>Craig Bator - 27 Dec 2020</p>
              <p className="text-[40px] text-cyan-400">
                After all is said and done, more is done
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[2vw]">
          <div className="flex mt-[2vh]">
            <div
              className="bg-no-repeat bg-cover bg-center w-[490px] h-[350px] 
        bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)]"
            >
              {" "}
              <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
                <div>
                  <button className="mt-[2vh] bg-[#0088FF] p-2">
                    Business
                  </button>
                </div>
                <div>
                  <p>Craig Bator - 27 Dec 2020</p>
                  <p className="text-[20px] text-cyan-400">
                    After all is said and done, more is done
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center w-[490px] h-[350px] ml-[10px]
        bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)]"
            >
              <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
                <div>
                  <button className="mt-[2vh] bg-[#0088FF] p-2">
                    Business
                  </button>
                </div>
                <div>
                  <p>Craig Bator - 27 Dec 2020</p>
                  <p className="text-[20px] text-cyan-400">
                    After all is said and done, more is done
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover bg-center w-[1000px] h-[380px] mt-[20px]
        bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)]"
          >
            <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
              <div>
                <button className="mt-[2vh] bg-[#0088FF] p-2">Business</button>
              </div>
              <div>
                <p>Craig Bator - 27 Dec 2020</p>
                <p className="text-[40px] text-cyan-400">
                  After all is said and done, more is done
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
