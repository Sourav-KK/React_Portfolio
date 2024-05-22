import HeroPic from "../assets/portrait.png";
import Typewrite from "../Utils/Typewriter";

const Hero = () => {
  return (
    <section className="flex justify-around items-center pb-7 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit grid gap-y-2">
        <p className="text-xl  text-slate-300 font-mono">Hi, my name is</p>
        <h1 className="text-4xl uppercase font-mono">Sourav </h1>
        <p className=" text-xl text-slate-300 font-sans">
          <Typewrite />
        </p>
        <div className="flex">
          <button
            type="button"
            className="font-mono uppercase bg-transparent border-2 p-4 w-3/6"
          >
            get in touch
          </button>
        </div>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img
          src={HeroPic}
          alt="image"
          width={250}
          height={250}
          className="rounded-full w-full border-solid border-2 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
