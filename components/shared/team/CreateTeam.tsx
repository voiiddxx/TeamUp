"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategoryAction } from "@/lib/actions/category.action";
import { CreateTeamAction } from "@/lib/actions/team.action";

const formSchema = z.object({
  name: z.string().min(2).max(50),
    moto: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  teamcode: z.string().min(2).max(50),
});

const CreateTeam = () => {

  const [Sportscategory, setSportscategory] = useState<any>(null);
  const [SelectedCategory, setSelectedCategory] = useState<any>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      moto: "",
      teamcode:"",
      location:""
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
  // team logo pending sending the dummy text instead of sending the image

  if(!values){
    alert("No value added");
  }
  const res = await CreateTeamAction({
    data:{
      caption:values.moto,
      locaton:values.location,
      name:values.name,
      teamcode:values.teamcode,
      logo:"Logotext",
      captainId:4
    }
  });
  if(res.status == 200){
    alert("Team Created");
  }else{
    alert("Caught some error");
  }
    console.log(values);
  }


  useEffect(()=>{
    const GetCategory = async ()=>{
      const res = await getAllCategoryAction();
      if(res.status == 200){
        console.log("category data: " , res.data);
        setSportscategory(res.data);
      }else{
        console.log(res.data);
        
      }
    }
    GetCategory();
  } , [])

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div>
        <h1>Create Your Team Now</h1>
      </div>

      <div>
        {/* react hook form for the creating the team */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your team name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="moto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your moto" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Input type="file" />
            </div>
            <Select onValueChange={(val)=>{
                      setSelectedCategory(val)
                    }} >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Sports Categotry" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          Sportscategory && (
                            <div>
                              {
                                Sportscategory.map((curr:any)=>{
                                  return <SelectItem value={curr.name}  >{curr.name}</SelectItem>
                                })
                              }
                            </div>
                          )
                        }
                      </SelectContent>
                    </Select>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Team Location" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teamcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter The Team Code" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateTeam;
