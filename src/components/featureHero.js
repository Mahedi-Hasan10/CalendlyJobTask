import React from "react";
import MyButton from "./myButton";

const FeatureHero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5  pt-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <p className="text-center text-[#006bfe] mb-10">CALENDLY FEATURE</p>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Favorite Security Feature
          </h1>
          <p class="mb-8 mt-4 leading-relaxed">
            Here is some closer look at some of the security features IT admin
            enjoy with CALENDLY
          </p>
          <div class="flex justify-center">
            <MyButton title="Start for free" />
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
