"use client";
import NextAuth from "next-auth";


import appwriteAuthService from "@/services/AppwriteAuthService";

export default function LoginPage() {
  const handleLogin = () => {
    appwriteAuthService.loginWithGithub();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleLogin}>login</button>
    </main>
  );
}
