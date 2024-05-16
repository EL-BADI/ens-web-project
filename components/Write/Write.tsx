"use client";
import styles from "./writePage.module.css";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import { Loader2, PlusCircleIcon } from "lucide-react";
import Center from "@/components/Center";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import ActionToolTip from "@/components/ActionToolTip";
import { Button } from "../ui/button";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

const Write = () => {
  const { status } = useSession();
  const router = useRouter();
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [pending, setPending] = useState(false);

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
    setPending(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: image,
        slug: slugify(title),
      }),
    });
    router.refresh();
    if (res.status === 200) {
      toast("Your blog published Successfully!");
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <Center>
      <div className={styles.container + " mt-20"}>
        {image && (
          <div className="relative bg-zinc-700 rounded-2xl mt-3  h-64 overflow-hidden">
            <Image
              fill
              unoptimized
              src={image}
              alt="blog image"
              className=" object-cover z-10"
            />
          </div>
        )}
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.editor}>
          <CldUploadWidget
            onSuccess={(result) => {
              // @ts-ignore
              setImage(result?.info?.secure_url);
            }}
            options={{
              clientAllowedFormats: ["webp", "png", "jpg", "jpeg"],
              maxFiles: 1,
            }}
            uploadPreset="web-project"
          >
            {({ open }) => {
              return (
                <ActionToolTip label="Add image">
                  <button
                    onClick={() => {
                      open();
                    }}
                    className={styles.button}
                  >
                    <PlusCircleIcon />
                  </button>
                </ActionToolTip>
              );
            }}
          </CldUploadWidget>

          <ReactQuill
            className={
              "w-full text-white border-2 border-white/80 mb-11 rounded-xl"
            }
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
        <Button
          variant={"main"}
          disabled={pending}
          className=" z-20 absolute top-16 right-0 flex items-center gap-1"
          onClick={handleSubmit}
        >
          Publish
          {pending && <Loader2 className="w-5 h-5 animate-spin" />}
        </Button>
      </div>
    </Center>
  );
};

export default Write;
