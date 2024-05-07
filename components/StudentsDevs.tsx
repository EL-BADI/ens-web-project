"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedToolTip";

const people = [
  {
    id: 1,
    name: "Zenikhri Abdelbadia",
    designation: "Student Grp-06",
    image:
      "https://scontent.falg3-2.fna.fbcdn.net/v/t39.30808-6/327156811_752952062842689_4926525386756759761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfXmk0cad7X4Dq0w5ubEGfi_S77iUTHDWL9LvuJRMcNSertg2gJk9cX_AoivXbD07FbCF547DSc1fTU915P06G&_nc_ohc=ZcfMWqJcCXMQ7kNvgEpzbPG&_nc_zt=23&_nc_ht=scontent.falg3-2.fna&oh=00_AfCTn6gBMi4woC__s5Rk12bZLbE0SwNKtuGODMgo37H82A&oe=66406FB4",
  },
  {
    id: 2,
    name: "Tahri Hichem Farouk",
    designation: "Student Grp-06",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Azzedinne Abdelmounaim",
    designation: "Student Grp-01",
    image:
      "https://scontent.falg3-2.fna.fbcdn.net/v/t39.30808-6/430107988_1806592439846227_4128361839935157399_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFGVPpg43QoGfAUZOUwdFpQR8IQC9u-LtpHwhAL274u2sigC5rGa8TL0u6kNUp_WAkfeWcxDFNdD-rkmVhKROoU&_nc_ohc=Vryg47T9IPMQ7kNvgG4sJ-g&_nc_zt=23&_nc_ht=scontent.falg3-2.fna&oh=00_AfBWUsLMhCJq1QWh5hHvh-uL3wftwCFiLiW4zLtrxsl_VQ&oe=663F48C7",
  },
  {
    id: 4,
    name: "Rouisat abdelbasset",
    designation: "Student Grp-06",
    image:
      "https://scontent.falg3-2.fna.fbcdn.net/v/t39.30808-6/422605873_1589740518431943_3418050170892351668_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2Po9RZk9xy6jrjp6H6rpS1GmMaxxBqKrUaYxrHEGoqqmowfap1fPbG46_iduExoIORwF3LOSmXZWbhvUxYIYk&_nc_ohc=gETpfYvCNxoQ7kNvgFcXVAB&_nc_zt=23&_nc_ht=scontent.falg3-2.fna&oh=00_AfBVIlwKCcFvoHiG1QPy1riiw3p2Z5hsLjOBSBzMAVGE0w&oe=664063F5",
  },
];

export function StudentsDevs() {
  return (
    <div className="flex flex-row items-center mt-3 justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
