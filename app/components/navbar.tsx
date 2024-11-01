"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  return (
    <div className="w-full top-0 bg-white my-3 overflow-x-hidden">
      <div className="max-w-[1800px] flex items-center justify-between md:mx-auto py-2 md:px-10 px-5 ">
        <a href="/">
        <div className="cursor-pointer flex items-center justify-center">
          <Image
            src="/images/gamelogo.svg"
            alt="logo"
            className="mt-2 h-auto w-auto"
            height={34}
            width={34}
          />
          <h1 className="text-heading-m pl-2 pt-2 hidden md:block">kwix</h1>
        </div>
        </a>
        <div className="flex ">
          <a href="/quizes">
          <div
            className={`cursor-pointer flex items-center justify-center px-6 rounded-lg ${
              currentPath.startsWith("/quizes") ? "text-hunyadi-yellow bg-coyote" : ""
            }`}
          >
            <Image
              src="/images/question.svg"
              alt="logo"
              className=" h-auto w-auto  md:py-2 py-3"
              height={34}
              width={34}
            />
            <h1
              className={`text-heading-s pl-1 hidden md:block ${
                currentPath === "/quizes" ? "text-hunyadi-yellow" : "text-light-black"
              }`}
            >
              Quizes
            </h1>
          </div>
          </a>
         <a href="/report">
         <div
            className={`cursor-pointer flex items-center justify-center py-1  px-6 rounded-lg ${
              currentPath === "/report" ? "text-hunyadi-yellow bg-coyote" : ""
            }`}
          >
            <Image
              src="/images/quizicon.svg"
              alt="logo"
              className=" h-[34px] w-auto md:mt-1 m-2"
              height={34}
              width={34}
            />
            <h1
              className={`text-heading-s pl-1  hidden md:block ${
                currentPath === "/report" ? "text-hunyadi-yellow  " : "text-light-black"
              }`}
            >
             Report
            </h1>
          </div>
         </a>
        </div>
        <div>
          <button className="border border-hunyadi-yellow text-hunyadi-yellow text-heading-s px-4 rounded-lg hidden md:block ">
            Host Game
          </button>
          <button className="border border-hunyadi-yellow text-hunyadi-yellow text-heading-s px-4 py-3 rounded-lg block md:hidden ">
          <Image
              src="/images/gameIcon.svg"
              alt="logo"
              className=" h-5 w-5  "
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
