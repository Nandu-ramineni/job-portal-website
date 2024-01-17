import React, { useState } from 'react';
import { auth } from '../../firebase';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      await auth.signInWithEmailAndPassword(email, password);

      // Trigger the parent component that login was successful
      onLoginSuccess();
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-50 py-4 px-4 mb-4 rounded-lg">
      <h2 className="text-2xl pt-1 font-semibold text-green-500 mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full mx-auto block"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
