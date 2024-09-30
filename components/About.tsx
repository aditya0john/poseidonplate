import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen mx-auto flex flex-col items-start justify-center pl-10 select-none bg-stone-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-4">
          <p className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
            About Poseidon Plate
          </p>
          <p className="font-normal text-md lg:text-2xl text-gray-200 text-justify">
            Dive into a unique dining adventure at Poseidon Plate, where every
            dish tells a story of the sea, guided by our talented chefs, we
            specialize in creating unforgettable meals that celebrate the oceans
            boundary. Our mission goes beyond serving food, We aim to provide a
            memorable journey that connects you with the essence of underwater
            dining. Join us at Poseidon Plade, where each meal is a celebration
            of flavor and creativity.
          </p>
        </div>
        <hr className="lg:hidden md:hidden sm:block border-2 border-white" />
        <div className="flex flex-col gap-20 items-center justify-center">
          <span className="flex flex-col items-center">
            <p className="text-yellow-300/[0.9] text-3xl">10</p>
            <p className="text-2xl">Years of cullinary expertise</p>
          </span>
          <span className="flex flex-col items-center">
            <p className="text-yellow-300/[0.9] text-3xl">20</p>
            <p className="text-2xl">skilled cullinary artists</p>
          </span>
          <span className="flex flex-col items-center">
            <p className="text-yellow-300/[0.9] text-3xl">3000</p>
            <p className="text-2xl">satisfied dinners</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
