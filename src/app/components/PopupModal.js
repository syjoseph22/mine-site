"use client";

import { useEffect, useState } from "react";

export default function PopupModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Show popup only once per session after 45s
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popup-shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("popup-shown", "true");
    }, 45000); // 1 seconds

    return () => clearTimeout(timer);
  }, []);

  // Submit to Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbxSmeSr-VGMeEP-s1YNBeJX0PfFz3GXnODTMGbc31Z9n8y8hKsUOqZ7nSp3ed6litwT/exec", {
      method: "POST",
      body: JSON.stringify({
        email,
        sourcePage: window.location.pathname // Optional but useful
      }),
    });

    setSubmitted(true);

    // optional: Auto close after 2.5s
    setTimeout(() => setVisible(false), 2500);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-[#0b1d2a] max-w-md w-full rounded-lg shadow-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* If Submitted */}
        {submitted ? (
          <h2 className="text-xl font-semibold text-center py-4">
            You are now subscribed.
          </h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">Want to stay informed?</h2>
            <p className="mb-4 text-sm">
              Subscribe to receive updates about news and announcements.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="bg-[#0b1d2a] text-white rounded px-4 py-2 font-medium hover:bg-[#0b1d2a]/90"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
