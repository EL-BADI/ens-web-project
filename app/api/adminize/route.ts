import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await auth();
  const secretPassword = process.env.secretPassword;
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { data } = await req.json();

    if (data?.pin !== secretPassword)
      return new NextResponse(JSON.stringify({ success: false }), {
        status: 401,
      });

    await db.user.update({
      where: {
        email: session.user?.email as string,
        name: session.user?.name as string,
      },
      data: {
        isProf: true,
      },
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ success: false, message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
