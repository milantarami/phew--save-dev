"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
