export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/feekr-mark.png"
        alt="Feekr"
        width={size}
        height={Math.round(size * 0.66)}
        style={{ display: "block", objectFit: "contain" }}
      />
      <span style={{ fontWeight: 800, fontSize: size * 0.62, letterSpacing: "-0.02em" }}>
        Feekr <span style={{ color: "var(--accent)" }}>Code</span>
      </span>
    </span>
  );
}
