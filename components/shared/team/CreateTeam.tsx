"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { convertToBase64Image } from "@/lib/ConvertBase64";
import Image from "next/image";
import { BoxIcon, Images } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  moto: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  teamcode: z.string().min(2).max(50),
});

const CreateTeam = () => {
  const [Sportscategory, setSportscategory] = useState<any>(null);
  const [SelectedCategory, setSelectedCategory] = useState<any>(null);
  const ImageButton = useRef<any>(null);
  const [teamLogo, setteamLogo] = useState<any>(null);

  // convert image into base64

  const handleImage = (e: any) => {
    console.log("this func called");
    console.log(e.target.files);
    const file = e.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.onloadend = () => {
        setteamLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const data = convertToBase64Image(e.target.files);
    if (data) {
      console.log("Data got: ", data);
    }
    setteamLogo(data);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      moto: "",
      teamcode: "",
      location: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // team logo pending sending the dummy text instead of sending the image

    if (!values) {
      alert("No value added");
    }
    const user = localStorage.getItem("x-auth-user");
    const userId = +user!;
    const res = await CreateTeamAction({
      data: {
        caption: values.moto,
        locaton: values.location,
        name: values.name,
        teamcode: values.teamcode,
        logo: "Logotext",
        captainId: userId,
        categoryId: 2,
        userid: userId,
      },
    });
    if (res.status == 200) {
      alert("Team Created");
    } else {
      alert("Caught some error");
    }
    console.log(values);
  }

  useEffect(() => {
    const GetCategory = async () => {
      const res = await getAllCategoryAction();
      if (res.status == 200) {
        console.log("category data: ", res.data);
        setSportscategory(res.data);
      } else {
        console.log(res.data);
      }
    };
    GetCategory();
  }, []);

  return (
    <>
      {/* main form component */}
      <div className="min-h-screen w-full px-16 py-8 flex ">
        {/* team name component */}
        {/* left div */}
        <div className="flex w-1/2 flex-col ">
          <div className="">
            <input
              className="outline-none border-none  text-white bg-transparent w-full text-2xl placeholder:text-white"
              type="text"
              placeholder="Your Team Name"
            />
          </div>

          {/* team tagline component  */}
          <div className="mt-4">
            <textarea
              className="bg-transparent w-full text-blue-300 focus:border-none active:border-none border-none outline-none"
              placeholder="Your Team Tagline"
            />
          </div>
          {/* team tagline component end */}

          {/* team logo component */}
          <div>
            <input
              type="file"
              hidden
              ref={ImageButton}
              onChange={(e) => {
                handleImage(e);
              }}
            />
            {!teamLogo && (
              <div
                className="h-[300px] w-[550px] rounded-md bg-stone-900 flex items-center justify-center flex-col"
                onClick={() => {
                  ImageButton.current.click();
                }}
              >
                <BoxIcon strokeWidth={1.5} color="white" size={25} />
                <p className="text-white font-medium mt-2">
                  Add your team Logo
                </p>
                <p className="text-xs text-zinc-500">size must be below 2 mb</p>
              </div>
            )}

            {teamLogo && (
              <div>
                <Image
                  ref={ImageButton}
                  src={teamLogo}
                  height={500}
                  width={500}
                  alt="teamlogo"
                />
              </div>
            )}
          </div>
          {/* team logo component end */}

          {/* team category component */}
          <Select
            onValueChange={(val) => {
              setSelectedCategory(val);
            }}
          >
            <SelectTrigger className="w-[550px] mt-8 bg-transparent text-white border-zinc-800">
              <SelectValue placeholder="Select Sports Categotry" />
            </SelectTrigger>
            <SelectContent className="bg-transparent text-white border-zinc-800" >
              {Sportscategory && (
                <div>
                  {Sportscategory.map((curr: any) => {
                    return (
                      <SelectItem value={curr.name}>{curr.name}</SelectItem>
                    );
                  })}
                </div>
              )}
            </SelectContent>
          </Select>
          {/* team category component end */}
        </div>
        {/* right div */}
        <div className="h-full flex w-1/2 "></div>
      </div>
      {/* main form component end */}

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
              <Select
                onValueChange={(val) => {
                  setSelectedCategory(val);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Sports Categotry" />
                </SelectTrigger>
                <SelectContent>
                  {Sportscategory && (
                    <div>
                      {Sportscategory.map((curr: any) => {
                        return (
                          <SelectItem value={curr.name}>{curr.name}</SelectItem>
                        );
                      })}
                    </div>
                  )}
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
    </>
  );
};
export default CreateTeam;
