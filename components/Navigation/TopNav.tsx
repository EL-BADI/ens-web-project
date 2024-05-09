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
    <header className=" bg-zinc-950/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href={"/"} className=" text-gray-100">
              <Bot className="w-11 h-11" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                {session && (
                  <li>
                    <Link
                      className="text-zinc-400 transition flex items-center gap-1 hover:text-zinc-300"
                      href="/write"
                    >
                      Write <PenBox className=" w-5 h-5" />
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

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
