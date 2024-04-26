"use client";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import { PlusCircleIcon } from "lucide-react";
import Center from "@/components/Center";
import { CldUploadWidget } from "next-cloudinary";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: image,
        slug: slugify(title),
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <Center>
      <div className={styles.container + " mt-20"}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.editor}>
          <CldUploadWidget
            onSuccess={(result) => {
              setImage(result?.info?.secure_url);
            }}
            options={{
              clientAllowedFormats: ["webp", "png", "jpg", "jpeg"],
              maxImageFileSize: 500000,
              maxFiles: 1,
            }}
            uploadPreset="web-project"
          >
            {({ open }) => {
              return (
                <button
                  onClick={() => {
                    open();
                  }}
                  className={styles.button}
                >
                  <PlusCircleIcon />
                </button>
              );
            }}
          </CldUploadWidget>

          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </Center>
  );
};

export default WritePage;
