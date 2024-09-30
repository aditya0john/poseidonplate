import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

function Clients() {
  return (
    <div
      className="select-none flex flex-col items-center justify-center w-full py-20 text-black/[0.8] bg-slate-50"
      id="Testimonials"
    >
      <h1 className="heading text-4xl lg:text-5xl font-bold">
        Kind Words from
      </h1>
      <span className="text-purple text-4xl lg:text-5xl font-bold">
        satisfied Customers
      </span>

      <div className="flex flex-col p-4 gap-x-24 gap-y-8 items-center">
        <InfiniteMovingCards
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col relative antialiased"
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Clients;
