import React from "react";
import Hero2Card from "./hero2Card";

const Hero2 = () => {
  return (
    <section class=" body-font">
      <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:mb-6 mb-3 font-medium text-[#093455]">
            Work faster, smarted and more securely
          </h1>
          <p class="mb-8 md:text-2xl sm:text-xl text-lg  font-normal leading-relaxed text-[#4B667B]">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami
          </p>
        </div>
      </div>
      <div className="bg-[#F7FAFF]">
        <div class="flex flex-wrap justify-center container mx-auto py-10">
          <Hero2Card border="lg:border-r" />
          <Hero2Card border="lg:border-r" />
          <Hero2Card />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
