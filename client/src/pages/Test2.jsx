export const Test2 = ({ image, image1, text, text2, text3 }) => {
  return (
    <div>
       <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[86vw] h-[18vh] sm:h-[20vh] sm:w-[80vw] lg:w-[41vw] xl:w-[28vw] bg-no-repeat bg-cover bg-center 2xl:h-[30vh]"
      >
      </div>
      </a>
      <div className="mt-[1vh]">
        <p>
          {text} - <span className="text-[gray]"> {text2} </span>
        </p>
        <p className="text-[#393939] text-xl font-medium w-[100%] lg:w-[40vw] xl:w-[28vw] xl:text-2xl">{text3}</p>
      </div>
    </div>
  );
};
