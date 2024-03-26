import { FunctionComponent } from "react";
import Frame1 from "./Frame1";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] text-left text-sm text-darkslategray font-montserrat">
      <div className="self-stretch bg-dimgray-200 overflow-hidden flex flex-col items-start justify-start pt-[268.60000000000036px] pb-[260.39999999999964px] pr-[72px] pl-[1080px] box-border relative gap-[11px] max-w-full mq450:pl-5 mq450:box-border mq800:pt-[175px] mq800:pb-[169px] mq800:pr-9 mq800:pl-[540px] mq800:box-border">
        <div className="w-[1440px] h-[600px] relative bg-dimgray-200 hidden max-w-full z-[0]" />
        <div className="w-[42px] h-2 absolute !m-[0] top-[250.6px] right-[318px] bg-peru z-[1]" />
        <div className="relative tracking-[2px] leading-[20px] uppercase inline-block min-w-[104px] z-[1]">
          Bedrooms
        </div>
        <div className="self-stretch relative leading-[20px] z-[1]">
          In each bedroom you'll find a selection of foam mattresses and
          buckwheat pillows.
        </div>
        <img
          className="w-[1584px] h-[660px] absolute !m-[0] bottom-[-29.6px] left-[calc(50%_-_792px)] object-cover z-[2]"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="w-full h-full absolute !m-[0] top-[-0.4px] right-[0px] left-[0px] z-[3]" />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-[100.39999999999964px] px-[136px] pb-[99.60000000000036px] box-border relative gap-[64px] max-w-full z-[4] mt-[-0.4px] text-13xl text-dimgray-200 mq450:pb-[65px] mq450:box-border mq800:gap-[16px] mq800:pl-[34px] mq800:pr-[34px] mq800:box-border mq1350:gap-[32px] mq1350:pl-[68px] mq1350:pr-[68px] mq1350:box-border">
        <div className="h-[366px] w-[1440px] relative bg-white hidden max-w-full z-[0]" />
        <div className="h-2 w-[42px] absolute !m-[0] top-[100px] left-[136px] bg-peru z-[1]" />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[32.399999999999636px] box-border min-w-[359px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[36px] z-[1] mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
              Come together.
            </div>
            <div className="self-stretch h-12 flex flex-row items-start justify-start pt-0.5 pb-0 pr-[38px] pl-0 box-border relative max-w-full z-[1] text-base">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
              <div className="flex-1 relative leading-[24px] inline-block max-w-full z-[1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[359px] max-w-full z-[1] text-sm text-darkslategray mq800:gap-[16px_32px] mq800:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq800:flex-wrap mq800:gap-[32px_16px]">
            <Frame1
              iMAGE="/image-15.svg"
              loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Frame1
              iMAGE="/image-16.svg"
              loremIpsumDolorSitAmetCon="Nullam scelerisque aliquam odio et faucibus."
              propFlex="1"
              propWidth="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq800:flex-wrap mq800:gap-[32px_16px]">
            <Frame1
              iMAGE="/image-17.svg"
              loremIpsumDolorSitAmetCon="Nulla rhoncus feugiat eros quis consectetur."
              propFlex="1"
              propWidth="unset"
            />
            <Frame1
              iMAGE="/image-18.svg"
              loremIpsumDolorSitAmetCon="Morbi neque ex, condimentum."
              propFlex="unset"
              propWidth="117px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
