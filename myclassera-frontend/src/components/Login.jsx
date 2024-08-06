import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("/api/login", { email, password })
      .then(() => alert("Login successful"))
      .catch((error) => console.error("Error logging in:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="mt-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <label className="block mt-4 mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
