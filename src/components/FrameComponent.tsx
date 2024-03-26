import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="w-[1168px] flex flex-col items-start justify-start gap-[20px] max-w-full text-center text-sm text-white font-montserrat">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[70px] w-[200px] relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/image-22.svg"
        />
      </div>
      <div className="self-stretch overflow-x-auto flex flex-row items-start justify-center py-0 pr-5 pl-[21px] relative z-[1]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="w-[371px] relative leading-[20px] inline-block shrink-0 z-[1]">
          © Guest House, LLC. All rights reserved. Powered by
        </div>
        <div className="w-[63px] relative leading-[20px] inline-block shrink-0 min-w-[63px] z-[1]">
          Webflow
        </div>
        <div className="w-[3px] relative leading-[20px] inline-block shrink-0 min-w-[3px] z-[1]">
          .
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] relative [row-gap:20px] z-[1] mq800:flex-wrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="w-[143px] relative leading-[20px] inline-block shrink-0 z-[1]">
          +47 (0) 702 88 12 34
        </div>
        <div className="w-[22px] relative leading-[20px] inline-block shrink-0 z-[1]">
          —
        </div>
        <div className="w-[150px] relative leading-[20px] inline-block shrink-0 whitespace-nowrap z-[1]">
          example@webflow.io
        </div>
        <div className="w-[22px] relative leading-[20px] inline-block shrink-0 z-[1]">
          —
        </div>
        <div className="w-64 relative leading-[20px] inline-block shrink-0 z-[1]">
          Klubbvika 12, 8310 Kabelvag, Norway
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
