import React from 'react'
import Image from "next/image";
const EmptyQuestions = () => {
  return (
    <div className="flex flex-col mx-auto justify-center align-middle items-center bg-light-grey    ">
         <Image
          src="/images/emptyquestion.svg"
          alt="logo"
          className="mt-2 h-auto w-auto"
          height={161}
          width={250}
        />
    <h1 className="text-heading-m my-5">Let’s get you started</h1>
    <h1 className="text-body-m text-light-black w-[500px] text-center text leading-tight my-5">Use the “Create new question” button to get started. Once you have more than one question, you can create a quiz and host a game. We’re here to help you enjoy fun time with family and friends!</h1>
  </div>
  )
}

export default EmptyQuestions
