import { useMemo } from "react";

const Frame1 = ({ iMAGE, loremIpsumDolorSitAmetCon, propFlex, propWidth }) => {
  const loremIpsumDolorStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className="absolute w-[47.1%] top-[0px] right-[52.9%] left-[0%] h-[67px] text-left text-sm text-darkslategray font-montserrat">
      <img
        className="absolute w-[13.85%] top-[calc(50%_-_33.9px)] right-[86.15%] left-[0%] max-w-full overflow-hidden h-9"
        alt=""
        src={iMAGE}
      />
      <div className="absolute w-4/5 top-[-0.4px] right-[0%] left-[20%] h-10">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-10" />
        <div
          className="absolute w-[97.6%] top-[1px] left-[0%] leading-[20px] inline-block"
          style={loremIpsumDolorStyle}
        >
          {loremIpsumDolorSitAmetCon}
        </div>
      </div>
    </div>
  );
};

export default Frame1;
