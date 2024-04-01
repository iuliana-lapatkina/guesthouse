import Line from "../../generic/Line";

const ShortDescription = () => {
  return (
    <div className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-center bg-white text-[56px] lg:text-[96px]">
      <div className="flex flex-col items-center gap-[32px] mx-auto my-0 px-[12px] xl:px-0 max-w-[1280px]">
        <Line />
        <p className="m-0 leading-[56px] lg:leading-[96px] font-bold">
          The Guest House is the perfect weekend getaway cabin.
        </p>
      </div>
    </div>
  );
}

export default ShortDescription;