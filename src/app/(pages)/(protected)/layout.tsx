import type { Metadata } from "next";
import { Inter } from "next/font/google";

import IndexedDbSupport from "@/components/indexed-db/IndexedDbSupport";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "phew --save-dev",
  description: "New way to remember things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <IndexedDbSupport />
      </body>
    </html>
  );
}
