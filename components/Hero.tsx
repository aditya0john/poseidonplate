import React from "react";
import { BookingsButton } from "./BookingsButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-slate-50 select-none overflow-hidden">
      <div className="pt-20 flex flex-col items-center justify-center mb-[22rem] lg:mb-[13rem]">
        <p className="gap-4 lg:gap-12 capitalize bg-gradient-to-r from-amber-400 to-sky-400 bg-clip-text text-transparent font-bold text-5xl sm:text-6xl md:text-7xl lg:text-9xl flex">
          <span>poseidon </span> <span>plate</span>
        </p>
        <Image
          className="absolute top-[8rem] lg:top-[12rem] z-10 h-[50px] w-[100px] lg:h-[100px] lg:w-[200px] translate-x-[8rem] -translate-y-[2rem] sm:translate-x-[12rem] sm:-translate-y-[1rem] lg:translate-x-[27rem] lg:-translate-y-10 opacity-70"
          src={"/Goa.jpg"}
          alt="Goa"
          height={200}
          width={200}
        />

        <p className="absolute mb-20 top-[12rem] lg:top-[18rem] max-w-md lg:max-w-2xl text-[20px] lg:text-[20px] tracking-normal font-bold text-center text-gray-500 -translate-y-10 lg:-translate-y-20">
          <i>
            Experience the vibrant flavors of Goa at our restaurant{" "}
            <span className="text-amber-500">
              where cullinary meets the{" "}
              <span className="text-sky-400">deapths of the ocean</span>
            </span>
            , where every dish is crafted with fresh, locally sourced
            ingredients and a touch of coastal magic. Whether you&apos;re
            craving authentic Goa seafood or international cuisine, our cozy
            ambiance and scenic views make for the perfect dining escape. Join
            us for an unforgettable meal by the beach and let us take your taste
            buds on a journey!
          </i>
        </p>
      </div>
      <BookingsButton />
      <section className="flex-1 justify-end">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </div>
  );
};

export default Hero;
