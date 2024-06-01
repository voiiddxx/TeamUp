import { createContext, ReactNode, useState } from "react";



const FormContext = createContext({});

interface IForm {
    children:ReactNode
}
 export const FormProvider = ({children}:IForm)=>{

    const [Step, setStep] = useState<number>(0);
    

    const next = ()=>{
        setStep(prev => prev+1);
    }

    const back = ()=>{
        setStep(prev => prev-1);
    }

    const customstep = (step:number)=>{
        setStep(step);
    }


    return <FormContext.Provider value={""} >{children}</FormContext.Provider>
}