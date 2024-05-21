import Typewriter from "typewriter-effect";

const Typewrite = () => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Web developer")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString("MERN stack developer")
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString("Backend developer")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString("Frontend developer")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2000)
            .start();
        }}
      />
    </>
  );
};

export default Typewrite;
