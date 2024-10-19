import Spin from "@utils/Loaders/Spin";
// import Default_dp from "@utils/onError/default_dp";
import { default_dp } from "@utils/Images";

import { Suspense } from "react";

const Avatar = ({ img, altText }: { img: string; altText: string }) => {
  return (
    <div className="avatar w-full flex justify-center items-center p-3">
      <Suspense fallback={<Spin />}>
        <picture className="size-12 md:size-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src={img}
            alt={altText}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = default_dp;
            }}
          />
        </picture>
      </Suspense>
    </div>
  );
};

export default Avatar;
