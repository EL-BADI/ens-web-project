import Center from "@/components/Center";
import Hero from "@/components/Hero/Hero";
import ProfessorsList from "@/components/ProfessorsList";
import RecentPosts from "@/components/RecentPosts";
import { db } from "@/lib/db";
import React from "react";

const Page = async () => {
  const posts = await db.post.findMany({
    take: 10, // Limit the result to 10 posts
    orderBy: {
      createdAt: "desc", // Order posts by createdAt field in descending order
    },
    include: {
      user: true, // Include the user associated with each post
    },
  });

  return (
    <div className="">
      <section className="">
        <Hero />
      </section>
      <Center>
        <div className="grid gap-7 relative grid-cols-[1fr_250px]">
          <RecentPosts posts={posts} />
          <ProfessorsList />
        </div>
      </Center>
    </div>
  );
};

export default Page;
