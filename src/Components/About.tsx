const About = () => {
  return (
    <div className="pt-24 pb-20 pl-20 pr-20 flex justify-center flex-col font-mono">
      <div className="flex text-indigo-600 font-bold text-3xl">
        <h1 className="uppercase p-3 font-mono">About</h1>
      </div>

      <div className="grid grid-cols-1 gap-1 pb-5 pt-5 text-slate-900">
        <p className="p-3">
          Hello! I'm <strong>Sourav</strong>, a self-taught{" "}
          <strong>MERN stack</strong> web developer hailing from{" "}
          <strong>Kochi, Kerala, India</strong>. My journey in web development
          is fueled by a deep-seated passion for music, technology, photography,
          and the myriad components that drive the digital era.
        </p>

        <p className="p-3">
          While my expertise lies in front-end development with React, I am
          equally prepared and eager to dive into backend challenges,
          particularly with Node.js. This dual capability is not only a
          testament to my commitment to learning but also keeps me connected
          with the fast-paced growth of development tools and practices.
        </p>

        <p className="p-3">
          As a proactive learner ready to embrace the multifaceted roles of a
          web developer, I am actively seeking opportunities to step into the
          industry. Whether you're a recruiter in search of a versatile fresh
          talent, a developer looking for a collaborative venture, or you'd just
          like to chat, I'm open to messages and ready to join forces.
        </p>

        <p className="p-3">
          If you're venturing into the digital space with an app or web
          development project and need a freelance developer, or if you're a
          developer keen on a joint creative effort, or simply want to exchange
          a friendly hello, please reach out. Together, we can turn visions into
          reality.
        </p>
      </div>
    </div>
  );
};

export default About;
