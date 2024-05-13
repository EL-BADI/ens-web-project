import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (session) redirect("/");
  return (
    <div className="w-full md:grid md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center h-full md:py-12 py-20">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <p className="text-balance text-muted-foreground">
              connect to have the ability to comment on blog posts or write your
              own blog
            </p>
          </div>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button
              type="submit"
              className="w-full py-7 flex items-center gap-3 text-xl text-zinc-100"
            >
              <Image
                src={"https://img.icons8.com/?size=256&id=48166&format=png"}
                width={40}
                height={40}
                alt="google icon"
              />
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted md:block relative">
        <div className=" absolute w-full h-full top-0 left-0 bg-black/40 backdrop-blur-md hover:backdrop-blur-sm transition-all z-20"></div>
        <Image
          src={
            "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1714068334~exp=1714068934~hmac=d34fdbd1b2c3e0adc7356d5babc36a6bb2994a819cb58638c74fd5d0458f3e7f"
          }
          alt="Image"
          width={1000}
          height={1000}
          className="h-full w-full bg-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
