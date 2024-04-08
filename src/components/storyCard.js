import React from "react";

const StoryCard = () => {
  return (
    <div className="w-full sm:mb-0 mb-6 shadow-md">
      <div className="rounded-tr-md rounded-tl-md h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="/stackoverflow.png"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl text-indigo-500 font-medium title-font mt-5">
          Customer story
        </h2>
        <p className="text-base leading-relaxed mt-2">
          Swag shoivdigoitch literally meditation subway tile tumblr
          cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical
          XOXO lumbersexual.
        </p>
        <a className="text-indigo-500 inline-flex items-center mt-3">
          Read now
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StoryCard;
