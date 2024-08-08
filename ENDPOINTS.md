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
  - **Value:** Bearer JWT_Token

---

    ### Note - JwtToken is always required for all APIs, As shown above replace `JWT_Token` with generated JwtToken.

### Get Enrolled Subjects for a Student

- **URL:** `http://localhost:8080/api/student/{id}/subjects`
- **Method:** GET
- **Roles:** ADMIN, USER
- **Header:**
  - **Key:** Authorization
  - **Value:** Bearer JWT_Token

### Add a Subject

- **URL:** `http://localhost:8080/api/subject/add`
- **Method:** POST
- **Roles:** ADMIN
- **Header:**
  - **Key:** Authorization
  - **Value:** Bearer JWT_Token

---


## Student Controller

### Endpoints for Students

1. **Get All Students**

   - **GET:** `http://localhost:8080/api/student/all`
                - **Header:**
                - **Key:** Authorization
                - **Value:** Bearer JWT_Token

2. **Get a Student by ID**

   - **GET:** `http://localhost:8080/api/student/{id}`
   - **Example:** `http://localhost:8080/api/student/1`
                - **Header:**
                - **Key:** Authorization
                - **Value:** Bearer JWT_Token

3. **Add a Student**

   - **POST:** `http://localhost:8080/api/student/add`
                - **Header:**
                - **Key:** Authorization
                - **Value:** Bearer JWT_Token
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

## Thank You

© 2024 All rights reserved. Developed with ❤️ by Chandan Kumar.
