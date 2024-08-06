// src/HomePage.jsx
import { useState, useEffect } from "react";

function HomePage() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/subject/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Subjects</h1>
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <div key={subject.id} className="card">
              <h2>{subject.name}</h2>
              <p>{subject.description}</p>
            </div>
          ))
        ) : (
          <p>No subjects available</p>
        )}
      </main>
    </div>
  );
}

export default HomePage;
