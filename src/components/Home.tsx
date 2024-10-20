"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      router.push("/auth"); // Redirect to auth page if not logged in
    }
  }, [router]);

  const handleNavigateToBody = () => {
    router.push("/body"); // Navigate to body.tsx
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-4xl mb-5">Welcome to the Home Page</h1>

      <button
        onClick={handleNavigateToBody}
        className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
      >
        Predict
      </button>

      <button
        onClick={handleNavigateToBody}
        className="bg-blue-600 text-white p-3 mt-16 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>
    </div>
  );
};

export default Home;
