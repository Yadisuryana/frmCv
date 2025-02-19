"use client"; // Tambahkan ini di paling atas

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk toggle menu

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">TradeHaven</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {["About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-gray-200 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button (☰) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden mt-4 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4">
          {["About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="block p-2 hover:bg-blue-700 rounded-lg transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
