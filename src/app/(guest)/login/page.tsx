"use client";

import appwriteAuthService from "@/services/appwrite-auth.service";

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
