import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { env } from "@/env/server";
import { account } from "@/services/appwrite-auth.service";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      // profile: async () => {
      //   try {
      //     const user = await account.createOAuth2Session("github");

      //     return {
      //       id: user.$id,
      //       name: user.name,
      //       email: user.email,
      //       image: user.prefs.avatar,
      //     };
      //   } catch (error) {
      //     console.error("Error saving user to Appwrite:", error);
      //     throw new Error("Error saving user to Appwrite");
      //   }
      // },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
} as NextAuthOptions;

export default NextAuth(authOptions);
