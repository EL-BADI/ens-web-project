import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { Post, User } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRightDash, Trash } from "lucide-react";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import Reveal from "./ui/Reveal";

function MeteorsDemo(
  props: Post & {
    user: User;
  }
) {
  return (
    <div className="">
      <div className="w-full relative">
        <div className="absolute -z-10 top-0 left-0 h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-[0.35] bg-red-500 rounded-full blur-[180px]" />
        <div className="relative shadow-xl bg-white/10 backdrop-blur-md p-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {props.img && (
            <Reveal>
              <div className="w-full h-[300px] relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={props.img}
                  alt="post image"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
          <div className=" md:px-10 px-2 mt-4">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
              <Reveal>{props.title}</Reveal>
            </h1>

            <div className=" flex items-center gap-4 mb-5 mt-2">
              <Image
                width={40}
                height={40}
                className=" rounded-full"
                src={props.user.image as string}
                alt="author image"
              />
              <Reveal>
                <p>{props.user.name}</p>
              </Reveal>
            </div>

            <Button variant={"main"}>
              <Link href={`/posts/${props.slug}`} className="">
                Explore
              </Link>
              <ArrowBigRightDash className="ml-1" />
            </Button>
            <div className=" absolute bottom-0 right-0 font-semibold tracking-widest md:pr-16 md:p-5 p-4 text-sm">
              <Reveal>{formatDate(props.createdAt)}</Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CardPost = (
  props: Post & {
    canDelete?: boolean;
    user: User;
  }
) => {
  return (
    <div className={cn(" relative mb-6", !props.img && "grid-cols-1")}>
      {props.canDelete && (
        <form
          className="absolute top-0 right-0 z-10"
          action={async () => {
            "use server";
            const session = await auth();
            if (session?.user?.email !== props.user.email) return;

            await db.post.delete({
              where: {
                id: props.id,
              },
            });
            revalidatePath("/my-posts");
          }}
        >
          <Button
            type="submit"
            variant={"main"}
            className="gap-1 flex text-rose-600 m-3"
          >
            Delete
            <Trash className=" w-4 h-4" />
          </Button>
        </form>
      )}
      <MeteorsDemo {...props} />
    </div>
  );
};

export default CardPost;
