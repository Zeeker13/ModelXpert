// components/Auth.tsx
"use client"; // This component uses Client Components

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize router

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError(''); // Clear error on mode toggle
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  const handleSignUp = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.find((user: any) => user.email === email);

    if (userExists) {
      setError('User already exists with this email!');
      return;
    }

    const newUser = { email, username, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setError('Account created! You can now log in.');
    resetForm();
  };

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(
      (user: any) => user.email === email && user.password === password
    );

    if (user) {
      setError('Login successful!');
      localStorage.setItem('isLoggedIn', 'true'); // Store login status
      router.push('/home'); // Redirect to home page on successful login
    } else {
      setError('Invalid email or password!');
    }
  };

  const resetForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-md w-full">
      <h2 className="text-white text-3xl font-bold text-center mb-5">
        {isSignUp ? 'Sign Up' : 'Login'}
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="text-white block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        {isSignUp && (
          <div className="mb-5">
            <label className="text-white block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              placeholder="Enter a username"
              required
            />
          </div>
        )}
        <div className="mb-5">
          <label className="text-white block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          {isSignUp ? 'Create Account' : 'Login'}
        </button>
      </form>
      <div className="text-center mt-5">
        <p className="text-gray-300">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={toggleAuthMode}
            className="text-blue-500 font-bold ml-2"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
