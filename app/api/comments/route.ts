import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug") || "";

    const session = await auth();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        {
          status: 401,
        }
      );
    }

    const comments = await db.comment.findMany({
      where: {
        postSlug,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE A comment
export const POST = async (req: NextRequest) => {
  const session = await auth();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { desc, postSlug } = await req.json();

    if (!desc || !postSlug)
      return new NextResponse(
        JSON.stringify({ message: "params not provided" }),
        {
          status: 400,
        }
      );

    await db.comment.create({
      data: {
        postSlug,
        desc,
        userEmail: session.user?.email as string,
      },
    });

    return new NextResponse("success", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
