import Center from "@/components/Center";
import Hero from "@/components/Hero/Hero";
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
      <section className="mb-14">
        <Hero />
      </section>
      <Center>
        <RecentPosts posts={posts} />
      </Center>
    </div>
  );
};

export default Page;
