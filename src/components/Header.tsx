"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteUser, clearAuthCookie, loadUser } from "@/services/user"; // Adjust path based on your project structure

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = loadUser(); // Check if user is logged in
    setIsLoggedIn(!!user); // Set login state
  }, []);

  const handleLogout = () => {
    deleteUser(); // Clear user data from localStorage
    clearAuthCookie(); // Clear user cookie
    setIsLoggedIn(false); // Update login state
    router.push("/login"); // Redirect to login page
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo / Title */}
        <button>
          <div className="text-2xl font-bold">MyApp</div>
        </button>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
