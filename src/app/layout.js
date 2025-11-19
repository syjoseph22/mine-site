'use client';

import "./globals.css";
import Navbar from "./components/Navbar";
import PopupModal from "./components/PopupModal";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <PopupModal />
        <Footer />
      </body>
    </html>
  );
}
