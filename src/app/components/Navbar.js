// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Site name */}
        <Link href="/" className="text-[#0b1d2a] text-2xl font-bold">
          Volcan Holdings
        </Link>

        {/* Right: Nav links */}
        <div className="flex items-center space-x-6 text-[#0b1d2a] font-medium">
          <Link href="/" className="hover:text-[#0b1d2a]/80 transition">Home</Link>

          {/* //TODO The margin between the nav item and the dropdown should be bigger (but that breaks hover) */}

          {/* About dropdown */}
          <div className="relative group">
            <div className="cursor-pointer hover:text-[#0b1d2a]/80 transition">About Us▾</div>
            <div className="absolute left-0 mt-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md min-w-[180px] z-50">
              <Link href="/management" className="block px-4 py-2 hover:bg-gray-50">Management</Link>
            </div>
          </div>

          {/* Projects dropdown (two projects) */}
          <div className="relative group">
            <div className="cursor-pointer hover:text-[#0b1d2a]/80 transition">Projects ▾</div>
            <div className="absolute left-0 mt-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md min-w-[220px] z-50">
              <Link href="/guayzimi" className="block px-4 py-2 hover:bg-gray-50">Guayzimi Alto</Link>
              <Link href="/sabaleta" className="block px-4 py-2 hover:bg-gray-50">Sabaleta</Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#0b1d2a]/80 transition">Contact</Link>
          <Link href="/news" className="hover:text-[#0b1d2a]/80 transition">News</Link>
        </div>
      </div>
    </nav>
  );
}