import Spin from "@utils/Loaders/Spin";
import { Suspense } from "react";

const Avatar = ({ img, altText }: { img: string; altText: string }) => {
  return (
    <div className="avatar w-full flex justify-center items-center p-3">
      <Suspense fallback={<Spin />}>
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt={altText} loading="lazy" />
        </div>
      </Suspense>
    </div>
  );
};

export default Avatar;
