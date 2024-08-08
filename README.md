# MyClassera

MyClassera is a web-based application that allows students to enroll in multiple subjects and admins to manage subjects and view student enrollment. The backend is built with Spring Boot, and the frontend is developed using React with Vite and Tailwind CSS. The application uses JWT-based authentication for secure access.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints and Access Control](#endpoints-and-access-control)
- [Contributing](#contributing)
- [License](#license)

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

## Installation

- **Prerequisites:**
- JDK 19+
- Node.js and npm
- Maven
- VS Code editor / Intellij Idea

- **Backend Setup:**
- Clone or Download this repository:
```https://github.com/ChandanKrv/MyClassera-Java-React.git```
