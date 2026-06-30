const STEPS = [
  { n: "01", title: "Til va darsni tanlang", desc: "12 tildan birini tanlab, Duolingo uslubidagi yo'lда birinchi darsdan boshlaysiz. Har dars oldingisini tugatganda ochiladi." },
  { n: "02", title: "Kodni o'zingiz yozasiz", desc: "Vazifani o'qib, Code++ muharririda yechimingizni yozasiz. Tushunmasangiz — maslahat yoki yechimni ko'rishingiz mumkin." },
  { n: "03", title: "Ilova natijani tekshiradi", desc: "Kod ishga tushiriladi va NATIJASI tekshiriladi. To'g'ri bo'lsa — XP olasiz, keyingi dars ochiladi va streak o'sadi." },
];

export function HowItWorks() {
  return (
    <section id="how" className="container section-pad">
      <span className="eyebrow">Qanday ishlaydi</span>
      <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, marginTop: 12, maxWidth: 620 }}>
        O'qish emas — qilish orqali o'rganasiz
      </h2>
      <div className="steps" style={{ marginTop: 38 }}>
        {STEPS.map((s) => (
          <div key={s.n} className="panel" style={{ padding: 24, position: "relative" }}>
            <div className="mono" style={{ fontSize: 30, fontWeight: 800, color: "var(--accent)", opacity: 0.85 }}>{s.n}</div>
            <h3 style={{ fontSize: 18.5, fontWeight: 700, marginTop: 10 }}>{s.title}</h3>
            <p style={{ color: "var(--text-1)", fontSize: 14.5, marginTop: 8, marginBottom: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 820px) { .steps { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
