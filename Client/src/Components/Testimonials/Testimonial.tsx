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
    <section
      className="grid justify-center place-items-center md:gap-y-2 h-screen "
      id="testimonialSection"
    >
      <div className="flex justify-center">
        <h1 className="font-mono uppercase text-stone-800 font-bold text-3xl text-center p-2">
          Things people say
        </h1>
      </div>
      <div className="grid border-2 rounded-md shadow-xl shadow-slate-700 border-blue-600 w-[85%] h-5/6 md:w-2/3 md:h-5/6D">
        <Swiper
          autoplay
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, EffectFade]}
          className="mySwiper hover:cursor-grab"
          id="swiper-id"
        >
          {Testimonials.map((item, index) => (
            <SwiperSlide className=" " key={index}>
              <div
                key={index}
                className="grid grid-cols-1 place-content-center p-2 md:p-16 md:h-96 md:w-[60%] w-11/12 rounded-md"
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
      </div>
    </section>
  );
};

export default Testimonial;
