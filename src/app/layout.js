import "./globals.css";
import Navbar from "./components/Navbar";
import PopupModal from "./components/PopupModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <PopupModal />
      </body>
    </html>
  );
}
