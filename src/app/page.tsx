"use client";

import Image from "next/image";
import { Client, Account } from "appwrite";
import AppwriteConfig from "@/config/appwite.config";

export default function Home() {
  const handleLogin = () => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject(AppwriteConfig.projectId); // Your project ID

    const account = new Account(client);

    // Go to OAuth provider login page
    account.createOAuth2Session(
      "github",
      "http://localhost:3001/bookmarks",
      "http://localhost:3001/failed"
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleLogin}>login</button>
    </main>
  );
}
