import type React from "react";

export const neon = {
  colors: {
    background: "#020617",
    backgroundSoft: "#0f172a",
    panel: "rgba(15, 23, 42, 0.78)",
    panelStrong: "rgba(15, 23, 42, 0.92)",
    cyan: "#22d3ee",
    cyanSoft: "rgba(34, 211, 238, 0.14)",
    green: "#22c55e",
    greenSoft: "rgba(34, 197, 94, 0.14)",
    purple: "#8b5cf6",
    purpleSoft: "rgba(139, 92, 246, 0.16)",
    pink: "#fb7185",
    text: "#f8fafc",
    muted: "#cbd5e1",
    border: "rgba(255,255,255,0.12)",
  },

  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 32%), radial-gradient(circle at top right, rgba(139,92,246,0.2), transparent 30%), #020617",
    color: "#f8fafc",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "40px",
  } as React.CSSProperties,

  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  } as React.CSSProperties,

  card: {
    position: "relative",
    padding: "24px",
    borderRadius: "26px",
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.68))",
    border: "1px solid rgba(34,211,238,0.22)",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.35), 0 0 34px rgba(34,211,238,0.08)",
    backdropFilter: "blur(12px)",
  } as React.CSSProperties,

  cardGreen: {
    position: "relative",
    padding: "24px",
    borderRadius: "26px",
    background:
      "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(15,23,42,0.8))",
    border: "1px solid rgba(34,197,94,0.35)",
    boxShadow: "0 0 30px rgba(34,197,94,0.12)",
  } as React.CSSProperties,

  eyebrow: {
    color: "#22d3ee",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    margin: 0,
    fontSize: "13px",
  } as React.CSSProperties,

  muted: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontSize: "16px",
  } as React.CSSProperties,

  buttonPrimary: {
    display: "inline-block",
    color: "#020617",
    background: "linear-gradient(135deg, #22d3ee, #67e8f9)",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(34,211,238,0.28)",
  } as React.CSSProperties,

  buttonSuccess: {
    display: "inline-block",
    color: "#020617",
    background: "linear-gradient(135deg, #22c55e, #86efac)",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(34,197,94,0.24)",
  } as React.CSSProperties,

  buttonGhost: {
    display: "inline-block",
    color: "#f8fafc",
    background: "rgba(255,255,255,0.06)",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: 900,
    border: "1px solid rgba(255,255,255,0.14)",
    cursor: "pointer",
  } as React.CSSProperties,

  progressTrack: {
    height: "18px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "999px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
  } as React.CSSProperties,

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #22d3ee, #22c55e)",
    borderRadius: "999px",
    boxShadow: "0 0 24px rgba(34,211,238,0.45)",
  } as React.CSSProperties,
};