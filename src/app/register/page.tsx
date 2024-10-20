"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveUser } from "@/services/user";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Basic form validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save user and navigate to login
    const user = {
      id: new Date().getTime().toString(),
      name,
      email,
      password, // Save the password as well
    };

    saveUser(user);

    // Redirect to login page
    router.push("/login");
  };

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white flex flex-col items-center justify-center h-screen text-white px-4" 
    style={{
      backgroundImage: 'url(/gg.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      
    }}
  
    
    >
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <div className="flex flex-col space-y-4 w-80">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="py-2 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
