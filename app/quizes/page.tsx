"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from '../components/navbar';
import CreateQuiz from '../components/CreateQuiz';
import QuizInfoCard from '../components/QuizInfoCard';

interface Quiz {
  id: number;
  name: string;
  created_by_username: string;
  question_count?: number; 
}


const Page = () => {
  const { data: session } = useSession();

  const [quizzes, setQuizzes] = useState<Quiz[]>([]); 

  const fetchQuizzes = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/game/quiz`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      const data = await response.json();
      console.log(data);

      if (data?.data?.length > 0) {
        setQuizzes(data.data); 
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  useEffect(() => {
    if (session?.accessToken) {
      fetchQuizzes();
    }
  }, [session]);

  return (
    <div>
      <div className="p-0 m-0">
        <Navbar />
        <div className="lg:grid lg:grid-cols-5 block h-full mt-3 lg:space-x-2">
          <div className="flex justify-center lg:col-span-2 w-full lg:h-[89vh] h-[50vh] bg-coyote mx-auto items-center relative">
            <CreateQuiz />
          </div>
          <div className="md:px-5 bg-white lg:col-span-3 m-0 relative">
            {quizzes.map((quiz, index) => (
              <QuizInfoCard
                key={quiz.id || index} // Use quiz.id as key, fallback to index
                username={quiz.created_by_username}
                quizName={quiz.name}
                questionCount={quiz.question_count || 0} // Fallback to 0 if question_count is missing
                quizID={quiz.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
