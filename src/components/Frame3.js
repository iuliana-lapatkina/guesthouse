import { useMemo } from "react";

const Frame3 = ({
  iMAGE,
  beds,
  theCabinIsEquippedWith12B,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const frameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bedsStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div
      className="absolute w-[29.68%] top-[0px] right-[70.32%] left-[0%] h-[140px] text-center text-base text-dimgray-200 font-montserrat"
      style={frameStyle}
    >
      <img
        className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_32.35px)] w-16 h-16 overflow-hidden"
        alt=""
        src={iMAGE}
      />
      <div
        className="absolute top-[76px] left-[calc(50%_-_21.35px)] leading-[24px] inline-block w-[42px]"
        style={bedsStyle}
      >
        {beds}
      </div>
      <div className="absolute w-[100.09%] top-[100px] right-[-0.09%] left-[0%] h-10 text-sm">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-10" />
        <div className="absolute top-[1px] left-[calc(50%_-_173.5px)] leading-[20px] inline-block w-[346px]">
          {theCabinIsEquippedWith12B}
        </div>
      </div>
    </div>
  );
};

export default Frame3;
