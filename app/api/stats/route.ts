import { NextResponse } from "next/server";
import { getLatestRelease } from "@/lib/release";
import { waitlistCount } from "@/lib/store";
import { LANGUAGES, TOTAL_LESSONS } from "@/lib/languages";

// Umumiy statistika (hero/footerда ko'rsatish + kelajakdagi reyting bilan kengayadi).
export const revalidate = 600;

export async function GET() {
  const [release, waitlist] = await Promise.all([getLatestRelease(), waitlistCount().catch(() => 0)]);
  return NextResponse.json({
    languages: LANGUAGES.length,
    lessons: TOTAL_LESSONS,
    downloads: release.downloads,
    version: release.version,
    waitlist,
  });
}
