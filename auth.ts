import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./lib/db";

export const { signIn, signOut, auth, handlers } = NextAuth({
  trustHost: true,
  providers: [Google],
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      try {
        // check if user already exists
        const userExists = await db.user.findUnique({
          where: {
            email: user.email as string,
          },
        });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await db.user.create({
            data: {
              name: user.name,
              image: user.image,
              email: user.email as string,
              isProf: false,
            },
          });
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  },
});
