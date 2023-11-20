"use client";

import appwriteAuthService from "@/services/appwrite-auth.service";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = () => {
    // appwriteAuthService.loginWithGithub();
    signIn("github", {
      callbackUrl: "http://localhost:3008",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleLogin}>login</button>
    </main>
  );
}
