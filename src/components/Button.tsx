import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import Frame3 from "./Frame3";

const Button: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-floralwhite flex flex-col items-center justify-start pt-[138px] px-5 pb-[100px] box-border relative gap-[32px] shrink-0 [debug_commit:f6aba90] max-w-full text-center text-13xl text-dimgray-200 font-montserrat mq800:gap-[16px_32px] mq800:pt-[90px] mq800:pb-[65px] mq800:box-border">
      <div className="w-[1440px] h-[530px] relative bg-floralwhite hidden max-w-full z-[0]" />
      <div className="w-[42px] h-2 absolute !m-[0] top-[100px] left-[calc(50%_-_21px)] bg-peru z-[1]" />
      <FrameComponent4
        sleepingArrangements="Sleeping arrangements."
        loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur."
      />
      <div className="w-[1168px] flex flex-row flex-wrap items-start justify-center gap-[63.94999999999996px] max-w-full z-[1] text-base mq800:gap-[16px] mq1350:gap-[32px]">
        <Frame3
          iMAGE="/image-3.svg"
          beds="Beds"
          theCabinIsEquippedWith12B="The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds."
        />
        <Frame3
          iMAGE="/image-4.svg"
          beds="Bedrooms"
          theCabinIsEquippedWith12B="Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room."
          propPadding="0px 0.2999999999999545px"
          propWidth="87px"
          propMinWidth="87px"
        />
        <Frame3
          iMAGE="/image-5.svg"
          beds="Bathrooms"
          theCabinIsEquippedWith12B="The cabin has three bathrooms, all equipped with showers and one with a bath tub,"
          propPadding="unset"
          propWidth="93px"
          propMinWidth="93px"
        />
      </div>
    </section>
  );
};

export default Button;
