import defaultMessages from "@/messages/pl.json";

export default function GlobalNotFound() {
  return (
    <html lang="pl">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          background: "#f6f8f9",
          color: "#1f2d33",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
          <p>{defaultMessages.ui.notFound}</p>
          <a
            href="/pl"
            style={{
              display: "inline-block",
              marginTop: "0.8rem",
              background: "#3a7a8d",
              color: "#fff",
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            {defaultMessages.ui.home}
          </a>
        </div>
      </body>
    </html>
  );
}
