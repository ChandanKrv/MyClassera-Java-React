import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all students
export const getStudents = () => {
  return api.get("/student/all");
};

// Fetch a student by ID
export const getStudentById = (id) => {
  return api.get(`/student/${id}`);
};

// Fetch subjects by student ID
export const getSubjectsByStudentId = (id) => {
  return api.get(`/student/${id}/subjects`);
};

// Enroll a student in subjects
export const enrollStudentInSubjects = (studentId, subjectIds) => {
  return api.post(`/student/${studentId}/enroll`, subjectIds);
};

// Fetch all subjects
export const getSubjects = (page = 0, size = 12) => {
  return api.get(`/subject/all?page=${page}&size=${size}`);
};

// Fetch a subject by ID
export const getSubjectById = (id) => {
  return api.get(`/subject/${id}`);
};

// Fetch students by subject ID
export const getStudentsBySubjectId = (id) => {
  return api.get(`/subject/${id}/students`);
};

// Add a new student
export const addStudent = (student) => {
  return api.post("/student/add", student);
};

// Add a new subject
export const addSubject = (subject) => {
  return api.post("/subject/add", subject);
};

// Update a student
export const updateStudent = (student) => {
  return api.put("/student/update", student);
};

// Update a subject
export const updateSubject = (subject) => {
  return api.put("/subject/update", subject);
};

// Delete a student by ID
export const deleteStudentById = (id) => {
  return api.delete(`/student/delete/${id}`);
};

// Delete a subject by ID
export const deleteSubjectById = (id) => {
  return api.delete(`/subject/delete/${id}`);
};
