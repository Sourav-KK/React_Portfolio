const AnchorTag = ({
  link,
  style,
  title,
}: {
  link: string;
  style: string;
  title: string;
}) => {
  return (
    <>
      <a href={link} className={style}>
        {title}
      </a>
    </>
  );
};

export default AnchorTag;
