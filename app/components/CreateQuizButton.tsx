import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const CreateQuizButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="shadow text-heading-s text-hunyadi-yellow border border-hunyadi-yellow rounded-lg w-full">Create Kwix</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Kwix</DialogTitle>
          <DialogDescription>
            Give your kwix a name.
          </DialogDescription>
        </DialogHeader>
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
              />
          </div>
          
        </div>
        <DialogFooter>
          <button className="bg-hunyadi-yellow text-white text-heading-s w-full rounded-lg mt-5">submit</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateQuizButton
