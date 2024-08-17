import React from "react";
import { useState } from "react";
import Image from "next/image";
const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  return (
    <div className="mt-3">
      <form action="" className="">
        <div className="relative">
          <input
            type="text"
            id="question"
            className="rounded-lg  w-full pl-10  border text-center placeholder-metallic-gold border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
            placeholder="Enter the question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="question"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="bg-coyote flex flex-col items-center px-5 py-8 rounded-md m-5">
            <Image
              src="/images/addimage.svg"
              alt="logo"
              className="mt-2 h-auto w-auto"
              height={40}
              width={40}
            />
            <h1 className="text-heading-s text-hunyadi-yellow">
              +Upload Image
            </h1>
          </button>
        </div>
        <div className="flex justify-between ">
          <div className="space-y-5">
            <div className="relative">
              <Image
                src="/images/letterA.svg"
                alt="logo"
                className="mt-2 h-[34px] w-auto absolute inset-y-0 left-0 flex items-center mx-3"
                height={34}
                width={34}
              />
              <input
                type="text"
                id="option1"
                className="rounded-lg block w-full pl-20 border border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
                placeholder="Enter option"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                aria-label="option1"
              />
            </div>
            <div className="relative">
            <Image
                src="/images/letterC.svg"
                alt="logo"
                className="mt-2 h-[34px] w-auto absolute inset-y-0 left-0 flex items-center mx-3"
                height={34}
                width={34}
              />
              <input
                type="text"
                id="option2"
                className="rounded-lg block w-full pl-20 border border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
                placeholder="Enter option"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                aria-label="option2"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative">
            <Image
                src="/images/letterB.svg"
                alt="logo"
                className="mt-2 h-[34px] w-auto absolute inset-y-0 left-0 flex items-center mx-3"
                height={34}
                width={34}
              />
              <input
                type="text"
                id="option3"
                className="rounded-lg block w-full pl-20 border border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
                placeholder="Enter option"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                aria-label="option3"
              />
            </div>
            <div className="relative">
            <Image
                src="/images/letterD.svg"
                alt="logo"
                className="mt-2 h-[34px] w-auto absolute inset-y-0 left-0 flex items-center mx-3"
                height={34}
                width={34}
              />
              <input
                type="text"
                id="option4"
                className="rounded-lg block w-full pl-20 border border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
                placeholder="Enter option"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                aria-label="option4"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
