import { NextResponse } from "next/server";
import { getLatestRelease } from "@/lib/release";

// Oxirgi reliz haqida ma'lumot (yuklab olish tugmasi shundan foydalanadi).
export const revalidate = 600; // 10 daqiqa kesh

export async function GET() {
  const info = await getLatestRelease();
  return NextResponse.json(info, {
    headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600" },
  });
}
