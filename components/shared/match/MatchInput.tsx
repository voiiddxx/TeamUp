import { Button } from "@/components/ui/button";
import { FormContext } from "@/providers/FormProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useContext } from "react";

interface IMatchInputProps {
  Value: any;
  setValue: any;
  placeholderVal: string;
}

const MatchInput = ({ Value, setValue, placeholderVal }: IMatchInputProps) => {

    const {Step} = useContext(FormContext)
  const onChangeMethod = (value: any) => {
    setValue(value);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-700px">
        <input
          className="bg-stone-800 h-12 w-[700px] px-4 border-zinc-700 border text-white focus:outline-none"
          onChange={(e) => {
            onChangeMethod(e.target.value);
          }}
          type="text"
          placeholder={`${placeholderVal}`}
        />
        <div className="flex items-center justify-end mt-4 gap-2">
          <Button className="bg-stone-800 group hover:bg-stone-800 hover:text-zinc-300  flex items-center justify-center">
            <ChevronLeft
              className="text-white transition-all group-hover:-translate-x-1"
              strokeWidth={1.75}
              size={20}
            />
            Back
          </Button>

          <Button className="bg-green-400  hover:bg-green-300 group text-zinc-800 font-medium flex items-center justify-center">
            Next Step
            <ChevronRight
              className="group-hover:translate-x-1 transition-all"
              strokeWidth={1.75}
              size={20}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchInput;
