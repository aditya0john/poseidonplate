import { beverages, desserts, MainCourse, sides, Starters } from "@/data";
import React from "react";

const Menu = () => {
  return (
    <div className="font-sans bg-slate-300 h-full w-screen flex flex-col items-center justify-center overflow-hidden">
      <p className="text-black/[0.8] text-6xl font-bold mt-10">MENU</p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
        <div className="bg-stone-800/[0.8] rounded-xl h-full sm:h-[90vh] my-4 mx-4 p-10">
          <span className="grid grid-cols-2 gap-10">
            <ul className="text-md font-semibold">
              <i className="uppercase text-yellow-400 underline underline-offset-4">
                starters
              </i>
              {Starters.map((starters, i) => (
                <ul key={i} className="flex flex-col">
                  <span className="flex justify-between">
                    <li className="text-md font-thin tracking-tighter text-yellow-200">
                      {starters.name}
                    </li>
                    <li className="text-md font-thin tracking-tighter">
                      Rs {starters.price}
                    </li>
                  </span>
                  <li className="text-md font-thin tracking-tighter lowercase mb-4">
                    {"( "}
                    <span>
                      <i>{starters.title}</i>
                    </span>
                    {" )"}
                  </li>
                </ul>
              ))}
            </ul>
            <ul className="text-md font-semibold">
              <i className="uppercase text-yellow-400 underline underline-offset-4">
                desserts
              </i>
              {desserts.map((starters, i) => (
                <ul key={i} className="flex flex-col">
                  <span className="flex justify-between">
                    <li className="text-md font-thin tracking-tighter text-yellow-200">
                      {starters.name}
                    </li>
                    <li className="text-md font-thin tracking-tighter">
                      Rs {starters.price}{" "}
                    </li>
                  </span>
                  <li className="text-md font-thin tracking-tighter lowercase mb-4">
                    {"( "}
                    <span>
                      <i>{starters.title}</i>
                    </span>
                    {" )"}
                  </li>
                </ul>
              ))}
            </ul>
          </span>
          <ul className="text-md font-semibold">
            <i className="uppercase text-yellow-400 underline underline-offset-4">
              beverages
            </i>
            {beverages.map((starters, i) => (
              <ul key={i} className="flex flex-col">
                <span className="flex justify-between">
                  <li className="text-md font-thin tracking-tighter text-yellow-200">
                    {starters.name}
                  </li>
                  <li className="text-md font-thin tracking-tighter">
                    Rs {starters.price}{" "}
                  </li>
                </span>
                <li className="text-md font-thin tracking-tighter lowercase mb-4">
                  {"( "}
                  <span>
                    <i>{starters.title}</i>
                  </span>
                  {" )"}
                </li>
              </ul>
            ))}
          </ul>
        </div>
        <div className="bg-stone-800/[0.8] rounded-xl h-[90vh] my-4 mx-4 p-10">
          <ul className="text-md font-semibold">
            <i className="uppercase text-yellow-400 underline underline-offset-4">
              sides
            </i>
            {sides.map((starters, i) => (
              <ul key={i} className="flex flex-col">
                <span className="flex justify-between">
                  <li className="text-md font-thin tracking-tighter text-yellow-200">
                    {starters.name}
                  </li>
                  <li className="text-md font-thin tracking-tighter">
                    Rs {starters.price}{" "}
                  </li>
                </span>
                <li className="text-md font-thin tracking-tighter lowercase mb-4">
                  {"( "}
                  <span>
                    <i>{starters.title}</i>
                  </span>
                  {" )"}
                </li>
              </ul>
            ))}
          </ul>
          <ul className="text-md font-semibold">
            <i className="uppercase text-yellow-400 underline underline-offset-4">
              Main course
            </i>
            {MainCourse.map((starters, i) => (
              <ul key={i} className="flex flex-col">
                <span className="flex justify-between">
                  <li className="text-md font-thin tracking-tighter text-yellow-200">
                    {starters.name}
                  </li>
                  <li className="text-md font-thin tracking-tighter">
                    Rs {starters.price}{" "}
                  </li>
                </span>
                <li className="text-md font-thin tracking-tighter lowercase mb-4">
                  {"( "}
                  <span>
                    <i>{starters.title}</i>
                  </span>
                  {" )"}
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
