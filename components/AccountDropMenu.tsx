"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface AccountDropMenuProps {
  imageUrl: string;
  id?: string;
  isAdmin?: boolean;
}
const AccountDropMenu = ({
  imageUrl,
  isAdmin = false,
}: AccountDropMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="relative group flex mx-3 h-[40px] rounded-full w-[40px] transition-all overflow-hidden"
          variant="ghost"
          size="icon"
        >
          <Image src={imageUrl as string} fill alt="Channel" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="bottom">
        {isAdmin && (
          <DropdownMenuItem>
            <Link href={`/account`}>My Blogs</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Button
            onClick={() => signOut()}
            className="flex items-center text-rose-500"
          >
            Log out <LogOut className=" w-4 h-4 ml-2" />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropMenu;
