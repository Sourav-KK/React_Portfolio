const Heading = () => {
  const redirectGitHub = () => {
    window.open("lin", "_blank");
  };
  return (
    <div className="grid justify-items-center gap-y-2">
      <h1 className="text-4xl text-stone-800 mt-10 uppercase p-3 font-mono font-bold">
        Projects
      </h1>
      <h1 className="text-center text-lg font-mono text-stone-800">
        For a broader showcase of my work, please visit my
        <a
          href="#"
          className="link link-primary hover:link-info"
          onClick={redirectGitHub}
        >
          {" "}
          Github{" "}
        </a>
        profile.
      </h1>
    </div>
  );
};

export default Heading;
