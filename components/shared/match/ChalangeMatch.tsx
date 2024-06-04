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
      }} className="h-[800px] w-full bg-opacity-65 bg-zinc-900 absolute top-0 left-0"></div>
    </motion.div>
  );
};

export default ChalangeMatch;
