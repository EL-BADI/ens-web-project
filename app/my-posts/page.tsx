import { auth } from "@/auth";
import CardPost from "@/components/CardPost";
import Center from "@/components/Center";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const MyPostsPage = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  const myPosts = await db.post.findMany({
    where: { userEmail: session.user?.email as string },
    include: { user: true },
  });
  console.log({ myPosts });
  //
  return (
    <Center>
      <div className="mt-24">
        <h1 className="text-4xl font-bold mb-7">My Posts</h1>
        {myPosts?.length <= 0 && (
          <div className=" text-center">Yoy dont have post yet!</div>
        )}
        {myPosts &&
          myPosts.length > 0 &&
          myPosts.map((post) => (
            <CardPost key={post.id} {...post} canDelete={true} />
          ))}
      </div>
    </Center>
  );
};

export default MyPostsPage;
