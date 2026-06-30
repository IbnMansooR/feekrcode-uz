"use client";
import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.ok) {
        setState("ok");
        setMsg(data.message || "Ro'yxatdan o'tdingiz!");
        setEmail("");
      } else {
        setState("err");
        setMsg(data.error || "Xatolik yuz berdi");
      }
    } catch {
      setState("err");
      setMsg("Tarmoq xatosi — qayta urinib ko'ring");
    }
  }

  return (
    <div
      className="panel"
      style={{
        marginTop: 28,
        padding: "26px 28px",
        display: "flex",
        alignItems: "center",
        gap: 22,
        flexWrap: "wrap",
        borderColor: "var(--border-strong)",
      }}
    >
      <div style={{ flex: "1 1 280px" }}>
        <h3 style={{ fontSize: 19, fontWeight: 700 }}>Birinchi bo'lib xabar oling</h3>
        <p style={{ color: "var(--text-2)", fontSize: 14, marginTop: 6, marginBottom: 0 }}>
          Akkaunt, Code Battle va reytinglar tayyor bo'lganda email orqali xabar beramiz.
        </p>
      </div>
      <form onSubmit={submit} style={{ flex: "1 1 320px", display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@misol.uz"
          aria-label="Email"
          style={{
            flex: 1, minWidth: 180, padding: "12px 16px", borderRadius: 11,
            background: "var(--bg-2)", border: "1px solid var(--border-strong)",
            color: "var(--text-0)", fontSize: 15, outline: "none",
          }}
        />
        <button type="submit" className="btn btn-primary" disabled={state === "loading"} style={{ minWidth: 130, justifyContent: "center" }}>
          {state === "loading" ? "…" : "Ro'yxatga yozilish"}
        </button>
        {msg && (
          <div
            style={{ flexBasis: "100%", fontSize: 13.5, marginTop: 2, color: state === "ok" ? "var(--accent)" : "#ff7a7a" }}
          >
            {state === "ok" ? "✓ " : "✗ "}{msg}
          </div>
        )}
      </form>
    </div>
  );
}
