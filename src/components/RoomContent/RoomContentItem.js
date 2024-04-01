import { useMemo } from "react";

const RoomContentItem = ({
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
      className="flex flex-col items-center text-base text-dimgray-200 font-montserrat"
      style={frameStyle}
    >
      <img
        className="mb-[12px] w-16 h-16 overflow-hidden"
        alt=""
        src={iMAGE}
      />
      <h3
        className="m-0 text-base font-normal leading-[24px]"
        style={bedsStyle}
      >
        {beds}
      </h3>
      <p className="m-0 text-sm leading-[20px]">
        {theCabinIsEquippedWith12B}
      </p>
    </div>
  );
};

export default RoomContentItem;
