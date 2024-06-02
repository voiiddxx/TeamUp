import { FormContext } from "@/providers/FormProvider";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
    Boxes,
  Calendar,
  CheckCheck,
  Feather,
  IndianRupee,
  LocateIcon,
  PiggyBank,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ProgressBar = () => {
  const { Step, backStep, customStep, nextStep } = useContext(FormContext);
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center justify-center ">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.7 , ease:"easeIn"}}
      >
        <motion.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.7 , ease:"easeIn"}}
             className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
          <PiggyBank strokeWidth={1.5} size={20} className={`text-zinc-400`} />
        </motion.div>
        <p className="text-xs font-light text-zinc-400 mt-5 absolute">
          Ammount
        </p>
      </motion.div>

      {Step >= 1 && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center">
          <motion.div
            className={cn(
              "h-[1px] w-52 ",
              Step > 1 ? "bg-green-400" : "bg-stone-700"
            )}
          ></motion.div>
          <motion.div>
            <motion.div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 1 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 1 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <LocateIcon
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 1 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </motion.div>
            <p
              className={cn(
                "text-xs font-light mt-5 absolute",
                Step > 1 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Location
            </p>
          </motion.div>
        </motion.div>
      )}
      {Step >= 2 && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center">
          <motion.div
            className={cn(
              "h-[1px] w-52 ",
              Step > 2 ? "bg-green-400" : "bg-stone-700"
            )}
          ></motion.div>
          <motion.div>
            <motion.div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 2 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 2 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <Feather
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 2 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </motion.div>
            <p
              className={cn(
                "text-xs font-light mt-2 absolute",
                Step > 2 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Details
            </p>
          </motion.div>
        </motion.div>
      )}
      {Step >= 3 && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center">
          <motion.div
            className={cn(
              "h-[1px] w-52 ",
              Step > 3 ? "bg-green-400" : "bg-stone-700"
            )}
          ></motion.div>
          <motion.div>
            <motion.div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 3 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 3 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <Calendar
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 3 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </motion.div>
            <p
              className={cn(
                "text-xs font-light mt-3 absolute",
                Step > 3 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Date/Time
            </p>
          </motion.div>
        </motion.div>
      )}

      {Step >= 4 && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center">
          <motion.div
            className={cn(
              "h-[1px] w-52 ",
              Step > 4 ? "bg-green-400" : "bg-stone-700"
            )}
          ></motion.div>
          <motion.div>
            <motion.div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 4 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 4 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <Boxes
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 4 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </motion.div>
            <p
              className={cn(
                "text-xs font-light mt-4 absolute",
                Step > 4 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Team Selection
            </p>
          </motion.div>
        </motion.div>
      )}

      {Step >= 5 && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center">
          <motion.div
            className={cn(
              "h-[1px] w-52 ",
              Step > 5 ? "bg-green-400" : "bg-stone-700"
            )}
          ></motion.div>
          <motion.div>
            <motion.div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 5 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 5 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <Send
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 5 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </motion.div>
            <p
              className={cn(
                "text-xs font-light mt-5 absolute",
                Step > 5 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Submission
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProgressBar;
