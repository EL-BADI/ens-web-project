import React from "react";
import CardPost from "./CardPost";
import { Post } from "@prisma/client";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className=" mb-20">
      <h2 className=" text-4xl font-bold text-slate-200 mb-7 tracking-wider">
        Recent Posts
      </h2>
      {posts &&
        posts?.length > 0 &&
        posts.map((post) => <CardPost {...post} />)}
    </div>
  );
};

export default RecentPosts;
