import { lazy, Suspense } from "react";
import Typewrite from "./Typewriter";
const Pic = lazy(() => import("./Hero_img"));
import Spin from "@utils/Loaders/Spin";

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-7 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit grid gap-y-2 ">
        <p className="text-xl  text-slate-300 font-mono text-center md:text-left">
          Hi, my name is
        </p>
        <h1 className="text-4xl uppercase font-mono text-center md:text-left">
          Sourav{" "}
        </h1>
        <div className=" text-xl text-slate-300 font-sans ">
          <Typewrite />
        </div>
        <div className="flex justify-center align-middle md:justify-start">
          <button
            type="button"
            className="font-mono uppercase bg-transparent border-2 p-4 w-auto"
          >
            get in touch
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ssm:w-fit p-2">
        <Suspense fallback={<Spin />}>
          <Pic />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
