import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ee",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 78, color: "#1c1a17", letterSpacing: "-0.03em" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 14, fontSize: 32, color: "#57534c" }}>
            {`${site.role} · ${site.location}`}
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 30, color: "#1c1a17", maxWidth: 900, lineHeight: 1.4 }}>
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, borderTop: "1px solid #e4e4e7", paddingTop: 26 }}>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 9999, background: "#9c3d1c" }} />
          <div style={{ display: "flex", fontSize: 22, color: "#57534c" }}>
            Three applications in production
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#c9c1b2" }}>/</div>
          <div style={{ display: "flex", fontSize: 22, color: "#57534c" }}>
            Best Paper, ICICyTA 2024
          </div>
        </div>
      </div>
    ),
    size,
  );
}
