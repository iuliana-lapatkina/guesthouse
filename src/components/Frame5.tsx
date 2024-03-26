import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Frame5: FunctionComponent = () => {
  return (
    <header className="self-stretch bg-dimgray-200 flex flex-row items-end justify-center py-2.5 px-5 box-border gap-[357px] top-[0] z-[99] sticky max-w-full text-left text-mini text-white font-montserrat mq450:gap-[357px_45px] mq800:gap-[357px_89px] mq1350:gap-[357px_178px]">
      <div className="h-20 w-[1440px] relative bg-dimgray-200 hidden max-w-full" />
      <div className="w-32 flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border">
        <img
          className="self-stretch h-[45px] relative max-w-full overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/image.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
          <div className="relative leading-[20px] inline-block min-w-[37px] z-[1]">
            Start
          </div>
        </div>
        <div className="flex flex-row items-start justify-start mq800:hidden">
          <div className="flex flex-row items-start justify-start py-5 px-3 relative z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="relative leading-[20px] inline-block min-w-[61px] z-[1]">
              Contact
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-5 px-3 relative z-[1] text-sm">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="relative leading-[20px] inline-block min-w-[83px] whitespace-nowrap z-[1]">
              Our history
            </div>
          </div>
        </div>
      </div>
      <div className="w-[117px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
        <Button
          className="self-stretch h-[42px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#52503b",
            fontSize: "16",
            background: "#fff",
            borderRadius: "6px",
            "&:hover": { background: "#fff" },
            height: 42,
          }}
        >
          Book now
        </Button>
      </div>
    </header>
  );
};

export default Frame5;
