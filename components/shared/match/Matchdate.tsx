"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { FormContext } from "@/providers/FormProvider"

  interface IDateProps {
    date:Date | undefined,
    setDate:any
  }

const Matchdate = ({date , setDate}:IDateProps) => {

    const {Step ,backStep , customStep , nextStep} = React.useContext(FormContext)
  return (
    <div>
         <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[700px] bg-stone-800 border-zinc-700 hover:bg-stone-800 hover:text-zinc-200 justify-start text-left font-normal text-zinc-400",
            !date && "text-zinc-300"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-stone-800 text-zinc-400 border-zinc-600  p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>

    <div className='w-full flex gap-2 mt-4 justify-end items-center' >
        <Button className="bg-stone-800 group hover:bg-stone-800 hover:text-zinc-300  flex items-center justify-center" onClick={()=>{
            backStep();
          }} >
            <ChevronLeft
              className="text-white transition-all group-hover:-translate-x-1"
              strokeWidth={1.75}
              size={20}
            />
            Back
          </Button>

          <Button onClick={()=>{
            nextStep();
          }} className="bg-green-400  hover:bg-green-300 group text-zinc-800 font-medium flex items-center justify-center">
            Next Step
            <ChevronRight
              className="group-hover:translate-x-1 transition-all"
              strokeWidth={1.75}
              size={20}
            />
          </Button>
        </div>
    </div>
  )
}

export default Matchdate