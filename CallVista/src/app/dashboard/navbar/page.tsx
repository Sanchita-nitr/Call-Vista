"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#fff8dc] shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand Name */}
      <div className="text-2xl font-bold text-[#b53900] tracking-tight">
        Call Vista
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 font-medium text-[#b53900]">
        <li>
          <Link href="/dashboard/hero" className="hover:text-[#5e220c] transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-[#5e220c] transition">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-[#5e220c] transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon (Optional: for responsive menu) */}
      <div className="md:hidden">
        <button className="text-gray-600 focus:outline-none">
          {/* You can add hamburger icon (e.g. from react-icons or lucide-react) */}
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
