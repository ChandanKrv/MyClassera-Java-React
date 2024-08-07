import { useState } from "react";
import { login } from "../api/api"; // Ensure this imports correctly
import { useNavigate } from "react-router-dom"; // For navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const navigate = useNavigate(); // For programmatic navigation

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await login(email, password);
      const { jwtToken, username } = response; // Adjust according to actual response structure

      // Store the JWT token in localStorage
      localStorage.setItem("token", jwtToken);

      // Determine the role and navigate accordingly
      if (username === "admin") {
        navigate("/admin-dashboard"); // Redirect to AdminDashboard
      } else if (username === "student") {
        navigate("/student-dashboard"); // Redirect to StudentDashboard
      } else {
        setErrorMessage("Invalid role.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
