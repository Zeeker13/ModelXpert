"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadUser } from "@/services/user";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Load user from local storage
    const user = loadUser();

    // Basic validation to check if the user exists and credentials match
    if (user && user.email === email && user.password === password) {
      // Navigate to the protected route
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <div className="flex flex-col space-y-4 w-80">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Log In
        </button>
        {/* Add a button to go to the register page */}
        <button
          onClick={() => router.push("/register")}
          className="text-blue-400 hover:underline mt-4"
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
