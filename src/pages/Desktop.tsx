import { FunctionComponent } from "react";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import LoremIpsumDolorSitAmetCon from "../components/LoremIpsumDolorSitAmetCon";
import Button from "../components/Button";
import Frame2 from "../components/Frame2";
import FrameComponent4 from "../components/FrameComponent4";
import OperationCombiner from "../components/OperationCombiner";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import Frame from "../components/Frame";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full h-[6368px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[800px] px-0 pb-0 box-border gap-[0.04444444444440402px] tracking-[normal] mq1125:h-auto">
      <section className="mt-[-810px] self-stretch flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] max-w-full">
        <Frame5 />
        <Frame4 />
      </section>
      <LoremIpsumDolorSitAmetCon />
      <section className="self-stretch flex flex-col items-start justify-start py-[140px] px-[76px] relative shrink-0 [debug_commit:f6aba90] text-center text-[96px] text-dimgray-200 font-montserrat mq800:py-[91px] mq800:px-[38px] mq800:box-border">
        <div className="w-[1440px] h-[568px] relative bg-white hidden max-w-full z-[0]" />
        <div className="w-[42px] h-2 absolute !m-[0] top-[100px] left-[calc(50%_-_21px)] bg-peru z-[1]" />
        <h1 className="m-0 self-stretch relative text-inherit leading-[96px] font-bold font-inherit z-[1] mq450:text-10xl mq450:leading-[38px] mq800:text-29xl mq800:leading-[58px]">
          The Guest House is the perfect weekend getaway cabin.
        </h1>
      </section>
      <section className="self-stretch bg-dimgray-200 overflow-hidden flex flex-col items-start justify-start pt-[259px] pb-[250px] pr-[63px] pl-[1080px] relative gap-[11px] shrink-0 [debug_commit:f6aba90] text-left text-sm text-darkslategray font-montserrat mq450:pl-5 mq450:box-border mq800:pt-[168px] mq800:pb-[162px] mq800:pr-[31px] mq800:pl-[540px] mq800:box-border">
        <div className="w-[1440px] h-[600px] relative bg-dimgray-200 hidden max-w-full z-[0]" />
        <div className="w-[42px] h-2 absolute !m-[0] top-[241px] right-[318px] bg-peru z-[1]" />
        <div className="relative tracking-[2px] leading-[20px] uppercase inline-block min-w-[79px] z-[1]">
          Kitchen
        </div>
        <div className="self-stretch relative leading-[20px] z-[1]">
          Fully equipped moden kitchen with great appliances. If you need
          anything specific, get in touch and we'll see what we can do.
        </div>
        <img
          className="w-[1584px] h-[660px] absolute !m-[0] bottom-[-30px] left-[calc(50%_-_792px)] object-cover z-[2]"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[3]" />
      </section>
      <Button />
      <Frame2 />
      <section className="self-stretch bg-floralwhite overflow-hidden flex flex-col items-end justify-start pt-[138px] px-0 pb-[70px] box-border relative gap-[20px] shrink-0 [debug_commit:f6aba90] max-w-full mq800:pt-[90px] mq800:pb-[45px] mq800:box-border">
        <div className="self-stretch h-[682px] relative bg-floralwhite hidden z-[0]" />
        <div className="w-[42px] h-2 absolute !m-[0] top-[100px] left-[calc(50%_-_21px)] bg-peru z-[1]" />
        <FrameComponent4
          sleepingArrangements="Past guests."
          loremIpsumDolorSitAmetCon="Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House."
          propWidth="unset"
          propAlignSelf="stretch"
          propPadding="0px 20px 12px"
          propWidth1="201px"
          propHeight="48px"
        />
        <div className="w-[522px] h-5 relative hidden max-w-full z-[3]" />
        <div className="w-[1324px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[508px] max-w-full mq450:gap-[508px_63px] mq800:gap-[508px_127px] mq1350:flex-wrap mq1350:gap-[508px_254px] mq1350:justify-center">
          <OperationCombiner />
          <FrameComponent3 />
        </div>
        <div className="w-[402px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="h-[60px] w-[60px] relative rounded-11xl box-border z-[1] border-[2px] border-solid border-dimgray-200" />
            <div className="h-[60px] w-[60px] relative rounded-11xl box-border z-[1] border-[2px] border-solid border-dimgray-200" />
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <Frame />
      <section className="self-stretch bg-dimgray-200 flex flex-col items-center justify-start pt-[100px] px-5 pb-[110px] gap-[49px] shrink-0 [debug_commit:f6aba90] mq800:gap-[24px_49px] mq800:pt-[65px] mq800:pb-[71px] mq800:box-border">
        <div className="w-[1440px] h-[608px] relative bg-dimgray-200 hidden max-w-full" />
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default Desktop;
