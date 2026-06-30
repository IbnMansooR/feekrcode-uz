import { Waitlist } from "./Waitlist";

const SOON = [
  { icon: "👤", title: "Akkaunt va profil", desc: "Ro'yxatdan o'tib, progressingiz bulutда saqlanadi — istalgan qurilmada davom etasiz." },
  { icon: "⚔️", title: "Code Battle", desc: "Boshqa o'quvchilar bilan jonli kod-duel: kim masalani tezroq va to'g'riroq yechadi." },
  { icon: "🏆", title: "Reytinglar", desc: "Haftalik va umumiy leaderboard — daraja, XP va g'alabalar bo'yicha raqobat." },
  { icon: "📊", title: "Umumiy statistika", desc: "Til bo'yicha global reyting, eng faol o'quvchilar va jamoaviy challenge'lar." },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="container section-pad">
      <span className="eyebrow">Kelajak rejasi</span>
      <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, marginTop: 12, maxWidth: 680 }}>
        Tez kunda: raqobat, reytinglar va jamoaviy o'rganish
      </h2>
      <p style={{ color: "var(--text-1)", fontSize: 16, marginTop: 14, maxWidth: 600 }}>
        Hozir Feekr Code bitta foydalanuvchili o'quv ilovasi. Keyingi bosqichda — akkauntlar,
        boshqalar bilan kod-jang va global reytinglar qo'shiladi.
      </p>

      <div className="soon-grid" style={{ marginTop: 32 }}>
        {SOON.map((s) => (
          <div key={s.title} className="panel" style={{ padding: 22, position: "relative" }}>
            <span className="mono" style={{ position: "absolute", top: 14, right: 14, fontSize: 10.5, color: "var(--accent)", border: "1px solid var(--border)", borderRadius: 999, padding: "3px 9px", textTransform: "uppercase", letterSpacing: 1 }}>
              tez kunda
            </span>
            <div style={{ fontSize: 26 }}>{s.icon}</div>
            <h3 style={{ fontSize: 17.5, fontWeight: 700, marginTop: 12 }}>{s.title}</h3>
            <p style={{ color: "var(--text-1)", fontSize: 14, marginTop: 8, marginBottom: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <Waitlist />
    </section>
  );
}
