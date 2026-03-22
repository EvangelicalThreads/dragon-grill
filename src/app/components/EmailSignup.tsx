"use client";

import { useState } from "react";

type SignupResponse = {
  success: boolean;
  message?: string;
};

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: SignupResponse = await res.json().catch(() => ({
        success: false,
        message: "Invalid JSON",
      }));

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 rounded-3xl bg-gray-50 p-6 shadow-2xl sm:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-xl border border-gray-300 p-3 transition focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <button
        type="submit"
        className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white shadow transition-all hover:scale-105 hover:bg-red-700 disabled:opacity-50"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Sign Up"}
      </button>
      <div className="mt-2 w-full text-center sm:mt-0">
        {status === "success" && (
          <p className="font-semibold text-green-500">Thanks for signing up!</p>
        )}
        {status === "error" && (
          <p className="font-semibold text-red-500">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}