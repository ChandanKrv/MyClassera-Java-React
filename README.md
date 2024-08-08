# MyClassera

MyClassera is a web-based application that allows students to enroll in multiple subjects and admins to manage subjects and view student enrollment. The backend is built with Spring Boot, and the frontend is developed using React with Vite and Tailwind CSS. The application uses JWT-based authentication for secure access.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API - Endpoints and Access Control](#endpoints-and-access-control)

## Features

- **JWT Authentication:** Secure login for students and admins.
- **Student Management:** View, add, update, and delete students.
- **Subject Management:** View, add, update, and delete subjects.
- **Student Enrollment:** Students can enroll in multiple subjects.
- **Admin Dashboard:** Admins can view the list of enrolled students and manage subjects.

## Technology Stack

- **Backend:**
  - Java 21 LTS
  - Spring Boot
  - Spring Security
  - Spring Data JPA
  - H2 Database (In-memory)
  - JWT for authentication
- **Frontend:**
  - React 18.3.1
  - Vite 5.3.4
  - Tailwind CSS 3.4.7
  - Axios for HTTP requests
- **Tools & Libraries:**
  - Lombok
  - Maven
  - React Icons

## Installation

- **Prerequisites:**
  - JDK 19+   ```java --version```
  - Node.js and npm   ```npm --version```
  - Maven     ```mvn --version```

- **Backend Setup:**
  - Clone or Download this project from this repository:
  ```https://github.com/ChandanKrv/MyClassera-Java-React.git```
  - Navigate to MyClassera-Backend directory and open cmd
  - Build the project: ```mvn clean install```
  - Run the Spring Boot application: ```mvn spring-boot:run```
  - The backend will start at http://localhost:8080
    ```Access Denied !! Full authentication is required to access this resource```
    - JwtToken is required for access,so we need to setup frontend or use Postman to generate the token.

- **Frontend Setup:**
  - Navigate to myclassera-frontend directory and open cmd
  - Install dependencies: ```npm install```
  - Run the React/Vite application: ```npm run dev```
  - The frontend will start at http://localhost:5173
  - Navigate to this URL, Use these Login Credentials
    - | Username | Password |
      |----------|----------|
      | admin    | pass     |
      | user     | pass     |  

## Project Structure

### Backend (Spring Boot)

```plaintext
src
├── main
│   ├── java
│   │   └── com.chandankrv.myclassera
│   │       ├── config
│   │       ├── controller
│   │       ├── exception
│   │       ├── model
│   │       ├── repository
│   │       ├── service
│   │       └── MyClasseraApplication.java
│   └── resources
│       ├── application.properties
│       └── data.sql
└── test
    └── java
        └── com.chandankrv.myclassera
```

### Frontend (React + Vite)
```plaintext
src
├── api
│   └── api.js
├── components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── StudentsTable.jsx
│   ├── SubjectsTable.jsx
│   ├── EnrollInSubjects.jsx
│   ├── ViewStudents.jsx
│   ├── SubjectModal.jsx
│   └── Pagination.jsx
├── pages
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── AdminPage.jsx
│   └── NotFoundPage.jsx
└── App.jsx
```

# Endpoints and Access Control (API)

### JWT Token Generation

- **URL:** `http://localhost:8080/auth/login`
- **Method:** POST
- **Roles:** PUBLIC

### Get All Students

- **URL:** `http://localhost:8080/api/student/all`
- **Method:** GET
- **Roles:** ADMIN, USER

### Get Enrolled Subjects for a Student

- **URL:** `http://localhost:8080/api/student/{id}/subjects`
- **Method:** GET
- **Roles:** ADMIN, USER

### Add a Subject

- **URL:** `http://localhost:8080/api/subject/add`
- **Method:** POST
- **Roles:** ADMIN

---

## JWT Token Generation

- **POST:** `http://localhost:8080/auth/login`
- **Body:**
    ```json
    {
        "email": "admin",
        "password": "pass"
    }
    ```
    or
    ```json
    {
        "email": "user",
        "password": "pass"
    }
    ```

---

## Get All Students Details Using JWT Token

- **GET:** `http://localhost:8080/api/student/all`
- **Header:**
    - **Key:** Authorization
    - **Value:** Bearer JWT_Token

---

## Student Controller

### Endpoints for Students

1. **Get All Students**
   - **GET:** `http://localhost:8080/api/student/all`

2. **Get a Student by ID**
   - **GET:** `http://localhost:8080/api/student/{id}`
   - **Example:** `http://localhost:8080/api/student/1`

3. **Add a Student**
   - **POST:** `http://localhost:8080/api/student/add`
   - **Body:**
     ```json
     {
         "name": "Rahul",
         "email": "Rahul@gmail.com",
         "address": "Delhi"
     }
     ```

4. **Add Multiple Students**
   - **POST:** `http://localhost:8080/api/student/addMultiple`
   - **Body:**
     ```json
     [
         {
             "name": "Chandan",
             "email": "chandan@gmail.com",
             "address": "Kolkata"
         },
         {
             "name": "Ravi",
             "email": "ravi@gmail.com",
             "address": "Delhi"
         }
     ]
     ```

5. **Update a Student**
   - **PUT:** `http://localhost:8080/api/student/update`
   - **Body:**
     ```json
     {
         "id": 2,
         "name": "Chandan",
         "email": "chandan@gmail.com",
         "address": "Kolkata, India"
     }
     ```

6. **Delete a Student**
   - **DELETE:** `http://localhost:8080/api/student/delete/{id}`
   - **Example:** `http://localhost:8080/api/student/delete/7` (7 is the Student ID)

7. **Get Subjects by Student ID**
   - **GET:** `http://localhost:8080/api/student/{id}/subjects`
   - **Example:** `http://localhost:8080/api/student/1/subjects`

8. **Enroll Student in Subjects**
   - **POST:** `http://localhost:8080/api/student/{studentId}/enroll`
   - **Body:** [1, 2, 3]

---

# Subject Controller

## Endpoints for Subjects

1. **Get All Subjects**
   - **GET:** `http://localhost:8080/api/subject/all`

2. **Get a Subject by ID**
   - **GET:** `http://localhost:8080/api/subject/{id}`
   - **Example:** `http://localhost:8080/api/subject/1`

3. **Add a Subject**
   - **POST:** `http://localhost:8080/api/subject/add`
   - **Body:**
     ```json
     {
         "name": "Mathematics",
         "description": "Basic Mathematics course"
     }
     ```

4. **Add Multiple Subjects**
   - **POST:** `http://localhost:8080/api/subject/addMultiple`
   - **Body:**
     ```json
     [
         {
             "name": "Physics",
             "description": "Basic Physics course"
         },
         {
             "name": "Chemistry",
             "description": "Basic Chemistry course"
         }
     ]
     ```

5. **Update a Subject**
   - **PUT:** `http://localhost:8080/api/subject/update`
   - **Body:**
     ```json
     {
         "id": 2,
         "name": "Advanced Mathematics",
         "description": "Advanced Mathematics course"
     }
     ```

6. **Delete a Subject**
   - **DELETE:** `http://localhost:8080/api/subject/delete/{id}`
   - **Example:** `http://localhost:8080/api/subject/delete/1` (1 is the Subject ID)

7. **Get Students by Subject ID**
   - **GET:** `http://localhost:8080/api/subject/{id}/students`
   - **Example:** `http://localhost:8080/api/subject/1/students`
