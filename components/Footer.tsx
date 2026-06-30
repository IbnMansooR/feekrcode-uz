import { Logo } from "./Logo";
import { REPO_URL } from "@/lib/release";

const YEAR = 2026;

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-1)", marginTop: 20 }}>
      <div
        className="container"
        style={{ padding: "40px 24px", display: "flex", gap: 28, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between" }}
      >
        <div style={{ maxWidth: 320 }}>
          <Logo size={26} />
          <p style={{ color: "var(--text-2)", fontSize: 13.5, marginTop: 12 }}>
            Kod o'rganishni o'yinga aylantiramiz. 12 dasturlash tili, 94 dars, 3 tilda.
          </p>
        </div>

        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <FooterCol title="Mahsulot" links={[
            { t: "Imkoniyatlar", h: "#features" },
            { t: "Tillar", h: "#languages" },
            { t: "Yuklab olish", h: "#download" },
          ]} />
          <FooterCol title="Jamoa" links={[
            { t: "Telegram", h: "https://t.me/feekr", ext: true },
            { t: "Instagram", h: "https://instagram.com/feekr", ext: true },
            { t: "GitHub", h: REPO_URL, ext: true },
          ]} />
        </div>
      </div>
      <div className="container" style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", color: "var(--text-2)", fontSize: 12.5, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span>© {YEAR} Feekr. Barcha huquqlar himoyalangan.</span>
        <span className="mono">feekrcode.uz</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { t: string; h: string; ext?: boolean }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 12, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: 1.5 }}>{title}</div>
      {links.map((l) => (
        <a key={l.t} href={l.h} {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
           style={{ color: "var(--text-1)", fontSize: 14 }} className="foot-link">
          {l.t}
        </a>
      ))}
      <style>{`.foot-link:hover { color: var(--accent); }`}</style>
    </div>
  );
}
