import { Other_skils } from "@utils/Constants";

const InfinityScroll = ({ ariaVal }: { ariaVal: boolean }) => {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={ariaVal}
    >
      {Other_skils.map((elem, index) => (
        <div key={index}>
          <li>
            <elem.Icon
              title={elem.Title}
              size={40}
              color="#eeeee4"
              className={`hover:scale-105`}
            />
          </li>
          <li className="text-sm font-mono font-light text-clip text-white">
            {elem.Title}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default InfinityScroll;
