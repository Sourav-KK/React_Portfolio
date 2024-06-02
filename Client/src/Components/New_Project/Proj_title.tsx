const Proj_title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className="text-balance pl-2 font-mono text-left text-3xl font-bold text-stone-800 ">
        {title}
      </h1>
      <div className="divider divider-neutral"></div>
    </div>
  );
};

export default Proj_title;
