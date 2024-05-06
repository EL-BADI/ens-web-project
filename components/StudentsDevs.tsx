"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedToolTip";

const people = [
  {
    id: 1,
    name: "Zenikhri Abdelbadia",
    designation: "Student Grp-06",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
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
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function StudentsDevs() {
  return (
    <div className="flex flex-row items-center mt-3 justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
