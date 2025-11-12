'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // lightweight icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Site name */}
        <Link href="/" className="text-[#0b1d2a] text-2xl font-bold">
          Volcan Holdings
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-[#0b1d2a] font-medium">
          <Link href="/" className="hover:text-[#0b1d2a]/80 transition">
            Home
          </Link>

          {/* About dropdown */}
          <div className="relative group">
            <div className="cursor-pointer hover:text-[#0b1d2a]/80 transition">
              About Us ▾
            </div>
            <div className="absolute left-0 mt-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md min-w-[180px] z-50">
              <Link href="/management" className="block px-4 py-2 hover:bg-gray-50">
                Management
              </Link>
            </div>
          </div>

          {/* Projects dropdown */}
          <div className="relative group">
            <div className="cursor-pointer hover:text-[#0b1d2a]/80 transition">
              Projects ▾
            </div>
            <div className="absolute left-0 mt-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md min-w-[220px] z-50">
              <Link href="/guayzimi" className="block px-4 py-2 hover:bg-gray-50">
                Guayzimi Alto
              </Link>
              <Link href="/sabaleta" className="block px-4 py-2 hover:bg-gray-50">
                Sabaleta
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#0b1d2a]/80 transition">
            Contact
          </Link>
          <Link href="/news" className="hover:text-[#0b1d2a]/80 transition">
            News
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#0b1d2a] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md text-[#0b1d2a] font-medium">
          <Link href="/" className="block px-4 py-3 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* About Section */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between items-center"
            >
              About Us
              <span>{openDropdown === 'about' ? '▴' : '▾'}</span>
            </button>
            {openDropdown === 'about' && (
              <div className="pl-6 pb-2 text-sm">
                <Link href="/management" className="block py-1 hover:text-[#0b1d2a]/80" onClick={() => setMenuOpen(false)}>
                  Management
                </Link>
              </div>
            )}
          </div>

          {/* Projects Section */}
          <div>
            <button
              onClick={() => toggleDropdown('projects')}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between items-center"
            >
              Projects
              <span>{openDropdown === 'projects' ? '▴' : '▾'}</span>
            </button>
            {openDropdown === 'projects' && (
              <div className="pl-6 pb-2 text-sm">
                <Link href="/guayzimi" className="block py-1 hover:text-[#0b1d2a]/80" onClick={() => setMenuOpen(false)}>
                  Guayzimi Alto
                </Link>
                <Link href="/sabaleta" className="block py-1 hover:text-[#0b1d2a]/80" onClick={() => setMenuOpen(false)}>
                  Sabaleta
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="block px-4 py-3 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/news" className="block px-4 py-3 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            News
          </Link>
        </div>
      )}
    </nav>
  );
}
