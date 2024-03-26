import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Frame: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-floralwhite flex flex-col items-center justify-start pt-[138px] px-5 pb-[100px] relative gap-[20px] shrink-0 [debug_commit:f6aba90] text-center text-13xl text-dimgray-200 font-montserrat mq800:pt-[90px] mq800:pb-[65px] mq800:box-border">
      <div className="w-[1440px] h-[478px] relative bg-floralwhite hidden max-w-full z-[0]" />
      <div className="w-[42px] h-2 absolute !m-[0] top-[100px] left-[calc(50%_-_21px)] bg-peru z-[1]" />
      <div className="w-[600px] flex flex-col items-end justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[33px] pl-[34px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit leading-[36px] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">{`We're already booked up for the spring — hurry up & secure your stay for the summer.`}</h1>
        </div>
        <div className="self-stretch h-12 flex flex-row items-start justify-start pt-0.5 px-[43px] pb-0 box-border relative max-w-full z-[1] text-base mq800:pl-[21px] mq800:pr-[21px] mq800:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="flex-1 relative leading-[24px] inline-block max-w-full z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[52px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
        <div className="self-stretch w-[269px] flex flex-row items-start justify-start gap-[20px]">
          <Button
            className="self-stretch w-[116px] z-[1]"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#52503b",
              fontSize: "16",
              borderColor: "#52503b",
              borderRadius: "6px",
              "&:hover": { borderColor: "#52503b" },
              width: 116,
            }}
          >
            Contact
          </Button>
          <Button
            className="h-[52px] flex-1 z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#52503b",
              borderRadius: "6px",
              "&:hover": { background: "#52503b" },
              height: 52,
            }}
          >
            Book now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Frame;
