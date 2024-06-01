"use client";
import { getAllCategoryAction } from "@/lib/actions/category.action";
import React, { useContext, useEffect, useState } from "react";
import { CreateMatchAction } from "@/lib/actions/match.action";
import { Button } from "@/components/ui/button";
import DashboardnavBar from "../navbars/DashboardnavBar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MatchInput from "./MatchInput";
import { FormContext } from "@/providers/FormProvider";
import { motion } from "framer-motion";
import MatchDetail from "./MatchDetail";
import Matchdate from "./Matchdate";
import ProgressBar from "./ProgressBar";
const CreateMatchForm = () => {
  const { Step , backStep ,customStep , nextStep } = useContext(FormContext);

  // all states //
  const [Bet, setBet] = useState<number>(0);
  const [MatchLocatiom, setMatchLocatiom] = useState<string>("");
  const [Detail, setDetail] = useState<string>('');
  const [date, setDate] = React.useState<Date>()
  // all states  end //

  const hanldeCreateMatch = async () => {
    try {
      const res = await CreateMatchAction({
        data: {
          date: new Date(),
          location: "India",
          bet: 500,
          categoryId: 2,
          createdTeamId: 4,
          userid: 1,
        },
      });
      if (res.status == 400) {
        alert("Data Missing");
      } else if (res.status == 401) {
        alert("Some issue occured , try again later");
      } else if (res.status == 200) {
        alert("Match Created");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = ()=>{
    nextStep();
    console.log(Bet , MatchLocatiom , date , Detail);
    
  }
  const [Category, setCategory] = useState<any>(null);

  useEffect(() => {
    const getCategory = async () => {
      const res = await getAllCategoryAction();
      if (res.status == 200) {
        setCategory(res.data);
      }
    };
    getCategory();
  }, []);

  return (
    <div className="min-h-screen bg-stone-900">
      <DashboardnavBar />

      {/* beard  starts */}
      <div className="px-8 border-b border-zinc-800 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <p>Home</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Teams</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Create</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-8 w-full flex items-center  px-20" >
        <ProgressBar/>
      </div>
      {/* beard  starts end*/}
      {/* create match div starts from here */}

      {/* create match progress bar component */}

      {/* create match progress bar component end */}

      {/* create match div starts from here end */}

      <div className="h-[600px] w-full flex items-center justify-center">
        {Step == 0 && (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.7 , ease:"easeIn"}}
           >
            <MatchInput
              key={1515}
              Value={Bet}
              setValue={setBet}
              placeholderVal="Please Enter Bet Ammount"
            />
          </motion.div>
        )}
        {Step == 1 && (
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.7 , ease:"easeIn"}}
          >
            <MatchInput
            key={1515}
            Value={MatchLocatiom}
            setValue={setMatchLocatiom}
            placeholderVal="Please Eneter Location"
          />
          </motion.div>
        )}
        {
          Step == 2 && (
            <motion.div
            initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.7 , ease:"easeIn"}}
            >
              <MatchDetail Detail={Detail}  setDetail={setDetail} />
            </motion.div>
          )
        }


      {
        Step == 3 && (
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.7 , ease:"easeIn"}}
          >
            <Matchdate date={date} setDate={setDate} />
          </motion.div>
        )
      }
        {
          Step >= 4 && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.7 , ease:"easeIn"}} className="flex items-center justify-center flex-col"
            >
              <h1 className="text-green-400 text-3xl" >Confirm Submission.</h1>
              <p className="text-zinc-500 text-center tracking-wider font-medium mt-5 text-sm" >Thanks for creating your match at <span className="text-green-400 underline" >TeamUp</span> , you will be notified <br /> through email if you got any competetior</p>

              <p className="text-xs mt-8 font-light text-zinc-500" >Press Continue for Match Creation</p>

              <Button onClick={handleSubmit} className="bg-green-400 text-zinc-950 hover:bg-green-200 mt-10 w-[400px] px-1" >Complete Submission</Button>

              <p className="text-zinc-600 underline text-xs mt-2 hover:text-zinc-100 cursor-pointer" onClick={()=>{
                backStep()
              }} >Go back</p>
            </motion.div>
          )
        }
      </div>

      {/* match form ends */}
    </div>
  );
};

export default CreateMatchForm;
