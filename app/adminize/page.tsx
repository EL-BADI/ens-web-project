import { auth } from "@/auth";
import AdminizeForm from "@/components/AdminizeForm";
import { redirect } from "next/navigation";
import React from "react";

const password = "ens-kouba-info";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  return <AdminizeForm />;
};

export default page;
