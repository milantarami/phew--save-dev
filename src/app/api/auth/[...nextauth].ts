import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuthConfig from "@/config/next-auth.config";
import { account } from "@/services/appwrite-auth.service";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: NextAuthConfig.github.clientId,
      clientSecret: NextAuthConfig.github.clientSecret,
      profile: async () => {
        try {
          const user = await account.createOAuth2Session("github");

          return {
            id: user.$id,
            name: user.name,
            email: user.email,
            image: user.prefs.avatar,
          };
        } catch (error) {
          console.error("Error saving user to Appwrite:", error);
          throw new Error("Error saving user to Appwrite");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
} as NextAuthOptions;

export default NextAuth(authOptions);
