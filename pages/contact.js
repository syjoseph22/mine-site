"use client";

import { useState } from "react";
import { submitEmailToGoogleSheets } from "@/utils/submitEmail";
import RootLayout from "@/app/layout";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitEmailToGoogleSheets(
      email,
      window.location.pathname
    );

    if (result.success) {
      setSubmitted(true);
    }
  };

  return (
    <RootLayout>
    <div className="max-w-6xl mx-auto px-6 py-16 text-[#0b1d2a]">

      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Left Side Text */}
        <div className="md:w-1/2 text-lg leading-relaxed">
          <p className="mb-4">
            We welcome inquiries from investors, partners, and anyone interested
            in staying informed about our mining projects and ongoing work.
          </p>
          <p>
            Leave your email with us and we’ll keep you updated with important
            announcements, project developments, and exclusive insights.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300" />

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-300 rounded-md px-4 py-2 text-[#0b1d2a] bg-white"
              />

              <button
                type="submit"
                className="bg-[#0b1d2a] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0b1d2a]/90 transition"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="p-4 bg-green-100 border border-green-300 rounded-md text-green-800">
              Thank you! Your email has been received.
            </div>
          )}
        </div>

      </div>
    </div>
    </RootLayout>
  );
}
