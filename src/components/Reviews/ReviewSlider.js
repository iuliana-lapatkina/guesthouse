import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsItem from "./ReviewsItem";
import ReviewsList from "./ReviewsList";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ReviewSlider = () => {
  return (
    <Swiper
      className="w-[100%] max-[380px]:h-[460px] max-[470px]:h-[410px] max-[505px]:h-[380px] md:max-lg:h-[380px] h-[320px] [&>div>span]:bg-dimgray-200"
      slidesPerView={1}
      breakpoints={{
          768: {
              slidesPerView: 2
          },
      }}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      mousewheel="true"
      modules={[Pagination]}
    >
      {ReviewsList.map(item => {
        return (
          <SwiperSlide key={uuidv4()}>
            <ReviewsItem {...item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default ReviewSlider;