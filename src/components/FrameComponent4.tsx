import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  sleepingArrangements?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  sleepingArrangements,
  loremIpsumDolorSitAmetCon,
  propWidth,
  propAlignSelf,
  propPadding,
  propWidth1,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  const sleepingArrangementsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="w-[1168px] flex flex-row items-start justify-center max-w-full text-center text-13xl text-dimgray-200 font-montserrat"
      style={frameDivStyle}
    >
      <div className="w-[600px] flex flex-col items-end justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <h1
            className="m-0 w-[395px] relative text-inherit leading-[36px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]"
            style={sleepingArrangementsStyle}
          >
            {sleepingArrangements}
          </h1>
        </div>
        <div
          className="self-stretch h-[72px] flex flex-row items-start justify-start pt-0.5 px-[23px] pb-0 box-border relative max-w-full z-[1] text-base"
          style={frameStyle}
        >
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="flex-1 relative leading-[24px] inline-block max-w-full z-[1]">
            {loremIpsumDolorSitAmetCon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
