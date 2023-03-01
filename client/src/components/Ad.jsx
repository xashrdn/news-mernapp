const Ad = () => {
    return (
      <div>
      <div className="flex">
        <p className="mr-[15vw] font-sans-serif text-red-400 text-2xl">Stay Connected</p>
      </div>
      <div className="h-[3px] w-full bg-red-400 mt-3"></div>
      <div className="mt-[25px] flex flex-col">
        <div className="flex">
          <div className="flex mr-[30px] bg-[#4281FF] hover:bg-[#42C0F5] w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[24px]" src="fb.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">107K</div>
                <div className="text-[white] text-[12px]">Followers</div>
            </div>
          </div>
          <div className="flex mb-[30px] bg-[#C23785] hover:bg-[#F7679D] w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[24px]" src="ig.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">96K</div>
                <div className="text-[white] text-[12px]">Followers</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex mr-[30px] bg-[#EF5043] hover:bg-red-400 w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[14px]" src="yt.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">57K</div>
                <div className="text-[white] text-[12px]">Subscribers</div>
            </div>
          </div>
          <div className="flex mb-[30px] bg-[#42C0F5] hover:bg-blue-200 w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[24px]" src="tw.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">38K</div>
                <div className="text-[white] text-[12px]">Followers</div>
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="flex mr-[30px] bg-[#1B7BFD] hover:bg-[#42C0F5] w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[24px]" src="be.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">21K</div>
                <div className="text-[white] text-[12px]">Followers</div>
            </div>
          </div>
          <div className=" flex mb-[30px] bg-[#F7679D] hover:bg-pink-300 w-[230px] h-[60px]">
            <img className="pb-[20px] pt-[20px] pl-[24px]" src="ba.svg" alt="" />
            <div className="flex flex-col pt-[12px] pl-[15px]">
                <div className="text-[white] text-[12px]">11K</div>
                <div className="text-[white] text-[12px]">Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] w-[22vw] h-[22vw]">
        <div className="bg-[url('img.svg')] h-[50vh] w-[480px] text-[50px] text-[#FFFFFF] font-sans-serif p-[45%] ">Ad</div>
      </div>
    </div>
    )
}

export default Ad;