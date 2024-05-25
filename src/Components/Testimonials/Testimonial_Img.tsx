import React from "react";

const Testimonial_Img = ({img}:{img: string}) => {
  return (
    <>
      <img src={img} loading="lazy" />
    </>
  );
};

export default Testimonial_Img;
