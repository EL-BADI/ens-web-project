import { Bot, LogIn, PenBox } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import AccountDropMenu from "../AccountDropMenu";
import Search from "./Search";
import { auth } from "@/auth";
import { db } from "@/lib/db";

const TopNav = async () => {
  const session = await auth();
  const posts = await db.post.findMany({});
  return (
    <header className="bg-zinc-950/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 md:py-2 py-0.5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href={"/"} className=" text-gray-100">
              <Bot className="md:w-11 md:h-11 w-7 h-7" />
            </Link>
          </div>

          <div className="">
            <nav aria-label="Global">
              <ul className="flex items-center md:gap-6 gap-4">
                {session && (
                  <li>
                    <Link
                      className="text-zinc-400 transition flex items-center gap-1 md:text-base text-sm hover:text-zinc-300"
                      href="/write"
                    >
                      Write <PenBox className=" w-3 h-3 md:w-5 md:h-5" />
                    </Link>
                  </li>
                )}

                <li>
                  <Search posts={posts} />
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!session && (
                <Button
                  variant={"main"}
                  asChild
                  className=" flex items-center gap-1"
                >
                  <Link href={"/sign-in"}>
                    {" "}
                    Sign in <LogIn className=" w-4 h-4" />
                  </Link>
                </Button>
              )}
              {session && (
                <AccountDropMenu imageUrl={session.user?.image as string} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
