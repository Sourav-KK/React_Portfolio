import { lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@styles/testimonial_style.css";

// import required modules
import { Keyboard, Pagination, Navigation, EffectFade } from "swiper/modules";
import Spin from "@utils/Loaders/Spin";
import { Testimonials } from "@utils/Constants";

const Avatar = lazy(() => import("@components/Testimonials/Avatar"));

const Testimonial = () => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <h1 className="font-mono uppercase text-stone-800 font-bold text-3xl text-center">
          Things people say
        </h1>
      </div>
      <Swiper
        autoplay
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, EffectFade]}
        className="mySwiper hover:cursor-grab"
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide className="p-20 " key={index}>
            <div
              key={index}
              className="grid grid-cols-1 place-content-center p-12 w-[80%] border-2 rounded-md border-indigo-900"
            >
              <Suspense
                key={index}
                fallback={
                  <div className="avatar w-full flex justify-center items-center p-3">
                    <Spin key={index} />
                  </div>
                }
              >
                <Avatar key={index} altText={item.author} img={item.img} />
              </Suspense>
              <div className="grid grid-cols-1 gap-y-2 w-auto">
                <p className="font-mono text-sm md:text-2xl text-stone-700 text-pretty">
                  " {item.quote} "
                </p>
                <p className="font-mono uppercase font-bold text-xl md:text-2xl text-stone-900">
                  {item.author}
                </p>
                <p className="font-mono text-sm text-stone-800">
                  {item.postion}{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
