import Typewriter from "typewriter-effect";

const Typewrite = () => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Web Developer")

            .pauseFor(2000)
            .deleteAll()
            .typeString("MERN Stack Developer")

            .pauseFor(2000)
            .deleteAll()
            .typeString("Backend Developer")

            .pauseFor(2000)
            .deleteAll()
            .typeString("Frontend Developer")

            .pauseFor(2000)
            .start();
        }}
      />
    </>
  );
};

export default Typewrite;
