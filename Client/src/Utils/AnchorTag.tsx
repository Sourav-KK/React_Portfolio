const AnchorTag = ({ link, title }: { link: string; title: string }) => {
  const handleClick = (id: string) => {
    const elementID = document.querySelector(id);

    elementID?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <a
        onClick={() => handleClick(link)}
        className="text-white hover:text-slate-300 cursor-pointer rounded-full px-5 py-2 text-xl transition-colors ease-in"
      >
        {title}
      </a>
    </>
  );
};

export default AnchorTag;
