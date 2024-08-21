"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import QuestionForm from "../components/QuestionForm";
import EmptyQuestions from "../components/EmptyQuestions";

const Page = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const[correctOption, setCorrectOption] = useState('')

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div>
      <div className="p-0">
        <Navbar />
        <div className="lg:grid lg:grid-cols-5 block h-full mt-3">
          <div className="hidden lg:flex justify-center col-span-2 w-full h-full bg-white mx-auto items-center relative">
            <Image
              src="/images/previewicon.svg"
              alt="Mobile Preview"
              className="h-auto w-auto"
              height={632}
              width={308}
            />
            <div className="bg-[#EEEEEE] min-h-[30px] w-[250px] z-10 flex absolute top-32 items-center justify-center p-2 overflow-hidden ">
              <h1 className="text-center">{question}</h1>
            </div>
            <div className="bg-[#EEEEEE] rounded-lg h-auto  w-[250px] z-10 flex justify-between absolute top-60 mt-3 "></div>
            <div className=" rounded-lg h-auto w-[250px] z-10 flex justify-between absolute top-72  ">
              <div className="space-y-5">
                <div className="bg-[#EEEEEE] w-[110px] min-h-[30px] flex text-center justify-center p-2 overflow-hidden">
                    <h1 className="text-center">
                    {option1}
                    </h1>
                </div>
                <div className="bg-[#EEEEEE] w-[110px] min-h-[30px] flex justify-center p-2 overflow-hidden">
                    <h1 className="text-center">
                    {option2}
                    </h1>
                </div>
              </div>
              <div className="space-y-5">
                <div className="bg-[#EEEEEE] w-[110px] min-h-[30px] flex justify-center p-2 overflow-hidden">
                    <h1 className="text-center">
                    {option3}
                    </h1>
                </div>
                <div className="bg-[#EEEEEE] w-[110px] min-h-[30px] flex justify-center p-2 break-words overflow-hidden">
                    <h1 className="text-center">
                    {option4}
                    </h1>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4 z-10 flex flex-col justify-between absolute bottom-28 h-[300px] overflow-y-scroll scrollbar-hide"></div>
          </div>
          <div className="px-5 bg-white col-span-3 ml-2 pb-24 relative">
            <h1 className="text-heading-m pt-5">Customize your questions</h1>
            <p className="text-body-m text-light-black">
              Add/edit/remove questions and then play with friends!
            </p>
            <button
              className="text-heading-s text-hunyadi-yellow border border-hunyadi-yellow w-full rounded-lg mt-8 mb-5 z-10"
              onClick={toggleForm}
            >
              + {formVisible ? "Cancel" : "Add new question"}
            </button>
            <div className="lg:h-[400px] overflow-y-scroll scrollbar-hide">
              {formVisible ? (
                <QuestionForm
                  question={question}
                  setQuestion={setQuestion}
                  option1={option1}
                  setOption1={setOption1}
                  option2={option2}
                  setOption2={setOption2}
                  option3={option3}
                  setOption3={setOption3}
                  option4={option4}
                  setOption4={setOption4}
                  correctOption={correctOption}
                  setCorrectOption={setCorrectOption}
                
                />
              ) : (
                <EmptyQuestions />
              )}
            </div>

            <hr className="w-full mt-8 mb-5 border-light-black" />
            <button className="py-4 rounded-lg px-5 absolute right-5 bg-hunyadi-yellow">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
