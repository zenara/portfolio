import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f1219 0%, #080a0f 100%)",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#c9a962" }}>S</span>
          <span style={{ color: "#8b93a7", fontSize: 13 }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
