export function Button({ children, ...props }) {
  return (
    <button style={{
      padding: "10px 20px",
      borderRadius: "8px",
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      cursor: "pointer"
    }} {...props}>
      {children}
    </button>
  );
}