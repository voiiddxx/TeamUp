import { FormContext } from '@/providers/FormProvider'
import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { IndianRupee } from 'lucide-react'

const ProgressBar = () => {

    const {Step , backStep , customStep , nextStep} = useContext(FormContext)
  return (
    <div className='flex' >
        {
            Step>0 && (
               <div className='flex items-center' >
                <div className='relative' >
                    <div className='h-10 w-10 flex items-center justify-center rounded-full border border-zinc-500' >
                        <IndianRupee className='text-green-500' strokeWidth={1.5} size={20} />
                    </div>
                    <p className='absolute -bottom-6 left-0 text-zinc-400 w-full text-center text-xs'>
                        Ammount
                    </p>
                
                </div>
                 <div className='h-[2px] w-52 bg-green-500' ></div>
               </div>
            )
        }
        {
            Step>1 && (
               <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:0.7 , ease:'linear'}}
               >
                <div className='flex items-center' >
                <div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-full border border-zinc-500' >
                        <IndianRupee className='text-green-500' strokeWidth={1.5} size={20} />
                    </div>
                </div>
                 <div className='h-[2px] w-52 bg-green-500' ></div>
               </div>
               </motion.div>
            )
        }
        {
            Step>2 && (
                <div className='flex items-center' >
                <div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-full border border-zinc-500' >
                        <IndianRupee className='text-green-500' strokeWidth={1.5} size={20} />
                    </div>
                </div>
                 <div className='h-[2px] w-52 bg-green-500' ></div>
               </div>
            )
        }
        {
            Step>3 && (
                <div className='flex items-center' >    
                <div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-full border border-zinc-500' >
                        <IndianRupee className='text-green-500' strokeWidth={1.5} size={20} />
                    </div>
                </div>
                 <div className='h-[2px] w-52 bg-green-500' ></div>
               </div>
            )
        }
    </div>
  )
}

export default ProgressBar