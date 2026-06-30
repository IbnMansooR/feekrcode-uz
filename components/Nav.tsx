import { Logo } from "./Logo";
import { REPO_URL } from "@/lib/release";

export function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "rgba(5,8,13,0.72)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", gap: 18, height: 64 }}
      >
        <a href="#top" aria-label="Feekr Code">
          <Logo size={28} />
        </a>
        <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }} className="nav-links">
          <a className="nav-link" href="#features">Imkoniyatlar</a>
          <a className="nav-link" href="#languages">Tillar</a>
          <a className="nav-link" href="#how">Qanday ishlaydi</a>
          <a className="nav-link" href="#roadmap">Kelajak</a>
          <a className="btn btn-ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer"
             style={{ padding: "8px 14px", fontSize: 13.5 }}>
            GitHub
          </a>
          <a className="btn btn-primary" href="#download" style={{ padding: "8px 16px", fontSize: 13.5 }}>
            Yuklab olish
          </a>
        </nav>
      </div>
      <style>{`
        .nav-link { color: var(--text-1); font-size: 14px; padding: 8px 12px; border-radius: 9px; transition: color .15s, background .15s; }
        .nav-link:hover { color: var(--text-0); background: rgba(255,255,255,0.04); }
        @media (max-width: 860px) { .nav-link { display: none; } }
      `}</style>
    </header>
  );
}
