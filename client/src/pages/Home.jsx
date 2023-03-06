import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-[86vw] h-[100%] ml-[7vw] lg:flex-row">
        <div
          className="bg-no-repeat bg-cover bg-center mt-[2vh]  h-[36vh]
		bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)] lg:w-[50vw] lg:h-[70vh]"
    
        >
          <div className="flex flex-col justify-between h-[90%] ml-[2vw] lg:h-[66vh]">
            <div>
              <button className="mt-[2vh] bg-[#0088FF] p-2">Business</button>
            </div>
            <div>
              <p className="lg:text-[14px]">Craig Bator - 27 Dec 2020</p>
              <p className="text-[20px] text-pink-900 lg:text-[32px] xl:text-[40px]">
                After all is said and done, more is done
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col mt-[2vh] lg:flex-row">
            <div
              className="bg-no-repeat bg-cover bg-center w-[86vw] h-[36vh] 
		bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)] lg:w-[17vw] lg:ml-[1vw] "
            >
              <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
                <div>
                  <button className="mt-[2vh] bg-[#0088FF] p-2">
                    Business
                  </button>
                </div>
                <div>
                  <p>Craig Bator - 27 Dec 2020</p>
                  <p className="text-[20px] text-pink-900">
                    After all is said and done, more is done
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center w-[86vw] h-[36vh] mt-[2vh]
		bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)] lg:w-[17vw] lg:mt-0 lg:ml-[1vw]"
            >
              <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
                <div>
                  <button className="mt-[2vh] bg-[#0088FF] p-2">
                    Business
                  </button>
                </div>
                <div>
                  <p>Craig Bator - 27 Dec 2020</p>
                  <p className="text-[20px] text-pink-900">
                    After all is said and done, more is done
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover bg-center w-[86vw] h-[36vh] mt-[2vh]
		bg-[url(https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP)] lg:w-[35vw] lg:h-[33vh] lg:mt-[1vh] lg:ml-[1vw]"
          >
            <div className="flex flex-col justify-between h-[90%] ml-[2vw]">
              <div>
                <button className="mt-[2vh] bg-[#0088FF] p-2">Business</button>
              </div>
              <div>
                <p>Craig Bator - 27 Dec 2020</p>
                <p className="text-[20px] text-pink-900 lg:text-[22px] xl:text-[40px]">
                  After all is said and done, more is done
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
