import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Softwave Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Coral glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 400,
            background: "radial-gradient(circle, rgba(232,115,95,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#faf4f1",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Softwave{" "}
          <span style={{ color: "#e8735f" }}>Innovation</span>
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Software That Moves the World Forward
        </div>
        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 48,
          }}
        >
          {["Web Dev", "Mobile", "AI/ML", "Data", "Cloud"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(232,115,95,0.15)",
                border: "1px solid rgba(232,115,95,0.3)",
                color: "#e8735f",
                fontSize: 18,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
