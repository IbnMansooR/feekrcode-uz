const FEATURES = [
  { icon: "🎮", title: "Gamifikatsiya", desc: "XP, daraja, kunlik streak va 'barqarorlik' mexanikasi. O'rganish — o'yin kabi qiziq." },
  { icon: "🧪", title: "Haqiqiy tekshiruv", desc: "Kodingiz ishga tushiriladi va natijasi tekshiriladi — matnni ko'chirish emas, haqiqatan tushunish." },
  { icon: "📡", title: "Offline ishlaydi", desc: "HTML, CSS, JavaScript, TypeScript, Python va SQL internetsiz. Hammasi ichida." },
  { icon: "🌐", title: "3 tilda", desc: "Har dars o'zbek, ingliz va rus tillarida. O'zingizga qulayini tanlang." },
  { icon: "⌨️", title: "Code++ muharrir", desc: "Professional Monaco muharriri (VS Code yuragi) — avtoto'ldirish va sintaksis bilan." },
  { icon: "🗺️", title: "Duolingo yo'li", desc: "Har til — missiya, har dars — yo'ldagi tugun. Bosqichma-bosqich, qulflar bilan." },
];

export function Features() {
  return (
    <section id="features" className="container section-pad">
      <span className="eyebrow">Nega Feekr Code</span>
      <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, marginTop: 12, maxWidth: 620 }}>
        O'rganishni qiziq, amaliy va izchil qiladigan ilova
      </h2>
      <div className="feat-grid" style={{ marginTop: 38 }}>
        {FEATURES.map((f) => (
          <div key={f.title} className="panel" style={{ padding: 22 }}>
            <div style={{ fontSize: 26 }}>{f.icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 12 }}>{f.title}</h3>
            <p style={{ color: "var(--text-1)", fontSize: 14.5, marginTop: 8, marginBottom: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 860px) { .feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .feat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
