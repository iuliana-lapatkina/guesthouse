import Line from "../../generic/Line";
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] w-full overflow-hidden text-center text-13xl bg-floralwhite">
      <div className="flex flex-col gap-[32px] items-center px-[12px] xl:px-0 mx-auto my-0 max-w-[1200px]">
        <Line />
        <div>
          <h2 className="mt-0 mx-0 mb-[12px] leading-[36px] text-13xl">
            Past guests.
          </h2>
          <p className="m-0 text-base leading-[24px] text-base">
            Don't take our word for it! Have a look at what our previous
            guests say about their stay at the Guest House.
          </p>
        </div>
        <ReviewSlider />
      </div>
    </section>
  )
}

export default Reviews;