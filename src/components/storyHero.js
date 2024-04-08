import React from "react";
import StoryCard from "./storyCard";

const StoryHero = () => {
  return (
    <section className="container mx-auto">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 -mb-10 -mt-4 container mx-auto gap-4">
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </section>
  );
};

export default StoryHero;
