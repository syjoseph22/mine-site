'use client';

import { useEffect, useState } from 'react';

export default function PopupModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popup-shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem('popup-shown', 'true');
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-[#0b1d2a] max-w-md w-full rounded-lg shadow-xl p-6 relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-2">Want to stay informed?</h2>
        <p className="mb-4 text-sm">
          Subscribe to get updates about our gold investment project and more.
        </p>
        <form className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="bg-[#0b1d2a] text-white rounded px-4 py-2 font-medium hover:bg-[#0b1d2a]/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
