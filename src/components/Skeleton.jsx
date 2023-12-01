import React from "react";

const SkeletonItem = () => {
  return (
    <div className="animate-pulse my-2 bg-gray-600 rounded p-3 w-[49%] lg:w-[24%]">
      <div className="h-[100px] w-full bg-gray-400"></div>
      <p className="w-full h-[10px] bg-gray-400 my-4"></p>
      <p className="w-full h-[10px] bg-gray-400 my-4"></p>
      <p className="w-full h-[10px] bg-gray-400 my-4"></p>
    </div>
  );
};

const Skeleton = () => {
  return (
    <>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </>
  );
};

export default Skeleton;
