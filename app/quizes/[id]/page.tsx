"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/navbar";
import QuestionForm from "../../components/QuestionForm";
import EmptyQuestions from "../../components/EmptyQuestions";
import { useParams } from "next/navigation";

type Question = {
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer: string;
  image: File | null;
  [key: string]: any;
};

const fetchQuestions = async (
  accessToken: string,
  quizID: string
): Promise<Question[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/questions/${quizID}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Question[] = await response.json();
    console.log("Fetched questions:", data);
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

const Page = () => {
  
  const [questions, setQuestions] = useState<Question[]>([]); // Apply Question[] type
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null); // Add image state

  const { id } = useParams();

  const newQuestionTemplate: Question = {
    text: "",
    options: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    correct_answer: "",
    image: null, // as unknown as File,
  };

  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const itemsPerPage = 1;

  const quizID = Array.isArray(id) ? id[0] : id;

  const loadQuestions = async () => {
    if (accessToken && id) {
      const data = await fetchQuestions(accessToken, quizID);
      setQuestions(data);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [accessToken, id]);

  const handleNextPage = () => {
    if (currentPage < questions.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setQuestions((prevQuestions) =>
        prevQuestions.map((q, index) =>
          index === currentPage ? { ...q, image: file } : q
        )
      );
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      const currentQuestion = questions[currentPage];
      formData.append("text", currentQuestion.text);
      formData.append(
        "options",
        JSON.stringify({
          A: currentQuestion.options.A,
          B: currentQuestion.options.B,
          C: currentQuestion.options.C,
          D: currentQuestion.options.D,
        })
      );
      formData.append("correct_answer", currentQuestion.correct_answer);
  
      if (image) {
        formData.append("image", image);
      }
      console.log(formData)
  
      // Determine the URL based on whether it's a new question or an update
      const url = currentQuestion.id
        ? `${process.env.NEXT_PUBLIC_API_URL}/game/questions/update/${currentQuestion.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/game/questions/create/${quizID}`;
  
      const response = await fetch(url, {
        method: currentQuestion.id ? "PUT" : "POST", // Use PUT for updates and POST for new creations
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: formData,
      });
  
      const result = await response.json();
      if (!response.ok) {
        console.log("Error response:", result);
        throw new Error(result.detail || "Request failed");
      }
  
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const addEmptyQuestion = () => {
  
      setQuestions((prevQuestions) => [...prevQuestions, newQuestionTemplate]);
      setCurrentPage(questions.length);
  };

  const currentQuestion = questions[currentPage] || {};

  return (
    <div>
      <Navbar />
      <div className="flex h-full mt-3">
        <div className="px-5 bg-white lg:min-w-[900px] mx-auto pb-24 relative">
          <h1 className="text-heading-m pt-5">Customize your questions</h1>
          <p className="text-body-m text-light-black">
            Add/edit/remove questions and then play with friends!
          </p>
          {error && <div className="text-red-500">{error}</div>}
          <button
            className="text-heading-s text-hunyadi-yellow border border-hunyadi-yellow w-full rounded-lg mt-8 mb-5"
            onClick={addEmptyQuestion}
          >
            + { "Add new question"}
          </button>
          <div className="lg:h-[500px] overflow-y-scroll scrollbar-hide">
            {questions.length > 0 ? (
              <div>
                <QuestionForm
                  question={currentQuestion.text || ""}
                  setQuestion={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage] = {
                        ...updated[currentPage],
                        text: value,
                      };
                      return updated;
                    })
                  }
                  option1={currentQuestion.options?.A || ""}
                  setOption1={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage].options.A = value;
                      return updated;
                    })
                  }
                  option2={currentQuestion.options?.B || ""}
                  setOption2={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage].options.B = value;
                      return updated;
                    })
                  }
                  option3={currentQuestion.options?.C || ""}
                  setOption3={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage].options.C = value;
                      return updated;
                    })
                  }
                  option4={currentQuestion.options?.D || ""}
                  setOption4={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage].options.D = value;
                      return updated;
                    })
                  }
                  correctOption={currentQuestion.correct_answer || ""}
                  setCorrectOption={(value) =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[currentPage].correct_answer = value;
                      return updated;
                    })
                  }
                  image={image || currentQuestion.image}
                  handleImageUpload={handleImageUpload}
                  handleSubmit={handleSubmit}
                  currentQuestion={currentPage + 1}
                  totalQuestions={questions.length}
                />
              </div>
            ) : (
              <EmptyQuestions />
            )}
          </div>
          <div className="flex md:justify-between space-x-2 mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            {questions.length > 0 && (
              <div className="text-center mb-4 text-hunyadi-yellow hidden md:block font-semibold">
                Question {currentPage + 1} of {questions.length}
              </div>
            )}
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handleNextPage}
              disabled={currentPage >= questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
