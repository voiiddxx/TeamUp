import { motion } from "framer-motion";
import React from "react";

type ChalangeMatchProps = {
  matchData: any;
  currentState:any
  setCurrentState:any
};
const ChalangeMatch = ({ matchData , currentState , setCurrentState }: ChalangeMatchProps) => {
  return (
    <motion.div>
      <div onClick={()=>{
        setCurrentState(null);
      }} className="h-screen flex justify-center items-center w-full bg-opacity-65 bg-zinc-900 absolute top-0 left-0">
        <div className="h-[500px] w-[800px] bg-stone-800 bg-opacity-100 rounded-sm" >

        </div>
      </div>
    </motion.div>
  );
};

export default ChalangeMatch;
