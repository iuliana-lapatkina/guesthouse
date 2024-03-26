import { FunctionComponent } from "react";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className="h-[226px] w-[584px] relative rounded bg-white box-border min-w-[584px] shrink-0 [debug_commit:f6aba90] text-left text-sm text-darkslategray font-montserrat border-[1px] border-solid border-dimgray-300 mq800:min-w-full mq1350:flex-1">
      <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-full h-full hidden border-[1px] border-solid border-dimgray-300" />
      <img
        className="absolute top-[31px] left-[31px] w-[522px] h-[20.4px] z-[1]"
        alt=""
        src="/frame-4.svg"
      />
      <div className="absolute top-[175px] left-[31px] w-[522px] h-5 flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
        <div className="self-stretch w-[114px] relative leading-[20px] inline-block shrink-0 box-border pr-5 z-[2]">
          Sven Dunlop
        </div>
      </div>
      <div className="absolute top-[96px] left-[31px] leading-[20px] inline-block w-[516px] z-[1]">
        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
        commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
        rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
      </div>
      <div className="absolute top-[61px] left-[31px] text-lg leading-[24px] inline-block w-[110px] z-[1]">
        Super cozy!
      </div>
      <div className="absolute top-[175.4px] left-[29px] bg-peru w-0.5 h-5 z-[2]" />
    </div>
  );
};

export default FrameComponent3;
