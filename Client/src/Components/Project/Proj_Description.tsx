const Proj_Description = ({ Description }: { Description: string }) => {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <p className="text-start font-mono pl-2 text-sm md:text-lg text-stone-800">
          {Description}
        </p>
        <div className="divider divider-neutral"></div>
      </div>
    </>
  );
};

export default Proj_Description;
