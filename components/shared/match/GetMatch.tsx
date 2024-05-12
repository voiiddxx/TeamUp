import { Button } from "@/components/ui/button";
import React from "react";

type GetmatchProps = {
  data: any;
};

const GetMatch = ({ data }: GetmatchProps) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen w-full">
      <h1>All Matchs</h1>
      {data && (
        <div>
          {data.map((curr: any) => {
            return <div className="h-[300px] w-[300px] rounded-sm bg-zinc-900 flex justify-center items-center flex-col">
                <h1 className="text-white" >{curr.createdTeam.name}</h1>
                <Button className="bg-white text-zinc-800 mt-4" >Send Invite</Button>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default GetMatch;
