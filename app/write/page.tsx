import { auth } from "@/auth";
import Write from "@/components/Write/Write";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const WritePage = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  const user = await db.user.findUnique({
    where: {
      email: session.user?.email as string,
      name: session.user?.name,
    },
  });

  if (!user?.isProf) redirect("/adminize");
  return <Write />;
};

export default WritePage;
