import Cards from "./Cards";

const Projects = () => {
  const redirectGitHub = () => {
    window.open("lin", "_blank");
  };
  return (
    <div className="bg-cream-50 rounded-md  max-w-full" id="projectSection">
      <div className="grid justify-items-center  gap-y-2">
        <h1 className="text-4xl text-stone-800 mt-10 uppercase p-3 font-mono font-bold">
          Projects
        </h1>
        <h1 className="text-center text-lg font-mono text-stone-800">
          For a broader showcase of my work, please visit my
          <a
            href="#"
            className="underline font-mono text-blue-400 hover:text-blue-700"
            onClick={redirectGitHub}
          >
            {" "}
            Github{" "}
          </a>
          profile.
        </h1>
      </div>

      <>
        <Cards />
      </>
    </div>
  );
};

export default Projects;
