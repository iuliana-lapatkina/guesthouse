import Rating from "../../generic/Rating";

const ReviewsItem = ({ author, rate, header, text }) => {
  
  return (
    <div className="flex flex-col gap-[11px] p-[26px] sm:p-[31px] max-w-[584px] min-h-[266px] cursor-pointer text-left text-sm text-darkslategray rounded bg-white box-border border-[1px] border-solid border-dimgray-300">
      <Rating rate={rate} />
      <p className="m-0 text-lg leading-[20px]">
        {header}
      </p>
      <p className="h-[220px] h-auto overflow-auto m-0 leading-[20px] text-sm">
        {text}
      </p>
      <p className="relative m-0 text-sm leading-[24px] before:content-[''] before:transform before:translate-y-[6px] before:inline-block before:mr-[10px] before:bg-peru before:h-[24px] before:w-[3px]">
        {author}
      </p>
    </div>
  );
}

export default ReviewsItem;
