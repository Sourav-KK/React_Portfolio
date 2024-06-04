import HeroPic from "../../assets/portrait.png";

const Hero_img = () => {
  return (
    <picture>
      <img
        className="rounded-full w-full  "
        src={HeroPic}
        alt="sourav"
        width={250}
        height={250}
        loading="lazy"
        decoding="async"
        role="presentation"
      />
    </picture>
  );
};

export default Hero_img;
