
# Project Overview

The Online Voting Portal Backend is a RESTful API built with Node.js, Express.js, and MongoDB to provide a secure and reliable online voting system. The platform allows eligible voters to create an account, verify their identity, and vote conveniently from anywhere without visiting a physical polling station. It also enables administrators to manage elections, candidates, political parties, and voters while maintaining election integrity through secure authentication, authorization, and automated email notifications for key election activities.

# Install Dependencies
npm install
keywords,author,license,dependencies,bcrypt,cloudinary,cors,dotenv,express,
express-rate-limit,helmet,jsonwebtoken,mongoose,multer,multer-storage-cloudinary,nodemailer,nodemon.


# Configure Environment Variables

Create a .env file in the project root directory and add the following variables:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email

EMAIL_PASS=your_email_password


# Features
1. Authentication

The authentication module provides secure access to the application through:

User registration

User login

JWT authentication

Password hashing using bcrypt

Forgot password

Password reset

Change password

2. Election Management

The election module allows administrators to manage elections through the following operations:

Create election

Update election

Open election

Close election

Delete election

View all elections

View a single election

3. Candidate Management

The candidate module provides functionality to:

Register candidates

Update candidate information

Delete candidates

Upload candidate images

4. Political Party Management

The political party module supports:

Create political party

Update party information

Delete party

View parties

5. Voting

The voting module provides secure election participation by supporting:

Secure vote casting

Prevention of multiple voting

Election status validation before voting

Live election result retrieval

6. Email Notification System

The application automatically sends email notifications for the following events:

Welcome email after successful registration

Password reset email

Election created notification

Voting started notification

Election closed notification

7. Security

Security measures implemented in the application include:

JWT Authentication

Role-Based Authorization

Password encryption using bcrypt

Express Rate Limiting

Helmet security middleware

CORS configuration

Environment variable management


# Project Structure

Online-Voting-Portal/
├── documenatation/
│   ├── API_Documentation.md
│   ├── Architecture_Plan.md
│   └── Developer_Guide.md
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── modules/
│   ├── routes/
│   ├── templates/
│   ├── upload/
│   ├── utils/
│   └── app.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── LICENSE


# Application Architecture

How requests flow through the application:

Client
    │
    ▼
Routes
    │
    ▼
Controllers
    │
    ▼
Modules / Services
    │
    ▼
Models
    │
    ▼
MongoDB


# Folder Structure

Explain the purpose of every folder.

Example:

config/


controllers/

Contains request handlers.

Authentication

Election

Candidate

Party

Vote

Voter

Admin

Email


middleware/

Contains middleware responsible for:

Authentication

Authorization

Rate limiting

Validation

Error handling


models/

Database schemas.


modules/

Business logic separated from controllers.

Examples:

Authentication

Candidate

Email

Party

Vote


routes/

API endpoint definitions.


templates/

Reusable HTML email templates.

upload/

Stores uploaded candidate images.

utils/

Shared helper functions.



# Authentication Flow

Explain

Register

↓

Hash Password

↓

Save User

↓

Send Welcome Email

↓

Login

↓

Generate JWT

↓

Access Protected Routes



# Election Workflow

Admin

↓

Create Election

↓

Notify Voters

↓

Open Election

↓

Notify Voters

↓

Voting

↓

Close Election

↓

Notify Voters

↓

View Results



# Voting Workflow

Authenticate User

↓

Validate Election

↓

Validate Candidate

↓

Prevent Duplicate Voting

↓

Save Vote



# Email Notification Workflow

Explain how Nodemailer is integrated.

Include:

Welcome Email

Password Reset

Election Created

Voting Started

Election Closed


# Security Implementation

Explain:

JWT

bcrypt

Helmet

Rate Limiting

CORS

Protected Routes



# Database Design

Explain relationships:

User

↓

Vote

↓

Candidate

↓

Party

↓

Election


# Testing

The application was tested using Postman to verify:

Authentication endpoints

Authorization

Election management

Candidate management

Political party management

Voting workflow

Election result retrieval

Email notification workflow


# Future Improvements

Future improvements planned for the project include:

 1. Real Voter Card verification.

 2. Cloud storage for uploaded files.

 3. SMS notifications.

 4. Audit logging.

 5. Frontend integration.

 6.  Performance improvements.


  1. Real Voter Card Verification
  The voterRegistryProvider and face provider i built so far are mock/test providers.
  for a real election deployment, those must be replaced with an officially authorized voter-registry
  integration and a properly vetted identity/liveness provier.

Planned improvements include:
Allow users who forget their registered email address to verify their identity using their Voter Card ID before updating or resetting their email address.
This additional verification process will strengthen the security and credibility of the voting process.

# Deployment Architecture

Frontend

↓

Render (Express API)

↓

MongoDB Atlas

↓

Nodemailer SMTP



