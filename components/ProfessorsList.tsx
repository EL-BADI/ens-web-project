import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ProfessorsList = async () => {
  const professors = await db.user.findMany({
    where: {
      isProf: true,
    },
  });

  return (
    <div className="absolute top-[68px] w-[250px] right-0 bg-white/5 backdrop-blur-md p-5 rounded-xl h-fit overflow-y-auto">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500 to-rose-500 -z-10 transform scale-[0.40] bg-red-500 rounded-full blur-[250px]" />
      <h2 className="text-2xl mb-5 font-semibold text-slate-200">Professors</h2>
      <nav className=" flex flex-col gap-5">
        {professors &&
          professors.length > 0 &&
          professors.map((prof) => {
            return (
              <div key={prof.id} className=" flex gap-3 items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    className=" object-cover"
                    src={prof.image as string}
                    width={56}
                    height={56}
                    alt="professor image"
                  />
                </div>
                <div className=" flex flex-col">
                  <p>{prof.name}</p>
                  <Button
                    asChild
                    variant={"link"}
                    className=" text-slate-300 pl-0 justify-start"
                  >
                    <Link href={`/professors/${prof.id}`}>See Blogs</Link>
                  </Button>
                </div>
              </div>
            );
          })}
      </nav>
    </div>
  );
};

export default ProfessorsList;
