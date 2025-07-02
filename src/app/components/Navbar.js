import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#0b1d2a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        {/* Site Name/Logo */}
        <div className="flex-none">
          <Link href="/" className="flex items-center">
            <h3 className="text-white text-2xl font-bold">
              Volcan Holdings
            </h3>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Nav Links */}
        <div className="space-x-6 font-medium">
          <Link href="/" className="text-white hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-white transition">
            About
          </Link>
          <Link href="/experts" className="text-white hover:text-white transition">
            Experts
          </Link>
          <Link href="/contact" className="text-white hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
