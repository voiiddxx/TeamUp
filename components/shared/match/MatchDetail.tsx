import { Button } from '@/components/ui/button';
import { FormContext } from '@/providers/FormProvider';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form';

    interface IDetailProps {
        Detail:string
        setDetail:any
    }

const MatchDetail = ( {Detail , setDetail}:IDetailProps) => {

    const {Step , backStep , customStep , nextStep} = useContext(FormContext);
  return (
    <div className='w-[700px] flex flex-col items-center justify-center' >
        <textarea className='h-[200px] w-[700px] outline-none  bg-stone-800 border border-zinc-700 px-4 py-2 focus:border-green-500 text-zinc-300' onChange={(e)=>{
            setDetail(e.target.value)
        }} placeholder='Match Details | Rules | Guildlens : Note' ></textarea>
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

export default MatchDetail
