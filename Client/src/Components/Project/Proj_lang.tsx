const Proj_lang = ({ techs }: { techs: string[] }) => {
  return (
    <div className="flex flex-wrap flex-row items-start justify-start pl-2">
      {techs.map((lang, index) => (
        <div
          key={index}
          className="badge badge-neutral mb-2 mr-2 text-black font-mono text-xs md:sm border-none bg-golden-150"
        >
          {lang}
        </div>
      ))}
    </div>
  );
};

export default Proj_lang;
