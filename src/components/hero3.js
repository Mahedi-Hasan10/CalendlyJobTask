import React from "react";

const Hero3 = ({ title, subtitle, desciption, image, background, reverse }) => {
  return (
    <section className={`text-gray-600 body-font lg:py-20 py-10 ${background}`}>
      <div
        className={`container mx-auto flex px-5 py-24 ${reverse} flex-col items-center xl:gap-x-20 lg:gap-x-16`}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-center text-[#006bfe] mb-10">{subtitle}</p>
          <h1 className="title-font sm:text-4xl text-3xl md:mb-10 mb-4  font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 lg:leading-8 leading-relaxed">
            Working with one organizational account ensuresyou securely account
            for all devices users as you scale. Heirloom echo park mlkshk tote
            bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
            chambray. as well as audit activity all time
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
