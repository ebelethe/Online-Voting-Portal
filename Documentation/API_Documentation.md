# Online Voting Portal Backend API Documentation

Introduction

The Online Voting Portal Backend API provides RESTful endpoints for authentication, election management, candidate management, political party management, voting, election results, and email notifications. Protected endpoints require JWT authentication.

# Base URL
Development: http://localhost:5000/api
Production: https://online-voting-portal-p9fd.onrender.com/api

# Authentication
Use 'Authorization: Bearer <JWT_TOKEN>' for protected endpoints.

# Authentication Endpoints
POST /auth/register
POST /auth/login
POST /auth/reset-password/request
POST /auth/reset-password
PUT /auth/change-password

# Admin Endpoints
GET/admin/dashboard

# Election Endpoints
POST /election
GET /election
GET /election/:id
PATCH /election/:id
PATCH /election/open/:id
PATCH /election/close/:id
DELETE /election/:id
POST /election/:electionId/vote
GET /election/:electionId/results
Returns live election results.

# Candidate Endpoints
POST/candidate
PUT/candidate/:id
DELETE/candidate/:id
GET/candidate 
GET/candidate/:id

# Party Endpoints
POST /party
GET /party
GET /party/:id
PUT /party/:id
DELETE /party/:id

# Voter Endpoints
GET/voter
GET/voter/:id
PUT/voter/:id
DELETE/voter/:id

# Vote Endpoints
POST /vote
GET/vote/my-vote
GET/vote/statistics
Authenticated voters can cast one vote in an open election.
voters can see thier own vote history
Admin dashboard for voting statistics where admin click vote ended and the winner automatically displayed the winner

# Verification Endpoint
POST/verification/voter-id
POST/verifacaition/face

# Email Notifications
Automatic emails are sent for registration, password reset, election creation, voting commencement, and election closure.

# Security
JWT Authentication
Role-Based Authorization
Password Hashing (bcrypt)
Helmet
Express Rate Limiting
CORS

# HTTP Status Codes
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

# Standard Response Format
Success:
{
 "success": true,
 "message":"Operation completed successfully.",
 "data":{}
}

Error:
{
 "success": false,
 "message":"An error occurred."
}

# Testing
All endpoints were verified using Postman during development.Due to project time constraints, no postman 
collection was created and added.

# Future Improvements
 
Future improvements planned for the project include:

 1. Real Voter Card verification.

 2. Cloud storage for uploaded files.

 3. SMS notifications.

 4. Audit logging.

 5. Frontend integration.

 6.  Performance improvements.

