import { lazy, Suspense } from "react";
import Typewrite from "./Typewriter";
import Spin from "@utils/Loaders/Spin";
const Pic = lazy(() => import("./Hero_img"));

const Hero = () => {
  const GoTo = () => {
    const elementID = document.querySelector("#contactSection");
    elementID?.scrollIntoView({ behavior: "smooth" });
    return;
  };

  return (
    <section className="flex justify-around items-center p-7 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit grid gap-y-6 ">
        <p className="text-xl text-slate-50 font-mono text-center md:text-left">
         Hello, This is
        </p>
        <h1 className="text-4xl uppercase font-mono text-center md:text-left">
          Sourav{" "}
        </h1>
        <div className=" text-xl text-slate-50 font-sans ">
          <Typewrite />
        </div>
        <div className="flex justify-center align-middle md:justify-start">
          <button
            type="button"
            className="font-mono uppercase bg-transparent border-2 p-4 w-auto hover:bg-slate-100 hover:border-blue-500 hover:text-blue-500"
            onClick={GoTo}
          >
          Hire me
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ssm:w-fit p-2 ">
        <Suspense fallback={<Spin />}>
          <Pic />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
