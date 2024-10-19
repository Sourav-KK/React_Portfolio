const About = () => {
  return (
    <section className="" id="aboutSection">
      <div
        className=" p-10 md:p-20 flex justify-center flex-col font-mono bg-slate-50"
        id="aboutSection"
      >
        <div className="flex text-indigo-600 font-bold text-3xl">
          <h1 className="uppercase p-3 font-mono">About</h1>
        </div>

        <div className="grid grid-cols-1 gap-1 pb-5 pt-5 text-slate-900 ">
          <p className="p-3 text-lg">
            Hello! I'm <strong>Sourav</strong>, a self-taught{" "}
            <strong>MERN stack</strong> web developer hailing from{" "}
            <strong>Kochi, Kerala, India</strong>. My passion for technology
            drives my journey in web development. While I specialize in
            front-end development, I’m also eager to tackle backend challenges
            with Node.js. This dual expertise reflects my commitment to learning
            and staying updated with the latest development tools and practices.
          </p>

          <p className="p-3 text-lg">
            As a proactive learner, I’m seeking opportunities to enter the
            industry. Whether you’re a recruiter looking for versatile talent, a
            developer interested in collaboration, If you have a digital project
            or want to collaborate, please reach out. Together, we can turn
            visions into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
