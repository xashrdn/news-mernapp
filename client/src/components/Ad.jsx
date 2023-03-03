const Ad = () => {
  return (
    <div className="hidden xl:block mt-[4vh]">
      <div className="flex ">
        <p className="mr-[15vw] font-sans-serif text-red-400 text-2xl xl:text-[24px] ">
          Stay Connected
        </p>
      </div>
      <div className="h-[1px] w-full bg-black mt-3 xl:w-[22vw]"></div>
      <div className="flex flex-col">
        <div className="mt-[25px] flex flex-col">
          <div className="flex">
            <div className="flex mr-[2vw] bg-[#4281FF] hover:bg-[#42C0F5] w-[230px] h-[60px] xl:w-[10vw]">
              <img
                className="pb-[20px] pt-[20px] pl-[24px]"
                src="fb.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">107K</div>
                <div className="text-[white] text-[12px]">Followers</div>
              </div>
            </div>
            <div className="flex mb-[30px] bg-[#C23785] hover:bg-[#F7679D] w-[230px] xl:w-[10vw] h-[60px]">
              <img
                className="pb-[20px] pt-[20px] pl-[24px]"
                src="ig.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">96K</div>
                <div className="text-[white] text-[12px]">Followers</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex mr-[2vw] bg-[#EF5043] hover:bg-red-400 w-[230px] h-[60px] xl:w-[10vw]">
              <img
                className="pb-[20px] pt-[20px] pl-[14px]"
                src="yt.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">57K</div>
                <div className="text-[white] text-[12px]">Subscribers</div>
              </div>
            </div>
            <div className="flex mb-[30px] bg-[#42C0F5] hover:bg-blue-200 w-[230px] h-[60px] xl:w-[10vw]">
              <img
                className="pb-[20px] pt-[20px] pl-[24px]"
                src="tw.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">38K</div>
                <div className="text-[white] text-[12px]">Followers</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex mr-[2vw] bg-[#1B7BFD] hover:bg-[#42C0F5] w-[230px] h-[60px] xl:w-[10vw]">
              <img
                className="pb-[20px] pt-[20px] pl-[24px]"
                src="be.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">21K</div>
                <div className="text-[white] text-[12px]">Followers</div>
              </div>
            </div>
            <div className=" flex mb-[30px] bg-[#F7679D] hover:bg-pink-300 w-[230px] h-[60px] xl:w-[10vw]">
              <img
                className="pb-[20px] pt-[20px] pl-[24px]"
                src="ba.svg"
                alt=""
              />
              <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">11K</div>
                <div className="text-[white] text-[12px]">Followers</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('img.svg')] h-[50vh] xl:w-[22vw] xl:h-[30vh] text-[50px] xl:text-[25px] text-[#FFFFFF] font-sans-serif flex justify-center items-center">
            Ad
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
