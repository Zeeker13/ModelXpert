"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadUser } from "@/services/user"; // Ensure path is correct

const Body = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = loadUser();
    setIsLoggedIn(!!user); // Set login state based on user existence
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen text-white px-4" 
      style={{
        backgroundImage: 'url(/Untitled-1.png)', // Path to your background image
        backgroundSize: 'cover', // Ensure the image covers the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      <h1 className="text-4xl font-bold mb-5  bg-opacity-50 p-3 rounded">
        Welcome to Honda Model Predictor
      </h1>
      <p className="text-lg mb-10 bg-opacity-50 p-3 rounded">
        Upload a low-quality Honda car photo, and we'll identify the model for you!
      </p>

      {isLoggedIn ? (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          onClick={() => router.push("/auth/predict")}
        >
          Predict
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <p className="mb-4  bg-opacity-50 p-2 rounded">Please log in to use this feature.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
            onClick={() => router.push("/login")} // Redirect to login if not logged in
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
