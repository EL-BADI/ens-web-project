"use client";

import { LucideCommand, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import KeyBoardKey from "../KeyBoardKey";
import { Post } from "@prisma/client";
import Image from "next/image";

const Search = ({ posts }: { posts: Post[] }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onClick = ({ slug }: { slug: string }) => {
    setOpen(false);
    return router.push(`/posts/${slug}`);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="group p-2 rounded-md flex items-center gap-x-2 w-full bg-zinc-300/10 dark:hover:bg-zinc-700/50 transition-all"
      >
        <SearchIcon className="w-4 h-4 text-zinc-400 dark:text-zinc-400" />
        <p className="font-semibold text-sm md:block hidden text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-all">
          Search
        </p>
        <KeyBoardKey
          className="md:flex hidden"
          symbol="K"
          Icon={<LucideCommand className="w-2.5 h-2.5" />}
        />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all channels and members..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {posts &&
            posts
              ?.map(({ title, img, slug, id }) => {
                return (
                  <CommandItem
                    onSelect={() => {
                      onClick({ slug });
                    }}
                    className="cursor-pointer hover:bg-zinc-500 flex items-center gap-3"
                    key={id}
                  >
                    <div className="w-10 h-10 relative overflow-hidden rounded-full">
                      <Image
                        src={img as string}
                        fill
                        className="object-cover"
                        alt="post image"
                      />
                    </div>
                    <span>{title}</span>
                  </CommandItem>
                );
              })
              .filter((item) => item)}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
