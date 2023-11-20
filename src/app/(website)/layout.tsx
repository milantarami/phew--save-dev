import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import IndexedDbSupport from "@/components/atoms/indexed-db/IndexedDbSupport";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phew Save Dev",
  description: "New way to remember things",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        <IndexedDbSupport />
      </body>
    </html>
  );
}
