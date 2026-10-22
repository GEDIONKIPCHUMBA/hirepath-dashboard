import { NextResponse } from "next/server";
import { scholarships, candidates, stats, user } from "@/lib/data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json({
    user,
    stats,
    scholarships,
    candidates,
    success: true,
    timestamp: new Date().toISOString(),
  });
}
