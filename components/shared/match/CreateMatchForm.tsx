"use client";

import { Input } from "@/components/ui/input";
import { getAllCategoryAction } from "@/lib/actions/category.action";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateMatchAction } from "@/lib/actions/match.action";
import { Button } from "@/components/ui/button";

const CreateMatchForm = () => {

    const hanldeCreateMatch = async ()=>{
        try {
            const res = await CreateMatchAction({
                data:{
                    date: new Date,
                    location:"India"
                }
            });
            if(res.status == 400){
                alert("Data Missing");
            }
            else if(res.status == 401){
                alert("Some issue occured , try again later");
            }
            else if(res.status == 200){
                alert("Match Created");
            }
        } catch (error) {
            console.log(error);
            
        }
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
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1>Create Your Match Now</h1>

      {/* match form starts */}
      <div className="">
        <Input placeholder="location for match" />
        <Input placeholder="Bet for match" />
        <Input placeholder="Date of match" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Category && (
              <div>
                {Category.map((curr: any) => {
                  return <SelectItem value={curr.name}>{curr.name}</SelectItem>;
                })}
              </div>
            )}
          </SelectContent>
        </Select>
        <Button onClick={hanldeCreateMatch} >Create Match</Button>
      </div>

      {/* match form ends */}
    </div>
  );
};

export default CreateMatchForm;
