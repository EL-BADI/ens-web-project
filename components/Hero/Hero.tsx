"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "../ui/BackGroundBoxes";

function Hero() {
  return (
    <div className="h-96 rounded-2xl relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Ens Kouba AI
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore
      </p>
    </div>
  );
}
export default Hero;
