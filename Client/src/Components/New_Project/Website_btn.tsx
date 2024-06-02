import { FaAnglesRight } from "@utils/React-icons";

const Website_btn = () => {
  //   const redirectWebsite = (link: string) => {
  //       window.open(link, "_blank");
  //     };
  return (
    <div className="flex justify-center items-center flex-col border-t-2 border-stone-800 pt-2">
      <button
        type="button"
        className="btn rounded-md border-2 border-solid border-white p-2 bg-black text-white hover:scale-105 hover:bg-golden-100  hover:text-stone-800 hover:border-none"
        // onClick={() => redirectWebsite(project.link)}
      >
        Visit website
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default Website_btn;
