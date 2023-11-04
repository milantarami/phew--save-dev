import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuthConfig from "@/config/next-auth.config";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: NextAuthConfig.github.clientId,
      clientSecret: NextAuthConfig.github.clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
