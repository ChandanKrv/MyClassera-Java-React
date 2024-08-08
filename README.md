
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
 


**Installation and Running the Project**
### Prerequisites
- Node.js (v14+)
- Java JDK (v19+)
- Maven
### Cloning the Repository
1. Clone the repository:
### Cloning the Repository
1. Clone the repository:

   bash

   Copy code

   git clone https://github.com/your-username/MyClassera.git

1. Navigate into the project directory:

   bash

   Copy code

   cd MyClassera
### Frontend Setup
1. Navigate to the myclassera-frontend directory:

   bash

   Copy code

   cd myclassera-frontend

1. Install the dependencies:

   bash

   Copy code

   npm install

1. Start the development server:

   bash

   Copy code

   npm run dev

   The frontend should now be running at http://localhost:3000.
### Backend Setup
1. Navigate to the MyClassera-Backend directory:

   bash

   Copy code

   cd ../MyClassera-Backend

1. Install the dependencies and build the project:

   bash

   Copy code

   mvn clean install

1. Run the Spring Boot application:

   bash

   Copy code

   mvn spring-boot:run

   The backend should now be running at <http://localhost:8080>.
## **API Endpoints**
### Authentication
- **Login**

  http

  Copy code

  POST /auth/login

  **Request Body:**

  json

  Copy code

  {

  `    `"email": "user@example.com",

  `    `"password": "password"

  }

  **Response:**

  json

  Copy code

  {

  `    `"token": "JWT token"

  }
### Student API
- **Get All Students**

  http

  Copy code

  GET /api/student/all

- **Get Student by ID**

  http

  Copy code

  GET /api/student/{id}

- **Add Student**

  http

  Copy code

  POST /api/student/add

  **Request Body:**

  json

  Copy code

  {

  `    `"name": "John Doe",

  `    `"address": "123 Main St"

  }

- **Update Student**

  http

  Copy code

  PUT /api/student/update

  **Request Body:**

  json

  Copy code

  {

  `    `"id": 1,

  `    `"name": "John Doe",

  `    `"address": "456 Elm St"

  }

- **Delete Student**

  http

  Copy code

  DELETE /api/student/delete/{id}

- **Enroll Student in Subjects**

  http

  Copy code

  POST /api/student/{studentId}/enroll

  **Request Body:**

  json

  Copy code

  {

  `    `"subjectIds": [1, 2, 3]

  }

- **Unenroll Student from Subject**

  http

  Copy code

  DELETE /api/student/{studentId}/unenroll/{subjectId}

- **Get Subjects by Student ID**

  http

  Copy code

  GET /api/student/{id}/subjects
### Subject API
- **Get All Subjects**

  http

  Copy code

  GET /api/subject/all

- **Get Subject by ID**

  http

  Copy code

  GET /api/subject/{id}

- **Add Subject**

  http

  Copy code

  POST /api/subject/add

  **Request Body:**

  json

  Copy code

  {

  `    `"name": "Math"

  }

- **Update Subject**

  http

  Copy code

  PUT /api/subject/update

  **Request Body:**

  json

  Copy code

  {

  `    `"id": 1,

  `    `"name": "Advanced Math"

  }

- **Delete Subject**

  http

  Copy code

  DELETE /api/subject/delete/{id}

- **Get Students by Subject ID**

  http

  Copy code

  GET /api/subject/{id}/students
## **Using Postman to Test APIs**
1. **Login to Obtain JWT Token**
   1. Endpoint: POST /auth/login
   1. Body:

      json

      Copy code

      {

      `    `"email": "user@example.com",

      `    `"password": "password"

      }

   1. Save the token from the response.
1. **Set JWT Token in Headers**
   1. For all subsequent requests, add the JWT token to the Authorization header:

      css

      Copy code

      Authorization: Bearer {token}

1. **Test Various Endpoints**
   1. Use the endpoints listed in the API Endpoints section to test the functionality of the backend.
## **Frontend Details**
- The frontend includes pages for student and admin roles, allowing for subject enrollment and management.
- The React application interacts with the backend APIs for data operations.
- Tailwind CSS is used for styling.
- Axios is used for making HTTP requests.
## **Notes**
- The frontend is optional but included for a more complete solution.
- If any part of the project is not functioning, refer to the error messages for debugging and ensure all prerequisites are met.


