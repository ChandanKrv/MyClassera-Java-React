# MyClassera Project

## Overview

MyClassera is a comprehensive online subject/course management system. This project consists of two main parts:
1. **Frontend**: Built with React and Vite.
2. **Backend**: Implemented using Spring Boot.

### Features

- Students and admins can log in with JWT-based authentication.
- Students can enroll in multiple subjects.
- Admins can add new subjects and view students' enrollment.
- In-memory H2 database is used for ease of development and testing.

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- H2 Database
- JWT Authentication

## Project Structure

```plaintext
MyClassera/
├── myclassera-frontend/
│   ├── src/
│   ├── public/
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── MyClassera-Backend/
    ├── src/
    ├── .gitignore
    ├── pom.xml
    └── README.md
