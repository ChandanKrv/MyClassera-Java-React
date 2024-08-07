import axios from "axios";

// Base URL for API requests
const API_BASE_URL = "http://localhost:8080";

export const HARD_CODED_STUDENT_ID = 1;

// Utility function to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  //console.log("JwtToken:", token);
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export const printJwtToken = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (token) {
    console.log("Role:", role);
    console.log("JWT Token:", token);
  } else {
    console.log("No JWT Token found in localStorage.");
  }
};

// Authentication
export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const logoutUser = () => {
  // Clear the local storage token
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

// Subjects
export const fetchSubjects = async (page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/subject/all?page=${page - 1}&size=10`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

// Students
export const fetchStudents = async (page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/student/all?page=${page - 1}&size=10`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};
export const addSubject = async (subject) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/subject/add`,
    subject,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const updateSubject = async (subject) => {
  const response = await axios.put(
    `${API_BASE_URL}/api/subject/update`,
    subject,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const deleteSubject = async (id) => {
  const response = await axios.delete(
    `${API_BASE_URL}/api/subject/delete/${id}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const addStudent = async (student) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/student/add`,
    student,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

/*  export const updateStudent = async (student) => {
  const response = await axios.put(
    `${API_BASE_URL}/api/student/update`, student,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};  */

export const updateStudent = async (student) => {
  try {
    await axios.put(`${API_BASE_URL}/api/student/update`, student, {
      headers: getAuthHeaders(),
    });
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/student/delete/${id}`, {
      headers: getAuthHeaders(), // Add authorization headers
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};

// Enrollments
export const enrollStudentInSubjects = async (studentId, subjectIds) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/student/${studentId}/enroll`,
    subjectIds,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const unenrollStudentFromSubject = async (studentId, subjectId) => {
  const response = await axios.delete(
    `${API_BASE_URL}/api/student/${studentId}/unenroll/${subjectId}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const fetchSubjectsByStudentId = async (id) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/student/${id}/subjects`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const fetchStudentsBySubjectId = async (id) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/subject/${id}/students`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};
