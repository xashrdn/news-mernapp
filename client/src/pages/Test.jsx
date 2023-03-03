export const Test = ({ text, text2, text3, image }) => {
  return (
    <div className="w-[100%] flex h-[100px] mt-[3vh] xl:mt-[2vh]">
      <img className="w-[80px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[85px] 2xl:w-[130px] 2xl:h-[100px]" src={image} alt="" />
      <div className="ml-[1vw]">
        <div className="font-normal text-base xl:text-[14px] 2xl:text-[18px]">
          {text} - <span className="text-[gray]">{text2} </span>
        </div>
        <div className="text-[#393939] text-sm sm:text-lg font-medium xl:text-[12px] xl:leading-[22px] 2xl:text-[16px] w-[100%]">
          {text3}
        </div>
      </div>
    </div>
  );
};
