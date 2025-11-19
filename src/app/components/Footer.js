'use client';

import { useState } from 'react';
import { submitEmailToGoogleSheets } from '@/utils/submitEmail';

export default function Footer() {
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
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0b1d2a] text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Volcan Holdings</h2>
          <p className="text-sm text-gray-300 mt-2 max-w-sm">
            Advancing responsible mineral development across Ecuador.
          </p>
        </div>

        {/* Right Section 
        <div className="w-full md:w-auto">

          {!submitted ? (
            <>
              <p className="font-semibold mb-2">Stay Updated</p>

              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l-md w-full md:w-64 
                             text-[#0b1d2a] bg-white border border-gray-300 
                             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                  type="submit"
                  className="bg-white text-[#0b1d2a] px-4 py-2 rounded-r-md font-semibold 
                             border border-gray-300 border-l-0 
                             hover:bg-gray-100 transition"
                >
                  Subscribe
                </button>
              </form>
            </>
          ) : (
            <div className="text-green-300 bg-white/10 border border-white/20 px-4 py-3 rounded-lg">
              <p className="font-semibold">Thank you!</p>
              <p className="text-sm text-gray-300">You are now subscribed to updates.</p>
            </div>
          )}
        </div>
      */} 
      </div>
         
      {/* Bottom Tiny Bar */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Volcan Holdings. All rights reserved.
      </div>
    </footer>
  );
}
