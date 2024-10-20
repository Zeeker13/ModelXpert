"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteUser } from "../services/user"; // Ensure your path is correct

const Home = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loggedInStatus); // Set login state based on localStorage
    setIsLoading(false); // UI should be displayed only after loading is complete
  }, []);

  const handleNavigateToBody = () => {
    router.push("/body");
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
    deleteUser(); // Clear user data
    setIsLoggedIn(false); // Update state to reflect logout
    router.push("/"); // Navigate to home after logout
  };

  if (isLoading) {
    return <div>Loading...</div>; // Loading state while checking login
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-4xl mb-5">Welcome to the Home Page</h1>

      <button
        onClick={handleNavigateToBody}
        className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
      >
        Predict
      </button>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-3 mt-16 rounded-lg font-bold hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white p-3 mt-16 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
