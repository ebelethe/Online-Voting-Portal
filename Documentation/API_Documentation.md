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
POST /election ##Only admin 
GET /election ##Voter and admin can view all elections details
GET /election/:id ##voter and admin can view a particular election details
PATCH /election/:id ##only admin
PATCH /election/open/:id #only admin
PATCH /election/close/:id #only admin
DELETE /election/:id ##only admin
POST /election/:electionId/vote ##Only voter can cast a vote
GET /election/:electionId/results ##both voter and admin can view the live results of a particular
election.

# Candidate Endpoints
POST/candidate #only admin
PUT/candidate/:id #only admin
DELETE/candidate/:id #Only admin
GET/candidate ## voter and admim can see all candidetes with thier registered party details and election details.
GET/candidate/:id ##voter and admin can see only specfic candidate with thier registered party details and election details.

# Party Endpoints
POST /party #admin only
GET /party #voter and admin can see all registered parties
GET /party/:id #voter and admin can see specific party only
PUT /party/:id #admin only
DELETE /party/:id #admin only

# Voter Endpoints
GET/voter ##admin dashboard
GET/voter/:id 
PUT/voter/:id ##admin dashboard
DELETE/voter/:id ##admin dashboard

# Vote Endpoints
GET/vote/my-vote  ##Only voters can see thier own vote history
GET/vote/statistics ##admin dashboard for voting statistics where admin click vote ended and the winner automatically displayed the winner

Admin dashboard for voting statistics where admin click vote ended and the winner automatically displayed the winner

# Verification Endpoint
POST/verification/voter-id ##voter dashboard
POST/verifacaition/face #voter dashboard

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

