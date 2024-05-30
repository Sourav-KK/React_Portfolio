import HeroPic from "../../assets/portrait.png";

const Hero_img = () => {
  return (
    <>
      <img
        className="rounded-full w-full border-solid border-2 border-white"
        src={HeroPic}
        alt="sourav"
        width={250}
        height={250}
        loading="lazy"
      />
    </>
  );
};

export default Hero_img;
