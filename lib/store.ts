// Waitlist (kelajakdagi akkaunt tizimi uchun email yig'ish) saqlovi.
//
// Strategiya: agar Upstash Redis (BEPUL) sozlangan bo'lsa — o'shanga yozadi (doimiy).
// Bo'lmasa — jarayon xotirasiga yozadi (demo; serverdek qayta ishga tushganda o'chadi).
// Hech qanday tashqi driver kerak emas — Upstash REST API'ga oddiy fetch.

const URL = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = "feekr:waitlist";

const memory = new Set<string>(); // zaxira (Upstash bo'lmasa)

export const hasPersistentStore = Boolean(URL && TOKEN);

async function upstash(command: (string | number)[]): Promise<any> {
  const res = await fetch(URL as string, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("upstash error " + res.status);
  return res.json();
}

/** Emailni ro'yxatga qo'shadi. Yangi qo'shilsa true, allaqachon bor bo'lsa false. */
export async function addToWaitlist(email: string): Promise<{ added: boolean }> {
  const e = email.trim().toLowerCase();
  if (hasPersistentStore) {
    // SADD — to'plamga qo'shadi; 1 = yangi, 0 = mavjud
    const r = await upstash(["SADD", KEY, e]);
    return { added: r?.result === 1 };
  }
  const had = memory.has(e);
  memory.add(e);
  return { added: !had };
}

/** Ro'yxatdagilar soni. */
export async function waitlistCount(): Promise<number> {
  if (hasPersistentStore) {
    const r = await upstash(["SCARD", KEY]);
    return Number(r?.result || 0);
  }
  return memory.size;
}
