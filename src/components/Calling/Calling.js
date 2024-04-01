import Button from "../../generic/Button";
import Line from "../../generic/Line";

const Calling = () => {
  return (
    <div className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-center text-13xl text-dimgray-200 font-montserrat bg-floralwhite">
      <div className="flex flex-col items-center gap-[32px] px-[12px] xl:px-0 mx-auto max-w-[600px]">
        <Line />
        <div>
          <p className="mt-0 mx-0 mb-[12px] text-[26px] sm:text-13xl leading-[36px] font-normal">
            We're already booked up for the spring — hurry up & secure your stay for the summer.
          </p>
          <p className="m-0 w-full leading-[24px] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </p>
        </div>
        <div className="flex content-center gap-[20px]">
          <Button text="Contact" textColor={"dimgray-200"} bgColor={"floralwhite"} borderColor={""} />
          <Button text="Book now" textColor={"white"} bgColor={"dimgray-200"} />
        </div>
      </div>
    </div>
  );
};

export default Calling;
