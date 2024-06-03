"use client";

import {
  getAllCategoryAction,
  GetCategoryWithId,
} from "@/lib/actions/category.action";
import { ArrowRight, ArrowUpRight, Dot } from "lucide-react";
import React, { useEffect, useState } from "react";

const SideAllMatches = () => {
  const [Category, setCategory] = useState<any>(null);
  const [Currentcategory, setCurrentcategory] = useState<any>(null);
  const [CategoryBasedResponse, setCategoryBasedResponse] = useState<any>(null);

  useEffect(() => {
    const getCategory = async () => {
      const res = await getAllCategoryAction();
      if (res) {
        console.log(res);
        if (res.status == 200) {
          setCategory(res.data);
          setCurrentcategory(res.data[0].sportcategoryid);
          console.log(res.data[0].sportcategoryid);
        } else {
          console.log("Some error occured");
        }
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getCategoryBasedData = async () => {
      if (Currentcategory != null) {
        const res = await GetCategoryWithId(Currentcategory);
        if (res) {
          console.log("this is category based response", res);
          if (res.status == 200) {
            setCategoryBasedResponse(res.data);
            console.log(CategoryBasedResponse);
          } else {
            console.log("Some unwanted error occured");
          }
        }
      }
    };
    getCategoryBasedData();
  }, [Currentcategory]);

  const res = [
    {
      name: "Football",
      match: 20,
      state: "active",
    },
    {
      name: "Cricket",
      match: 10,
    },
    {
      name: "Volleyball",
      match: 15,
    },
    {
      name: "BasketBall",
      match: 2,
    },
  ];

  return (
    <div className="h-full   px-7 py-8">
      {/* upper component fot the sidebar */}

      <div className="h-20 w-full  rounded-md bg-opacity-20 flex gap-4">
        {/* upper cards */}
        {Category == null ? (
          <div className="flex gap-3">
            {res.map((curr: any) => {
              return (
                <div className="h-16 w-[17rem] bg-stone-900 animate-pulse"></div>
              );
            })}
          </div>
        ) : (
          <div className="flex bg-stone-900 bg-opacity-45">
            {res.map((curr: any) => {
              return (
                <div
                  onClick={() => {
                    setCurrentcategory(curr.sportcategoryid);
                  }}
                  className="flex justify-between gap-8 w-72 h-full px-1 group"
                >
                  <div className="h-full py-2 px-3 flex gap-4 items-center">
                    <div className="h-full w-2 rounded-md bg-zinc-200"></div>
                    <div>
                      {curr.state == "active" ? (
                        <p className="text-green-300 text-lg">{curr.name}</p>
                      ) : (
                        <p className="text-zinc-200 text-lg">{curr.name}</p>
                      )}
                      <p className="text-zinc-400 text-sm">
                        {curr.match} matches
                      </p>
                    </div>
                  </div>

                  <div>
                    <ArrowUpRight
                      className="text-zinc-500 mt-4 group-hover:translate-x-1 transition-all"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* all the result based on the upperbar tap */}
      <div className="mt-5">
        <h1
          onClick={() => {
            console.log(CategoryBasedResponse);
          }}
          className="text-white"
        >
          Matches
        </h1>

        {/* all the  matches responses */}
        <div className="">
          {CategoryBasedResponse === null ? (
            <div className="flex flex-wrap gap-8 mt-4">
              {res.map((curr: any) => {
                return (
                  <div className="h-[250px] w-[350px] bg-stone-800 bg-opacity-50 animate-pulse"></div>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-8 mt-5 flex-wrap">
              {CategoryBasedResponse.match.map((curr: any) => {
                return (
                  <div className="h-[250px] w-[400px] bg-stone-900 bg-opacity-40 px-4 py-4">
                    <div className=" w-full flex justify-between items-center">
                      <div>
                        <p className="text-zinc-500">{curr.time}</p>
                      </div>
                      <div className="flex items-center">
                        <Dot
                          strokeWidth={5}
                          absoluteStrokeWidth
                          className="text-emerald-400"
                        />
                        <p className="text-emerald-400 font-light text-xs">
                          {curr.status}
                        </p>
                      </div>
                    </div>
                    {/*     upper div end   */}
                    <div className="mt-4  flex " >
                     <div className="bg-zinc-700 flex items-center justify-center px-2 py-2 bg-opacity-25  " >
                     <p className="text-xs  text-red-400  tracking-wider" >Cricket Match</p>
                     </div>

                    </div>
                     {/* matc team and against team information */}
                     <div>
                      <p className="text-xs font-extralight text-zinc-700 mt-4" >Host team</p>
                      <div className="flex justify-between flex-row-reverse items-center" >
                        <div className="h-12 w-12 rounded-full bg-stone-800 mt-2" >
                        </div>
                        <div>
                          <p className="text-lg text-white" >India</p>
                        </div>

                      </div>
                     </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* all the  matches responses ends here */}
      </div>
    </div>
  );
};

export default SideAllMatches;
