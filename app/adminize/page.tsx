import { auth } from "@/auth";
import AdminizeForm from "@/components/AdminizeForm";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/login");

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email as string,
      name: session?.user?.name as string,
    },
  });

  if (user?.isProf) redirect("/write");

  return <AdminizeForm />;
};

export default page;
