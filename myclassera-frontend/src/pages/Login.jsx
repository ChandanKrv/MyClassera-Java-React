import { useState, useEffect } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      // Redirect based on the stored role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "user") {
        navigate("/student-dashboard");
      }
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await login(email, password);
      const { jwtToken, username } = response; // Adjust according to actual response structure

      // Store the JWT token and role in localStorage
      localStorage.setItem("token", jwtToken);

      // Determine the role and store it
      let role;
      if (username === "admin") {
        role = "admin";
      } else if (username === "user") {
        role = "user";
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
        return;
      }

      localStorage.setItem("role", role);
      // Navigate to the appropriate dashboard
      navigate(role === "admin" ? "/admin-dashboard" : "/student-dashboard");
    } catch (error) {
      setErrorMessage("Login failed. Try again later");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <div className="flex flex-col items-center space-y-8">
        {/* Login Card */}
        <div className="bg-white p-12 shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <input
            type="text"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* Notice Card */}
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <p className="text-gray-700">
            <h3 className="text-m  text-gray-700 font-semibold mb-4">
              Login credentials
            </h3>
            <table class="min-w-max text-center bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2 border-b border-gray-300">Username</th>
                  <th class="px-4 py-2 border-b border-gray-300">Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border-b border-gray-300">admin</td>
                  <td class="px-4 py-2 border-b border-gray-300">pass</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-b border-gray-300">user</td>
                  <td class="px-4 py-2 border-b border-gray-300">pass</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
