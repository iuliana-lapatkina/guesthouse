import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Frame1Type = {
  iMAGE?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
};

const Frame1: FunctionComponent<Frame1Type> = ({
  iMAGE,
  loremIpsumDolorSitAmetCon,
  propFlex,
  propWidth,
}) => {
  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[27.399999999999636px] box-border gap-[16px] min-w-[169px] text-left text-sm text-darkslategray font-montserrat">
      <img
        className="h-9 w-9 relative overflow-hidden shrink-0"
        alt=""
        src={iMAGE}
      />
      <div className="h-10 flex-1 flex flex-row items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border relative">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div
          className="flex-1 relative leading-[20px] z-[1]"
          style={loremIpsumDolorStyle}
        >
          {loremIpsumDolorSitAmetCon}
        </div>
      </div>
    </div>
  );
};

export default Frame1;
