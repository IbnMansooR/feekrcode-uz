import { LANGUAGES, TRACK_LABEL, type Track } from "@/lib/languages";

const TRACKS: Track[] = ["web", "backend", "system"];

export function Languages() {
  return (
    <section id="languages" className="container section-pad">
      <span className="eyebrow">12 til · 3 yo'nalish</span>
      <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, marginTop: 12, maxWidth: 640 }}>
        Vebdan tizim dasturlashgacha — bitta ilovada
      </h2>

      {TRACKS.map((track) => {
        const langs = LANGUAGES.filter((l) => l.track === track);
        return (
          <div key={track} style={{ marginTop: 34 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span className="mono" style={{ fontSize: 12, color: "var(--accent)", border: "1px solid var(--border)", padding: "4px 12px", borderRadius: 999, textTransform: "uppercase", letterSpacing: 1 }}>
                {TRACK_LABEL[track]}
              </span>
              <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>
            <div className="lang-grid">
              {langs.map((l) => (
                <div key={l.id} className="panel lang-card" style={{ padding: 16 }}>
                  <span
                    style={{
                      width: 44, height: 44, borderRadius: 11, display: "grid", placeItems: "center",
                      fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 15,
                      color: l.color, background: `${l.color}1a`, border: `1px solid ${l.color}55`,
                    }}
                  >
                    {l.glyph}
                  </span>
                  <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 15.5 }}>{l.name}</div>
                    <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>{l.tagline} · {l.lessons} dars</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <style>{`
        .lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .lang-card { display: flex; align-items: center; transition: transform .15s, border-color .15s; }
        .lang-card:hover { transform: translateY(-3px); border-color: var(--border-strong); }
        @media (max-width: 860px) { .lang-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .lang-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
