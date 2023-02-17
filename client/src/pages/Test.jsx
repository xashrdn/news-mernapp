export const Test = ({text, text2, text3, image}) => {
    return   <div className="ml-[2vw] w-[100%] flex h-[100px] mt-[2vh]">
    <img src={image} alt="" />
    <div className="ml-[1vw]">
      <div className="font-normal text-base">
        {text} -  <span className="text-[gray]">{text2} </span>
      </div>
      <div className="text-[#393939] text-xl font-medium w-[23vw]">
      {text3}
      </div>
    </div>
  </div>
}