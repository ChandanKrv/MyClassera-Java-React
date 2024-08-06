import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import SubjectList from "./components/SubjectList";
import SubjectDetail from "./components/SubjectDetail";
import EnrollStudent from "./components/EnrollStudent";
import Login from "./components/Login";
import StudentTable from "./components/StudentTable";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
