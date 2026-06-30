import type { ReleaseInfo } from "@/lib/release";
import { bytesToMB } from "@/lib/release";

export function DownloadCTA({ release }: { release: ReleaseInfo }) {
  const href = release.available && release.downloadUrl ? release.downloadUrl : release.repoUrl;
  const label = release.available ? "⬇ Windows uchun yuklab olish" : "⬇ GitHub'dan yuklab olish";

  return (
    <section id="download" className="container" style={{ paddingTop: 40, paddingBottom: 90 }}>
      <div
        className="panel"
        style={{
          padding: "48px 36px",
          textAlign: "center",
          background: "radial-gradient(700px 300px at 50% 0%, rgba(57,211,83,0.10), transparent 60%), linear-gradient(180deg, var(--panel), var(--bg-1))",
          borderColor: "var(--border-strong)",
        }}
      >
        <span className="chip" style={{ margin: "0 auto" }}>▸ Bepul · Windows 10 / 11</span>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginTop: 16 }}>
          Bugun o'rganishni boshlang
        </h2>
        <p style={{ color: "var(--text-1)", fontSize: 17, marginTop: 12, maxWidth: 520, marginInline: "auto" }}>
          Ilovani yuklab oling, o'rnating va birinchi darsdan boshlang. Internet faqat
          kompilyatsiya tillari (Java, C++ va h.k.) uchun kerak.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 26, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={href} {...(!release.available ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {label}
          </a>
        </div>

        <div className="mono" style={{ color: "var(--text-2)", fontSize: 12.5, marginTop: 18 }}>
          {release.version ? `Versiya ${release.version}` : "Eng so'nggi versiya"}
          {release.size ? ` · ${bytesToMB(release.size)}` : ""}
          {" · NSIS installer (.exe)"}
        </div>

        <p style={{ color: "var(--text-2)", fontSize: 12.5, marginTop: 18, maxWidth: 560, marginInline: "auto" }}>
          ⚠️ Windows "noma'lum nashriyot" deb ogohlantirishi mumkin (ilova hali raqamli imzolanmagan).
          Bu xavfsiz — <b style={{ color: "var(--text-1)" }}>More info → Run anyway</b> ni bosing.
        </p>
      </div>
    </section>
  );
}
