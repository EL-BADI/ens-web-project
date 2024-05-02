import React from "react";
import CardPost from "./CardPost";
import { Post, User } from "@prisma/client";

const RecentPosts = ({
  posts,
}: {
  posts: (Post & {
    user: User;
  })[];
}) => {
  return (
    <div className="mb-20">
      <h2
        id="recent"
        className="text-4xl font-bold text-slate-200 mb-7 tracking-wider"
      >
        Recent Posts
      </h2>
      {posts &&
        posts?.length > 0 &&
        posts.map((post) => <CardPost key={post.id} {...post} />)}
    </div>
  );
};

export default RecentPosts;
