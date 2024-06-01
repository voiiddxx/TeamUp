import { createContext, ReactNode, useContext, useState } from "react";



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


    return <FormContext.Provider value={{Step , next , back , customstep}} >{children}</FormContext.Provider>
}

export  function userFormState(){
    return useContext(FormContext);
}