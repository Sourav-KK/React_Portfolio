import { Suspense, lazy } from "react";
import Spin from "../Loaders/Spin";
const Testimonial_Img = lazy(() => import("./Testimonial_Img"));

const Testimonial_carousal = ({
  img,
  quote,
  author,
  postion,
  item_no,
}: {
  img: string;
  quote: string;
  author: string;
  postion: string;
  item_no: string;
}) => {
  return (
    <>
      <div
        id={item_no}
        className="carousel-item w-full grid place-items-center "
      >
        <div className="grid grid-cols-1 place-items-center gap-y-2 border-2 border-indigo-900 rounded-3xl w-1/2 p-10">
          <div className="avatar p-10">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Suspense fallback={<Spin />}>
                {/* <img src={img} loading="lazy" /> */}
                <Testimonial_Img img={img} />
              </Suspense>
            </div>
          </div>
          <div className="flex justify-center flex-col space-y-2">
            <p className="text-center font-mono  text-stone-700 text-2xl transition-opacity ease-in-out duration-1000">
              {quote}
            </p>
            <p className="text-center font-mono font-semibold text-2xl text-stone-900 uppercase ">
              {author}
            </p>
            <p className="text-center font-mono font-semibold text-stone-700 text-sm">
              {postion}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial_carousal;
