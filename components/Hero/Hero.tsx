"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";

export default function Hero() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-7xl heroTitle font-extrabold tracking-wide text-center">
          Ens-Kouba AI Home
        </h2>
        <p className="text-white heroTitle font-semibold text-sm md:text-2xl max-w-xl mt-6 text-center">
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
      </motion.div>
    </LampContainer>
  );
}

// import { Vortex } from "../ui/vortex";
// import { ArrowBigDownDash } from "lucide-react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import React from "react";

// function Hero() {
//   return (
//     <div className="h-[100dvh] w-full overflow-hidden">
//       <Vortex
//         rangeSpeed={3.5}
//         rangeRadius={0.7}
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-2xl heroTitle md:text-6xl font-bold text-center">
//           Ens-Kouba AI Home
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is a blog app where AI professors can post their blogs.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <Button
//             variant={"ghost"}
//             asChild
//             className="px-4 py-2 gap-3 text-black bg-white"
//           >
//             <Link href={"#recent"}>
//               Recent blogs <ArrowBigDownDash />
//             </Link>
//           </Button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }
// export default React.memo(Hero);
