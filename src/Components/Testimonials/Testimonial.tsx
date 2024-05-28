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

const Avatar = lazy(() => import("@components/Testimonials/Avatar"));

interface testimonialsI {
  img: string;
  quote: string;
  author: string;
  postion: string;
  item_no: string;
}
const Testimonial = () => {
  const testimonials: testimonialsI[] = [
    {
      img: "https://avatar.iran.liara.run/public/38",
      quote:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.tenetur odio fugit ea impedit ",
      author: "-John Doe",
      postion: "Lorem ipsum, font-mono, font-mono",
      item_no: "item1",
    },
    {
      img: "https://avatar.iran.liara.run/public/90",
      quote:
        " Ltenetur odio fugit ea impedit orem ipsum dolor sit amet consectetur adipisicing elit.  ",
      author: "-Doe John ",
      postion: " Lorem ipsum, font-mono, font-mono",
      item_no: "item2",
    },
    {
      img: "https://avatar.iran.liara.run/public/95",
      quote:
        "  Lamet consectetur adipisicing elit orem ipsum dolor sit amet consectetur adipisicing elit. tenetur odio fugit ea impedit  ",
      author: "-Doe John Doe",
      postion: "Lorem ipsum, font-mono, font-mono",
      item_no: "item3",
    },
  ];

  return (
    <>
      <div className="flex justify-center pt-10">
        <h1 className="font-mono uppercase text-stone-800 font-bold text-3xl text-center">
          Things people say
        </h1>
      </div>
      <Swiper
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
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
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
