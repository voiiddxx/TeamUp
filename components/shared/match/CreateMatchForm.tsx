"use client";

import { Input } from "@/components/ui/input";
import { getAllCategoryAction } from "@/lib/actions/category.action";
import React, { useContext, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
const CreateMatchForm = () => {


    const {Step} = useContext(FormContext)

  // all states //
  const [Bet, setBet] = useState<number>(0);
  const [MatchLocatiom, setMatchLocatiom] = useState<string>('')
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
      <div className="px-8 border-b border-zinc-800 py-3"   >
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
      {/* beard  starts end*/}
      {/* create match div starts from here */}

    {/* create match progress bar component */}
    
    {/* create match progress bar component end */}

      
      {/* create match div starts from here end */}

      <div className="h-[600px] w-full flex items-center justify-center" >
         {
          Step == 0 && (
            
        <MatchInput   key={1515} Value={Bet} setValue={setBet} placeholderVal="Please Enter Bet Ammount"  />
          )
         }
         {
          Step == 1 && (
            
        <MatchInput  key={1515} Value={MatchLocatiom} setValue={setMatchLocatiom} placeholderVal="Please enter match location"  />
          )
         }
      </div>

      
      {/* match form ends */}
    </div>
  );
};

export default CreateMatchForm;
