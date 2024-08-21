import React from "react";
import Image from "next/image";
const QuizInfoCard = () => {
  return (
    <div className=" w-full  flex bg-[#fafafa] py-2 m-1  ">
      <div className="relative ">
        <Image
          src="/images/placeholder-cover.svg"
          alt="Mobile Preview"
          className="md:h-[120px] h-[90px] w-auto bg-coyote"
          height={120}
          width={180}
        />
        <div>
          <h1 className="absolute right-0 bottom-0 mx-2 text-body-m hidden md:block">2 Questions</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between px-2">
          <div className="text-heading-s ml-3">test</div>
          <div className="flex space-x-2">
            <Image
              src="/images/pen.svg"
              alt="Mobile Preview"
              className="h-[32px] w-[32px] p-1 cursor-pointer"
              height={32}
              width={32}
            />
            <Image
              src="/images/deleteIcon.svg"
              alt="Mobile Preview"
              className="h-[32px] w-[32px] p-1 cursor-pointer"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className=" hidden md:flex">
            <Image
              src="/images/profile.svg"
              alt="Mobile Preview"
              className="h-[32px] w-[32px] p-1 mt-2 "
              height={32}
              width={32}
            />
            <h1 className=" text-body-m">Goldyn211</h1>
          </div>
          <div className="flex space-x-3 justify-between md:justify-normal w-full md:w-auto">
            <h1 className="mt-3 hidden md:block">5 Plays</h1>
            <h1 className="mt-3 block md:hidden">2 Questions</h1>
            <button className="bg-hunyadi-yellow rounded-lg p-2 ">Host live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInfoCard;
