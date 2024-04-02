import React from "react";
import StoryCard from "./storyCard";

const StoryHero = () => {
  return (
    <section>
      <div class="flex flex-wrap -mb-10 -mt-4 container mx-auto">
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </section>
  );
};

export default StoryHero;
