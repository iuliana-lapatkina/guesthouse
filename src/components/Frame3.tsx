import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Frame3Type = {
  iMAGE?: string;
  beds?: string;
  theCabinIsEquippedWith12B?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Frame3: FunctionComponent<Frame3Type> = ({
  iMAGE,
  beds,
  theCabinIsEquippedWith12B,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const frame1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bedsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[260px] max-w-full text-center text-base text-dimgray-200 font-montserrat"
      style={frame1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <img
          className="h-16 w-16 relative overflow-hidden shrink-0"
          alt=""
          src={iMAGE}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <div
            className="w-[42px] relative leading-[24px] inline-block shrink-0 min-w-[42px]"
            style={bedsStyle}
          >
            {beds}
          </div>
        </div>
        <div className="self-stretch h-10 flex flex-row items-start justify-start pt-px pb-0 pr-px pl-0 box-border relative max-w-full text-sm">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="flex-1 relative leading-[20px] inline-block max-w-full z-[1]">
            {theCabinIsEquippedWith12B}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
