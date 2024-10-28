import React from "react";
import Image from "next/image";
import Link from "next/link";

interface QuizCardProps  {
  username: string;
  quizName: string;
  questionCount: number;
  quizID: number
}

const QuizInfoCard: React.FC<QuizCardProps> = ({
  username,
  quizName,
  questionCount,
  quizID
}) => {
  const handleDeleteQuiz = () => {
    console.log(`delete quiz ${quizID}`)
  }

  const handleEditQuiz = () => {
    console.log(`edit quiz ${quizID}`);
    
  };
  return (
    
    <div className=" w-full  flex bg-[#fafafa] py-2 m-1" >
      <div className="relative ">
        <Image
          src="/images/placeholder-cover.svg"
          alt="Mobile Preview"
          className="md:h-[120px] h-[90px] w-auto bg-coyote"
          height={120}
          width={180}
        />
        <div>
          <h1 className="absolute right-0 bottom-0 mx-2 text-body-m hidden md:block">{questionCount} Questions</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between px-2">
          <a href={`/quizes/${quizID}`} className="text-heading-s ml-3">{quizName}</a>
          <div className="flex space-x-2">
            <button onClick={handleEditQuiz}>
            <Image
              src="/images/pen.svg"
              alt="Mobile Preview"
              className="h-[32px] w-[32px] p-1 cursor-pointer"
              height={32}
              width={32}
            />
            </button>
            <button onClick={handleDeleteQuiz}>
            <Image
              src="/images/deleteIcon.svg"
              alt="Mobile Preview"
              className="h-[32px] w-[32px] p-1 cursor-pointer"
              height={32}
              width={32}
            />
            </button>
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
            <h1 className=" text-body-m">{username}</h1>
          </div>
          <div className="flex space-x-3 justify-between md:justify-normal w-full md:w-auto">
            <h1 className="mt-3 hidden md:block">5 Plays</h1>
            <h1 className="mt-3 block md:hidden">{questionCount} Questions</h1>
            <button className="bg-hunyadi-yellow rounded-lg p-2 ">Host live</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default QuizInfoCard;
