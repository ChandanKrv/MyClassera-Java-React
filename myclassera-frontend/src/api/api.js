import axios from "axios";

// Base URL for API requests
const API_BASE_URL = "http://localhost:8080";

// Utility function to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// Authentication
export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
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

// Students
export const fetchStudents = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/student/all`, {
    headers: getAuthHeaders(),
  });
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

export const updateStudent = async (student) => {
  const response = await axios.put(
    `${API_BASE_URL}/api/student/update`,
    student,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(
    `${API_BASE_URL}/api/student/delete/${id}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
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
