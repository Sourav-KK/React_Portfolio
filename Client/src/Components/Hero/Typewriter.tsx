import Typewriter from "typewriter-effect";

const Typewrite = () => {
  return (
    <>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
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
            .deleteAll()

            .start();
        }}
      />
    </>
  );
};

export default Typewrite;
