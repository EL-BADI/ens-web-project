"use client";

import { Bot, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import AccountDropMenu from "../AccountDropMenu";

const TopNav = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-slate-900 fixed w-full z-50 top-0 left-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href={"/"} className=" text-indigo-500">
              <Bot className=" w-8 h-8" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {
                  <li>
                    <Link
                      className="text-zinc-400 transition hover:text-zinc-300"
                      href="/write"
                    >
                      {" "}
                      Write{" "}
                    </Link>
                  </li>
                }

                <li>
                  <a
                    className="text-zinc-400 transition hover:text-zinc-300"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-400 transition hover:text-zinc-300"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-400 transition hover:text-zinc-300"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-400 transition hover:text-zinc-300"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-400 transition hover:text-zinc-300"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {status === "unauthenticated" && (
                <Button
                  variant={"main"}
                  asChild
                  className=" flex items-center gap-1"
                >
                  <Link href={"/login"}>
                    {" "}
                    Login <LogIn className=" w-4 h-4" />
                  </Link>
                </Button>
              )}
              {status === "authenticated" && (
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
