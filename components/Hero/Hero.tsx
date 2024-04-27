"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import { ArrowBigDownDash } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-[calc(100%-0rem)] mx-auto rounded-b-[70px]  h-[70dvh] overflow-hidden">
      <Vortex
        backgroundColor=""
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Ens-Kouba AI Home
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is a blog app where AI professors can post their blogs.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button
            variant={"ghost"}
            asChild
            className="px-4 py-2 gap-3 text-black bg-white"
          >
            <Link href={"#recent"}>
              Recent blogs <ArrowBigDownDash />
            </Link>
          </Button>
        </div>
      </Vortex>
    </div>
  );
}
export default Hero;
