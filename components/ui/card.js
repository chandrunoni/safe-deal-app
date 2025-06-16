export function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
    }}>
      {children}
    </div>
  );
}