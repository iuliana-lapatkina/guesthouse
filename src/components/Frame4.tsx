import { FunctionComponent } from "react";

const Frame4: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-[248px] px-5 pb-[90px] box-border gap-[113px] bg-[url('/public/image1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mt-[-70px] text-center text-29xl text-white font-montserrat mq450:gap-[28px_113px] mq450:pb-[38px] mq450:box-border mq800:gap-[56px_113px] mq800:pb-[58px] mq800:box-border">
      <img
        className="w-[1440px] relative max-h-full object-cover hidden max-w-full"
        alt=""
        src="/image1@2x.png"
      />
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[37px] max-w-full mq800:gap-[18px_37px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <img
            className="h-[90px] w-64 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/image-1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full mq800:gap-[16px_33px]">
          <div className="self-stretch h-[104px] flex flex-row items-start justify-start pt-0 px-[13px] pb-px box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <h1 className="mt-[-3px] m-0 flex-1 relative text-inherit leading-[52.8px] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[32px] mq800:text-19xl mq800:leading-[42px]">{`Experience the perfect combination of modern housing & natural scenery.`}</h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] relative z-[1] text-sm">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="w-[291px] relative tracking-[2px] leading-[20px] uppercase inline-block shrink-0 z-[1]">
              Located in Lofoten, norway
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-[65px] w-[60px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
      </div>
    </div>
  );
};

export default Frame4;
