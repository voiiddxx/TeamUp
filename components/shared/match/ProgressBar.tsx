import { FormContext } from "@/providers/FormProvider";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
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
    <div className="flex items-center justify-center">
      <div>
        <div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
          <PiggyBank strokeWidth={1.5} size={20} className={`text-zinc-400`} />
        </div>
        <p className="text-xs font-light text-zinc-400 mt-4 absolute">
          Ammount
        </p>
      </div>

      {Step >= 1 && (
        <div className="flex items-center">
          <div
            className={cn(
              "h-[1px] w-60 ",
              Step > 1 ? "bg-green-400" : "bg-stone-700"
            )}
          ></div>
          <div>
            <div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
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
            </div>
            <p
              className={cn(
                "text-xs font-light mt-4 absolute",
                Step > 1 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Location
            </p>
          </div>
        </div>
      )}
      {Step >= 2 && (
        <div className="flex items-center">
          <div
            className={cn(
              "h-[1px] w-60 ",
              Step > 2 ? "bg-green-400" : "bg-stone-700"
            )}
          ></div>
          <div>
            <div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
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
            </div>
            <p
              className={cn(
                "text-xs font-light mt-2 absolute",
                Step > 2 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Details
            </p>
          </div>
        </div>
      )}
      {Step >= 3 && (
        <div className="flex items-center">
          <div
            className={cn(
              "h-[1px] w-60 ",
              Step > 3 ? "bg-green-400" : "bg-stone-700"
            )}
          ></div>
          <div>
            <div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
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
            </div>
            <p
              className={cn(
                "text-xs font-light mt-3 absolute",
                Step > 3 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Date/Time
            </p>
          </div>
        </div>
      )}

      {Step >= 4 && (
        <div className="flex items-center">
          <div
            className={cn(
              "h-[1px] w-60 ",
              Step > 4 ? "bg-green-400" : "bg-stone-700"
            )}
          ></div>
          <div>
            <div className="h-10 w-10   border rounded-full flex justify-center items-center border-zinc-600">
              {Step > 4 ? (
                <CheckCheck
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 4 ? "text-green-400" : "text-zinc-400")}
                />
              ) : (
                <Send
                  strokeWidth={1.5}
                  size={20}
                  className={cn(Step > 4 ? "text-green-400" : "text-zinc-400")}
                />
              )}
            </div>
            <p
              className={cn(
                "text-xs font-light mt-4 absolute",
                Step > 4 ? "text-green-300" : "text-zinc-400 "
              )}
            >
              Submission
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
