import Center from "@/components/Center";
import Hero from "@/components/Hero/Hero";
import RecentPosts from "@/components/RecentPosts";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <section className=" px-4 mt-28 mb-20">
        <Hero />
      </section>
      <Center>
        <RecentPosts />
      </Center>
    </div>
  );
};

export default Page;
