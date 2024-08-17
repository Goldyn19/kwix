'use client'
import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image';
import QuestionForm from '../components/QuestionForm';
import EmptyQuestions from '../components/EmptyQuestions';
const Page = () => {
    const [formVisible, setFormVisible] = useState(false);

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
          <div className="bg-[#EEEEEE] rounded-full h-[100px] w-[100px] z-10 flex justify-between absolute top-32"></div>
          <div className="bg-[#EEEEEE] rounded-lg h-[16px] w-[160px] z-10 flex justify-between absolute top-60 mt-3 "></div>
          <div className="bg-[#EEEEEE] rounded-lg h-[8px] w-[72px] z-10 flex justify-between absolute top-72  "></div>
          <div className="p-5 space-y-4 z-10 flex flex-col justify-between absolute bottom-28 h-[300px] overflow-y-scroll scrollbar-hide">
           
          </div>
        </div>
        <div className="px-5 bg-white col-span-3 ml-2 pb-24 relative">
          <h1 className="text-heading-m pt-5">Customize your questions</h1>
          <p className="text-body-m text-light-black">
            Add/edit/remove links questions and then play with friends!
          </p>
          <button
            className="text-heading-s text-hunyadi-yellow border border-hunyadi-yellow w-full rounded-lg mt-8 mb-5 z-10 "
            onClick={toggleForm}
          >
            + {formVisible ? 'Cancel' : 'Add new question'}
          </button>
          <div className="lg:h-[400px] overflow-y-scroll scrollbar-hide">
          {formVisible ? <QuestionForm /> : <EmptyQuestions />}
          </div>
         
          <hr className="w-full mt-8 mb-5 border-light-black" />
          <button
            className={`py-4 rounded-lg px-5 absolute right-5 bg-hunyadi-yellow`}
           
          >
            Save
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page
