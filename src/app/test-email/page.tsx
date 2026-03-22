import EmailSignup from "@/app/components/EmailSignup";

export default function TestEmailPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "600" }}>Email Test Page</h1>
      <p style={{ color: "#666" }}>
        This page is only for testing Resend integration with your verified email.
      </p>
      <EmailSignup />
    </div>
  );
}
