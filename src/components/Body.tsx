"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadUser } from "@/services/user";

const Body = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = loadUser();
    setIsLoggedIn(!!user);
  }, []); // Remove `router` from the dependency array

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to Honda Model Predictor
      </h1>
      <p className="text-lg mb-10">
        Upload a low-quality Honda car photo, and we'll identify the model for
        you!
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
          <p className="mb-4">Please log in to use this feature.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
