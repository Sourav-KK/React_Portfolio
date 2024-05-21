// import {
//   BsFacebook,
//   BsTwitter,
//   BsInstagram,
//   BsLinkedin,
//   BsPinterest,
// } from "react-icons/bs";
import HeroPic from "../assets/portrait.png";
import Typewrite from "../Utils/Typewriter";

const Hero = () => {
  return (
    <section className="flex justify-around items-center pb-7 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit grid gap-y-2">
        <p className="text-xl  text-slate-300 font-mono">Hi, my name is</p>
        <h1 className="text-4xl uppercase font-mono">Abdulla umar</h1>
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
      {/* <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button
          className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"
          type="button"
        >
          Show more...
        </button>

        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsLinkedin
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
