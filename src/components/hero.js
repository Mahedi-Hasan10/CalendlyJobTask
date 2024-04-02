import React from "react";
import MyButton from "./myButton";

const Hero = () => {
  return (
    <section class="body-font bg-[#092640]">
      <div class="container mx-auto flex px-5 lg:py-24 md:py-16 py-14 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  items-center">
          <h2 className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl md:font-bold font-medium text-white mb-8">
            Secure conections, empowered teams
          </h2>
          <p class="mb-8 md:text-2xl sm:text-xl text-lg leading-relaxed text-[#F5FBFB]">
            Bring your teams together in a centrally-
            <br class="hidden lg:inline-block" />
            managed ecosystem with complete
            <br class="hidden lg:inline-block" />
            oversight and visiblity.
          </p>
          <div class="flex justify-center">
            <MyButton title="Sales Contact" />
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/hero.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
