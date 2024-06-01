import { getCreatedTeamByUser } from "@/lib/actions/team.action";
import { cn } from "@/lib/utils";
import { FormContext } from "@/providers/FormProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-day-picker";

const SelectTeam = () => {
  const [teams, setteams] = useState<any>([]);
  const [SelectedTeam, setSelectedTeam] = useState<any>();


  useEffect(() => {
    const getTeams = async () => {
      const token = localStorage.getItem("x-auth-user");
      const data = await getCreatedTeamByUser(+token!);
      console.log(data);

      if (data.status == 200) {
        console.log(data.data);

        setteams(data.data);
      } else {
        console.log("some error occured");
      }
    };
    getTeams();
  }, []);

  const { Step, backStep, nextStep, customStep } = useContext(FormContext);
  return (
    <div>
      <p>this is select team component</p>
      <div className="w-full flex gap-2 mt-4 justify-end items-center">
        {teams.map((team: any) => {
          return (
            <div   className={cn("h-[70px] w-[350px] flex items-center  border-zinc-700 border px-3 py-4 justify-between" , SelectedTeam.teamid === team.teamid ? "bg-stone-900" : "bg-stone-800")}
             onClick={()=>{
                setSelectedTeam(team)
             }} >
              <div className="flex gap-3 items-center" >
                <div className="h-10 w-10 rounded-full bg-stone-700"></div>

                <div>
                  <p className="text-green-400 text-lg font-light" onClick={()=>{
                    console.log("ths" , SelectedTeam.teamid , team.teamid);
                    
                  }}>
                    {team.name}
                  </p>
                </div>
              </div>

              <div>
                <div className={cn("h-4 w-4  rounded-full border-zinc-600 border-2 active:bg-red-600 focus:bg-green-600 " , 
                    SelectedTeam.teamid == team.teamid ? "bg-green-500" : "bg-transparent"
                )} ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectTeam;



// import { getCreatedTeamByUser } from "@/lib/actions/team.action";
// import { cn } from "@/lib/utils";
// import { FormContext } from "@/providers/FormProvider";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useContext, useEffect, useState } from "react";
// import { Button } from "react-day-picker";

// const SelectTeam = () => {
//   const [teams, setteams] = useState<any>([]);
//   const [SelectedTeam, setSelectedTeam] = useState<any>();


//   useEffect(() => {
//     const getTeams = async () => {
//       const token = localStorage.getItem("x-auth-user");
//       const data = await getCreatedTeamByUser(+token!);
//       console.log(data);

//       if (data.status == 200) {
//         console.log(data.data);

//         setteams(data.data);
//       } else {
//         console.log("some error occured");
//       }
//     };
//     getTeams();
//   }, []);

//   const { Step, backStep, nextStep, customStep } = useContext(FormContext);
//   return (
//     <div>
//       <p>this is select team component</p>
//       <div className="w-full flex gap-2 mt-4 justify-end items-center">
//         {teams.map((team: any) => {
//           return (
//             <div   className={cn("h-[70px] w-[350px] flex items-center  border-zinc-700 border px-3 py-4 justify-between" , SelectTeam === team ? "bg-yellow-600" : "bg-pink-800")}
//              onClick={()=>{
//                 setSelectedTeam(team)
//              }} >
//               <div className="flex gap-3 items-center" >
//                 <div className="h-10 w-10 rounded-full bg-stone-700"></div>

//                 <div>
//                   <p className="text-green-400 text-lg font-light" onClick={()=>{
//                     console.log(SelectTeam);
                    
//                   }}>
//                     {team.name}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <div className={cn("h-4 w-4  rounded-full border-zinc-600 border-2 active:bg-red-600 focus:bg-green-600 " , 
//                     SelectTeam == team ? "bg-green-500" : "bg-transparent"
//                 )} ></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SelectTeam;
