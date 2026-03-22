"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EmailSignup from "./EmailSignup";

export default function EmailSignupPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show once per session after a delay
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("newsletterPopupSeen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("newsletterPopupSeen", "true");
      }, 4000); // 4s delay
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Subtle background overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto rounded-xl"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Card */}
      <motion.div
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl pointer-events-auto relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-3 text-center">
          Join the Dragon Grill Club
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Get exclusive deals and tasty specials delivered straight to your inbox!
        </p>

        {/* Email Signup Form */}
        <EmailSignup />

        {/* Optional subtle logo */}
        <div className="absolute bottom-3 right-3 w-10 h-10 opacity-10">
          <img src="/dragon-grill-logo.png" alt="Logo" className="object-contain" />
        </div>
      </motion.div>
    </div>
  );
}
