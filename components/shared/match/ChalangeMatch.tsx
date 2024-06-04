import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

type ChalangeMatchProps = {
  matchData: any;
  currentState: any;
  setCurrentState: any;
};
const ChalangeMatch = ({
  matchData,
  currentState,
  setCurrentState,
}: ChalangeMatchProps) => {
  return (
    <motion.div>
      <div
        onClick={() => {
          setCurrentState(null);
        }}
        className="h-screen flex justify-center items-center w-full bg-opacity-70 bg-zinc-900 absolute top-0 left-0"
      >
        <div className="h-[500px] w-[800px] bg-stone-800 bg-opacity-100 rounded-md flex flex-col justify-between  z-50">
          {/* first div */}
          <div  >
            <div className="h-14 w-full border-b border-stone-700 flex items-center justify-between px-8 border-opacity-40">
              <p className="text-zinc-400">Chalange The Team</p>
              <div>
                <div className="bg-zinc-700 bg-opacity-50  group px-1 rounded-md py-1 cursor-pointer">
                  <X
                    className="text-zinc-500 group-hover:scale-110  group-hover:text-red-500 transition-all"
                    strokeWidth={1.5}
                    size={20}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between px-4 py-2">
              <div>
                <p className="text-xs text-zinc-500">TeamId:21510215</p>
                <p className="text-red-400 mt-3 text-4xl">Team Name: INDIA</p>
              </div>
              <div>
                <div className="h-32 w-32 bg-white"></div>
              </div>
            </div>
          </div>
          {/* second div */}
          <div className="px-4 py-2 w-full border-t border-stone-700 border-opacity-40" >
            <div className="w-full flex justify-end">
              <Button onClick={()=>{
                alert("working")
              }} >Chalange them</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChalangeMatch;
