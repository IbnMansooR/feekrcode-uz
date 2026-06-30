# feekrcode.uz — Feekr Code rasmiy sayti

Feekr Code o'yini uchun rasmiy landing sayt + yengil backend.
**Next.js 14 (App Router) + TypeScript**, tashqi UI kutubxonasi yo'q (faqat React).
Vercel'da ham, Netlify'da ham ishlaydi.

## Nima bor

- **Landing sahifa** — hero, imkoniyatlar, 12 til, "qanday ishlaydi", kelajak rejasi, yuklab olish.
- **Backend (API)**:
  - `GET /api/release` — o'yinning oxirgi relizini GitHub Releases'dan oladi (yuklab olish tugmasi shundan foydalanadi).
  - `POST /api/subscribe` — waitlist'ga email qo'shadi (kelajakdagi akkaunt/reyting tizimi uchun).
  - `GET /api/stats` — umumiy statistika (tillar, darslar, yuklab olishlar, ro'yxat soni).
- **Dizayn** — o'yinning "Neo Terminal" qora-yashil estetikasi + Feekr brendi.

## Lokal ishga tushirish

```bash
npm install
cp .env.example .env.local   # qiymatlarni to'ldiring (pastga qarang)
npm run dev                  # http://localhost:3000
```

## Muhit o'zgaruvchilari (.env.local)

| O'zgaruvchi | Majburiy | Tavsif |
|---|---|---|
| `GITHUB_OWNER` | ha | O'yin repo egasi (masalan `feekr`) |
| `GITHUB_REPO` | ha | O'yin repo nomi (masalan `feekr-code`) |
| `GITHUB_TOKEN` | yo'q | GitHub API rate-limitini oshirish uchun (faqat o'qish) |
| `UPSTASH_REDIS_REST_URL` | yo'q | Waitlist'ni doimiy saqlash uchun (Upstash, bepul) |
| `UPSTASH_REDIS_REST_TOKEN` | yo'q | Upstash token |
| `NEXT_PUBLIC_SITE_URL` | yo'q | Saytning to'liq manzili (SEO uchun) |

> Upstash sozlanmasa, waitlist vaqtinchalik xotiraga yoziladi (demo). Doimiy
> saqlash uchun [upstash.com](https://upstash.com) → bepul Redis → REST URL/TOKEN.

## Deploy — Vercel (tavsiya)

1. Bu papkani GitHub repo qiling (alohida repo, masalan `feekrcode-uz`).
2. [vercel.com](https://vercel.com) → **New Project** → repodan import.
3. Vercel Next.js'ni o'zi taniydi — sozlash shart emas.
4. **Settings → Environment Variables**'ga `.env.example`dagilarni qo'shing.
5. **Deploy**. Tayyor domenni `feekrcode.uz` ga ulang (Settings → Domains).

## Deploy — Netlify (muqobil)

1. [netlify.com](https://netlify.com) → **Add new site** → repodan import.
2. `netlify.toml` allaqachon sozlangan (`@netlify/plugin-nextjs` ishlatadi).
3. **Site settings → Environment variables**'ga o'zgaruvchilarni qo'shing.
4. Deploy → domen ulash.

## O'yin bilan bog'lanishi

Yuklab olish tugmasi `GITHUB_OWNER/GITHUB_REPO` repodagi **oxirgi Release**ga avtomatik
ishora qiladi. Ya'ni o'yinning yangi versiyasini GitHub Releases'ga chiqarsangiz —
sayt o'zi yangi `.exe`ga yo'naltiradi (qo'lда tahrirlash shart emas).

## Keyingi qadam (kelajak)

`/api/subscribe` va `lib/store.ts` allaqachon waitlist saqlaydi. Akkaunt, Code Battle
va reyting tizimi qo'shilganda — shu backend Postgres/Supabase bilan kengayadi
(struktura tayyor).
