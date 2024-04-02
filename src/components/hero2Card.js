import React from "react";

const Hero2Card = ({ border }) => {
  return (
    <div className={`p-4 md:w-1/3 ${border}`}>
      <div className="flex rounded-lg h-full p-8 flex-col">
        <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-4xl md:font-bold title-font font-medium">
            200%
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-[#455D76]">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <img
            src="/s2.png"
            className="h-[40px] w-[100px] mt-10 object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero2Card;
