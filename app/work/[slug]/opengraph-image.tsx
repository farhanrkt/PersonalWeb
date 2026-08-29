import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const name = project?.name ?? site.name;
  const tagline = project?.tagline ?? site.tagline;
  const metrics = project?.metrics.slice(0, 3) ?? [];

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
          border: "1px solid #b6bcaf",
          margin: 0,
          padding: "48px 56px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#9c3d1c" }} />
          <div style={{ display: "flex", fontSize: 24, color: "#57534c" }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 24, color: "#ddd7cc" }}>/</div>
          <div style={{ display: "flex", fontSize: 24, color: "#57534c" }}>
            {project?.domain ?? "Work"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              color: "#1c1a17",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 34,
              color: "#9c3d1c",
              letterSpacing: "-0.01em",
              maxWidth: 940,
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 40, color: "#1c1a17", letterSpacing: "-0.02em" }}>
                {m.value}
              </div>
              <div style={{ display: "flex", marginTop: 6, fontSize: 20, color: "#57534c" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
