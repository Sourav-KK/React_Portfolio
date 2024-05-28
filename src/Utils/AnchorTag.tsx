const AnchorTag = ({
  link,
  style,
  title,
}: {
  link: string;
  style: string;
  title: string;
}) => {
  const handleClick = (id: string) => {
    const elementID = document.querySelector(id);

    elementID?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <a onClick={() => handleClick(link)} className={style}>
        {title}
      </a>
    </>
  );
};

export default AnchorTag;
