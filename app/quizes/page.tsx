import React from 'react'
import Navbar from '../components/navbar'
import CreateQuiz from '../components/CreateQuiz'
import QuizInfoCard from '../components/QuizInfoCard'
const Page = () => {
  return (
    <div>
    <div className="p-0 m-0">
      <Navbar />
      <div className="lg:grid lg:grid-cols-5 block h-full mt-3 lg:space-x-2">
        <div className=" flex justify-center lg:col-span-2 w-full lg:h-[89vh] h-[50vh] bg-coyote mx-auto items-center relative">
        <CreateQuiz/>
        </div>
        <div className="md:px-5 bg-white lg:col-span-3 m-0 relative">
          <QuizInfoCard/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page
