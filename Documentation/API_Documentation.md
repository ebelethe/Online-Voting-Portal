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
POST /auth/forgot-password
POST /auth/reset-password/:token
PATCH /auth/change-password

# Election Endpoints
POST /election
GET /election
GET /election/:id
PATCH /election/:id
PATCH /election/open/:id
PATCH /election/close/:id
DELETE /election/:id

# Candidate Endpoints
POST /candidate
GET /candidate
GET /candidate/:id
PATCH /candidate/:id
DELETE /candidate/:id
POST /candidate/upload

# Political Party Endpoints
POST /party
GET /party
GET /party/:id
PATCH /party/:id
DELETE /party/:id

# Voting Endpoints
POST /vote
Authenticated voters can cast one vote in an open election.

# Election Results
GET /results/:electionId
Returns live election results.

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
Voter Card verification, cloud storage, SMS notifications, audit logs, frontend integration.
