import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "4px"
      }}
      {...props}
    >
      {children}
    </button>
  );
}