import * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      {children}
    </div>
  );
}