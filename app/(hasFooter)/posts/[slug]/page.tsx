import Comments from "@/components/Comments/Comments";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = await db.post.findUnique({
    where: { slug },
    include: { user: true },
  });

  return (
    <div className="pt-24 min-h-screen">
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name}</span>
              <span className={styles.date}>
                {formatDate(post?.createdAt as Date)}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt=""
              fill
              className={styles.image + " rounded-2xl"}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc as string }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
