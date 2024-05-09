"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Comment, User } from "@prisma/client";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();
  //
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();
  const [pending, setPending] = useState(false);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: () => fetcher(`/api/comments?postSlug=${postSlug}`),
  });

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    setPending(true);
    setDesc("");
    await axios.post("/api/comments", {
      desc,
      postSlug,
    });
    await refetch();
    setPending(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <input
            type="text"
            placeholder="write a comment..."
            value={desc}
            className={" p-3 bg-white/10 rounded-lg w-full"}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button
            variant={"main"}
            onClick={handleSubmit}
            className="flex items-center gap-1"
          >
            Send {pending && <Loader2 className=" animate-spin w-4 h-4" />}
          </Button>
        </div>
      ) : (
        <Button asChild variant={"main"}>
          <Link href="/login">Login to write a comment</Link>
        </Button>
      )}
      <div className={styles.comments}>
        {isPending
          ? "loading.."
          : data?.map((item: Comment & { user: User }) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username + ""}>
                      {item.user.name}
                      <span
                        className={cn(
                          "text-xs ml-2",
                          item.user.isProf
                            ? " text-rose-500"
                            : " text-indigo-500"
                        )}
                      >
                        {item.user.isProf ? "professor" : "student"}
                      </span>
                    </span>
                    <span className={styles.date}>
                      {formatDate(item.createdAt)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
