import { env } from "@/env/server";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { account } from "@/services/appwrite-auth.service";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile: async (profile) => {
        try {
          const user = await account.createOAuth2Session("github");

          return profile;
        } catch (error) {
          console.error("Error saving user to Appwrite:", error);
          throw new Error("Error saving user to Appwrite");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
