import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/store";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ro'yxatga (waitlist) email qo'shish — kelajakdagi akkaunt/reyting tizimi uchun.
export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Noto'g'ri so'rov" }, { status: 400 });
  }

  const email = String(body?.email ?? "").trim();
  if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Email noto'g'ri" }, { status: 400 });
  }

  try {
    const { added } = await addToWaitlist(email);
    return NextResponse.json({
      ok: true,
      added,
      message: added ? "Ro'yxatdan o'tdingiz! Reliz haqida xabar beramiz." : "Siz allaqachon ro'yxatdasiz.",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Saqlashda xatolik" }, { status: 500 });
  }
}
