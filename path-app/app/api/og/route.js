import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const x = parseFloat(searchParams.get("x") || "0");
    const y = parseFloat(searchParams.get("y") || "0");
    const locale = searchParams.get("locale") || "en";

    // Calculate position on 600x600 canvas
    // x: -10 to +10 maps to 50 to 550
    // y: -10 to +10 maps to 550 to 50 (inverted because canvas y is top-down)
    const dotX = ((x + 10) / 20) * 500 + 50;
    const dotY = ((-y + 10) / 20) * 500 + 50;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            position: "relative",
          }}
        >
          {/* Title */}
          <div
            style={{
              position: "absolute",
              top: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: "bold",
                background:
                  "linear-gradient(to right, #B8941F, #D4AF37, #E8C547)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              The P.A.T.H.
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#D4AF37",
                marginTop: 10,
              }}
            >
              My Political Compass
            </div>
          </div>

          {/* Compass Grid */}
          <div
            style={{
              width: 600,
              height: 600,
              position: "relative",
              display: "flex",
              marginTop: 100,
            }}
          >
            {/* Background */}
            <svg width="600" height="600" style={{ position: "absolute" }}>
              {/* Grid lines */}
              <line
                x1="300"
                y1="50"
                x2="300"
                y2="550"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="300"
                x2="550"
                y2="300"
                stroke="#1A1A1A"
                strokeWidth="2"
              />

              {/* Axes */}
              <line
                x1="300"
                y1="50"
                x2="300"
                y2="550"
                stroke="#D4AF37"
                strokeWidth="3"
              />
              <line
                x1="50"
                y1="300"
                x2="550"
                y2="300"
                stroke="#D4AF37"
                strokeWidth="3"
              />

              {/* User dot */}
              <circle cx={dotX} cy={dotY} r="20" fill="#FF0000" />
              <circle
                cx={dotX}
                cy={dotY}
                r="25"
                fill="none"
                stroke="#FF0000"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>

            {/* Labels */}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 280,
                color: "#D4AF37",
                fontSize: 20,
              }}
            >
              Liberal
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 240,
                color: "#D4AF37",
                fontSize: 20,
              }}
            >
              Authoritarian
            </div>
            <div
              style={{
                position: "absolute",
                top: 290,
                left: 10,
                color: "#D4AF37",
                fontSize: 20,
              }}
            >
              Left
            </div>
            <div
              style={{
                position: "absolute",
                top: 290,
                right: 10,
                color: "#D4AF37",
                fontSize: 20,
              }}
            >
              Right
            </div>
          </div>

          {/* Scores */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              display: "flex",
              gap: 40,
              color: "#FFFFFF",
              fontSize: 24,
            }}
          >
            <div style={{ display: "flex" }}>
              <span style={{ color: "#D4AF37" }}>Economic: </span>
              <span style={{ marginLeft: 10 }}>{x.toFixed(1)}</span>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ color: "#D4AF37" }}>Social: </span>
              <span style={{ marginLeft: 10 }}>{y.toFixed(1)}</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
