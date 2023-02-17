export const Test2 = ({ image, image1, text, text2, text3 }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[424px] mt-[3vh] h-[24vh] bg-no-repeat bg-cover bg-center"
      >
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img
            className="relative left-[191px] top-[10vh]"
            src={image1}
            alt=""
          />
        </a>
      </div>
      <div className="mt-[2vh]">
        <p>
          {text} - <span className="text-[gray]"> {text2} </span>
        </p>
        <p className="text-[#393939] text-xl font-medium w-[442px]">{text3}</p>
      </div>
    </div>
  );
};
