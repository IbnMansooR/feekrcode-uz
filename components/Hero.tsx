import type { ReleaseInfo } from "@/lib/release";
import { bytesToMB } from "@/lib/release";
import { LANGUAGES, TOTAL_LESSONS } from "@/lib/languages";

function DownloadBtn({ release }: { release: ReleaseInfo }) {
  if (release.available && release.downloadUrl) {
    return (
      <a className="btn btn-primary" href={release.downloadUrl}>
        ⬇ Windows uchun yuklab olish
        <span className="mono" style={{ fontWeight: 600, opacity: 0.7, fontSize: 12.5 }}>
          {release.version ? `v${release.version}` : ""} {release.size ? `· ${bytesToMB(release.size)}` : ""}
        </span>
      </a>
    );
  }
  return (
    <a className="btn btn-primary" href={release.repoUrl} target="_blank" rel="noopener noreferrer">
      ⬇ GitHub'dan yuklab olish
    </a>
  );
}

export function Hero({ release }: { release: ReleaseInfo }) {
  return (
    <section id="top" className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
      <div className="hero-grid">
        {/* chap — matn */}
        <div className="fade-up">
          <span className="chip">▸ Desktop ilova · Windows · Offline</span>
          <h1 style={{ fontSize: "clamp(34px, 5.4vw, 60px)", fontWeight: 800, marginTop: 18 }}>
            Kod o'rganishni{" "}
            <span className="h-grad glow">o'yinga</span> aylantiramiz
          </h1>
          <p style={{ color: "var(--text-1)", fontSize: 18, marginTop: 18, maxWidth: 540 }}>
            Boshlovchidan professionalgacha <b style={{ color: "var(--text-0)" }}>12 dasturlash tilini</b>{" "}
            bosqichma-bosqich. Har til — missiya, har dars — Duolingo uslubidagi yo'lda tugun.
            Kodni o'zingiz yozasiz, ilova natijasini tekshiradi.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <DownloadBtn release={release} />
            <a className="btn btn-ghost" href="#how">Qanday ishlaydi →</a>
          </div>

          <div style={{ display: "flex", gap: 26, marginTop: 30, flexWrap: "wrap" }}>
            <Stat n={String(LANGUAGES.length)} label="dasturlash tili" />
            <Stat n={String(TOTAL_LESSONS)} label="amaliy dars" />
            <Stat n="3" label="tilda (uz / en / ru)" />
            {release.downloads > 0 && <Stat n={release.downloads.toLocaleString()} label="yuklab olishlar" />}
          </div>
        </div>

        {/* o'ng — terminal mokap (o'yinning ko'rinishi) */}
        <div className="fade-up" style={{ animationDelay: ".12s" }}>
          <div className="panel" style={{ overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,.5)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "11px 14px", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
              <Dot c="#e2503f" /><Dot c="#e0a020" /><Dot c="#2bbf6a" />
              <span className="mono" style={{ marginLeft: 8, fontSize: 12, color: "var(--text-2)" }}>Code++ · python</span>
              <span className="mono" style={{ marginLeft: "auto", fontSize: 11.5, color: "var(--accent)" }}>+25 XP</span>
            </div>
            <pre className="mono" style={{ margin: 0, padding: "18px 18px 8px", fontSize: 13.5, lineHeight: 1.8, color: "var(--text-1)" }}>
<span style={{ color: "#6f7f97" }}># vazifa: ismingni chiqar</span>{"\n"}
ism <span style={{ color: "#ff7ab2" }}>=</span> <span style={{ color: "var(--accent)" }}>"Jasur"</span>{"\n"}
<span style={{ color: "#7cc7ff" }}>print</span>(<span style={{ color: "#ff7ab2" }}>"Salom, "</span> + ism)<span className="cursor" />
            </pre>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px 18px" }}>
              <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13.5 }}>✓ To'g'ri!</span>
              <span className="mono" style={{ color: "var(--text-2)", fontSize: 12.5 }}>Salom, Jasur</span>
              <span className="btn btn-primary" style={{ marginLeft: "auto", padding: "7px 13px", fontSize: 12.5 }}>Darsni yakunlash</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 26, fontWeight: 800, color: "var(--text-0)" }}>{n}</div>
      <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>{label}</div>
    </div>
  );
}
function Dot({ c }: { c: string }) {
  return <span style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />;
}
