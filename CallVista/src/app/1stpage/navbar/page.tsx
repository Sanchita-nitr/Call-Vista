'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const router = useRouter();
  const navigation = (route: string): void => {
    router.push(route);
  }

  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-[#fff8dc] shadow-md">
      <div className="text-[#b53900] text-2xl font-bold">
        Call Vista
      </div>
      <ul className="flex space-x-6">
        <button
          type="button"
          className="bg-[#b53900] p-2 px-5 rounded-3xl text-[#fff8dc] hover:text-white font-medium transition-colors duration-200"
          onClick={() => navigation('/auth/login')}
        >
          Login
        </button>
        <button
          type="button"
          className="bg-[#b53900] p-2 px-4 rounded-3xl text-[#fff8dc] hover:text-white font-medium transition-colors duration-200"
          onClick={() => navigation('/auth/signup')}
        >
          Signup
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
