# MyClassera

MyClassera is a web-based application that allows students to enroll in multiple subjects and admins to manage subjects and view student enrollment. The backend is built with Spring Boot, and the frontend is developed using React with Vite and Tailwind CSS. The application uses JWT-based authentication for secure access.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [API - Endpoints and Access Control](#API-endpoints-and-access-control)

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

  - JDK 19+ `java --version`
  - Node.js and npm `npm --version`
  - Maven `mvn --version`

- **Backend Setup:**

  - Clone or Download this project from this repository:
    `https://github.com/ChandanKrv/MyClassera-Java-React.git`
  - Navigate to MyClassera-Backend directory and open cmd
  - Build the project: `mvn clean install`
  - Run the Spring Boot application: `mvn spring-boot:run`
  - The backend will start at http://localhost:8080
    `Access Denied !! Full authentication is required to access this resource`
    - JwtToken is required for access,so we need to setup frontend or use Postman to generate the token.

- **Frontend Setup:**
  - Navigate to myclassera-frontend directory and open cmd
  - Install dependencies: `npm install`
  - Run the React/Vite application: `npm run dev`
  - The frontend will start at http://localhost:5173
  - Navigate to this URL, Use these Login Credentials
    - | Username | Password |
      | -------- | -------- |
      | admin    | pass     |
      | user     | pass     |

## Screenshots
[Login Screenshot](Screenshots/login.png)



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

# API Endpoints and Access Control

## JWT Token Generation using Postman

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
  - **Value:** Bearer `JWT_Token`

**Note:** JwtToken is always required for all APIs, As shown above replace `JWT_Token` with generated actual JwtToken.

---

For detailed information on all API endpoints, please refer to the [ENDPOINTS.md](ENDPOINTS.md) file.

## Thank You

© 2024 All rights reserved. Developed with ❤️ by Chandan Kumar.
