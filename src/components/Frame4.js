const Frame4 = () => {
  return (
    <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[800px] text-center text-sm text-white font-montserrat">
      <img
        className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[800px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <img
        className="absolute top-[calc(50%_+_245px)] left-[calc(50%_-_30px)] w-[60px] h-[65px]"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[calc(50%_-_151.7px)] left-[calc(50%_-_600px)] w-[1200px] h-[303.5px]">
        <img
          className="absolute top-[calc(50%_-_151.95px)] left-[calc(50%_-_128px)] w-64 h-[90px] overflow-hidden"
          alt=""
          src="/image-1.svg"
        />
        <div className="absolute w-full top-[263.8px] right-[0%] left-[0%] h-5">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-5" />
          <div className="absolute top-[0px] left-[calc(50%_-_145px)] tracking-[2px] leading-[20px] uppercase inline-block w-[291px]">
            Located in Lofoten, norway
          </div>
        </div>
        <div className="absolute w-full top-[126.8px] right-[0%] left-[0%] h-[104px] text-29xl">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[104px]" />
          <div className="absolute top-[-3px] left-[calc(50%_-_587px)] leading-[52.8px] inline-block w-[1174px]">{`Experience the perfect combination of modern housing & natural scenery.`}</div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
