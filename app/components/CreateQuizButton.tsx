'use client'
import React, {useState} from "react";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CreateQuizButton = () => {
  const [quizName, setQuizName] = useState('')

  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const url = `${process.env.NEXT_PUBLIC_API_URL}/game/quiz/create`;

    try {
      const response = await fetch(url, {
        method: "POST", // Change to POST method
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ name: quizName }), // Send quiz name as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to create quiz");
      }

      const data = await response.json();
      console.log("Quiz Created:", data); // Handle the response data as needed

      // Reset the input field and optionally close the dialog
      setQuizName("");
    } catch (error) {
      console.error("Error creating quiz:", error);
      // Handle the error (e.g., show a message to the user)
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="shadow text-heading-s text-hunyadi-yellow border border-hunyadi-yellow rounded-lg w-full">
          Create Kwix
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Kwix</DialogTitle>
          <DialogDescription>Give your kwix a name.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                type="text"
                id="option1"
                className="rounded-lg block w-full pl-5 border col-span-3 border-dark-grey text-body-m focus:border-metallic-gold focus:outline-metallic-gold focus:shadow-sm focus:shadow-metallic-gold"
                placeholder="Enter Name"
                aria-label="option1"
                value={quizName}
                onChange={(e)=>setQuizName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit" className="bg-hunyadi-yellow text-white text-heading-s w-full rounded-lg mt-5">
              submit
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuizButton;
