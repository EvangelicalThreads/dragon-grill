"use client";

import { useState } from "react";

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

      const data = await res.json().catch(() => ({
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
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto bg-gray-50 p-6 rounded-3xl shadow-2xl"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl shadow hover:bg-red-700 hover:scale-105 transition-all disabled:opacity-50"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Sign Up"}
      </button>
      <div className="w-full text-center mt-2 sm:mt-0">
        {status === "success" && <p className="text-green-500 font-semibold">Thanks for signing up!</p>}
        {status === "error" && <p className="text-red-500 font-semibold">{errorMessage}</p>}
      </div>
    </form>

    
  );
  
}
