import { env } from "@/env/server";

export async function GET() {
  return Response.json(process.env.NODE_ENV === "development" ? env : {});
}
