import { lazy, Suspense } from "react";
import Spin from "../Loaders/Spin";
// import Testimonial_carousal from "./Testimonial_carousal";
const Testimonial_carousal = lazy(() => import("./Testimonial_carousal"));

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
      author: "_John Doe",
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
    <div className="grid grid-cols-1 pt-20 gap-y-2 ">
      <div className="flex justify-center">
        <h1 className="font-mono  uppercase text-stone-900 font-bold text-3xl text-center">
          Things people say
        </h1>
      </div>
      {/* carousals */}
      <div className="carousel w-full transition-all ease-linear duration-1000">
        <Suspense fallback={<Spin />}>
          {testimonials.map((task, index) => (
            <Testimonial_carousal
              key={index}
              author={task.author}
              img={task.img}
              quote={task.quote}
              postion={task.postion}
              item_no={task.item_no}
            />
          ))}
        </Suspense>
      </div>

      {/* buttons */}
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs active">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
