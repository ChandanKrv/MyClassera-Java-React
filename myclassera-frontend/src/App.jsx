/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import SubjectList from "./components/SubjectList";
import SubjectDetail from "./components/SubjectDetail";
import EnrollStudent from "./components/EnrollStudent";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/subjects" element={<SubjectList />} />
          <Route path="/subjects/:id" element={<SubjectDetail />} />
          <Route path="/enroll" element={<EnrollStudent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 */

import StudentTable from "./components/StudentTable";
import "./App.css"; // Ensure this imports Tailwind CSS

function App() {
  return (
    <div className="App">
      <StudentTable />
    </div>
  );
}

export default App;
