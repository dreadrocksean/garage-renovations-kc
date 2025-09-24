import React from "react";

import "@/styles/construction.css";

const Construction: React.FC = () => (
  <div className="root">
    <div style={{ fontSize: 80, marginBottom: 24 }}>🚧</div>
    <h1
      style={{
        fontSize: 36,
        color: "#1e293b",
        marginBottom: 12,
        letterSpacing: 1,
      }}
    >
      Under Construction
    </h1>
    <p
      style={{
        fontSize: 20,
        color: "#64748b",
        maxWidth: 400,
        textAlign: "center",
      }}
    >
      At Garage Renovations KC, we're about to bring you something amazing.
      <br />
      Please check back soon!
    </p>
    <div
      style={{
        marginTop: 40,
        width: 80,
        height: 8,
        borderRadius: 4,
        background: "#cbd5e1",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 40,
          height: 8,
          background: "#fbbf24",
          borderRadius: 4,
          animation: "progressBar 1.2s infinite alternate",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
      <style>
        {`
                    @keyframes progressBar {
                        0% { left: 0; }
                        100% { left: 40px; }
                    }
                `}
      </style>
    </div>
  </div>
);

export default Construction;
