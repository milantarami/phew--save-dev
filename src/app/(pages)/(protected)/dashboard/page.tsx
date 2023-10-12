import AppConfig from "@/config/app.config";
import NextAuthConfig from "@/config/next-auth.config";
import { NextRequest, NextResponse } from "next/server";

async function DashboardPage(req: NextRequest, res: NextResponse) {
  return <>facebook</>;
}

export default DashboardPage;
