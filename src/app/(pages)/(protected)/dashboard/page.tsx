import appwriteAuthService from "@/services/AppwriteAuthService";
import { NextRequest, NextResponse } from "next/server";
import React, { useEffect } from "react";

async function DashboardPage(req: NextRequest, res: NextResponse) {
  const data = await appwriteAuthService.getSession({ req });

  return <div>{JSON.stringify(data)}</div>;
}

export default DashboardPage;
