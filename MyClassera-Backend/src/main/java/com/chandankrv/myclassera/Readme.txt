=================================================
JWT Token Generation
POST : http://localhost:8080/auth/login
Body:
{
    "email":"admin",
    "password":"pass"
}

or

{
    "email":"user",
    "password":"pass"
}


====================================================
Get All Students details using JWT Token
GET: http://localhost:8080/api/student/all

Header:
Key: Authorization
Value: Bearer JWT_Token

====================================================
