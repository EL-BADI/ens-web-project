import CardPost from "@/components/CardPost";
import Center from "@/components/Center";
import { db } from "@/lib/db";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await db.user.findUnique({ where: { id } });
  const posts = await db.post.findMany({
    where: {
      user: {
        id,
      },
    },
    include: {
      user: true,
    },
  });

  return (
    <Center>
      <div className=" mt-24">
        <h1 className=" text-3xl font-semibold mb-7">{user?.name} Posts</h1>
        {posts?.length > 0 &&
          posts.map((post) => <CardPost key={post.id} {...post} />)}
        {posts?.length <= 0 && <div>This Professor has no posts yet!</div>}
      </div>
    </Center>
  );
};

export default page;
