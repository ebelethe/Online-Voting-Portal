# Online Voting Portal Backend Documentation


# Project Overview

The Online Voting Portal Backend is a RESTful API built with Node.js, Express.js, and MongoDB to provide a secure and reliable online voting system. The platform allows eligible voters to create an account, verify their identity, and vote conveniently from anywhere without visiting a physical polling station. It also enables administrators to manage elections, candidates, political parties, and voters while maintaining election integrity through secure authentication, authorization, and automated email notifications for key election activities.

The backend also integrates an email notification system to keep users informed about important activities such as account registration, password recovery, election creation, voting commencement, and election closure.

# Features

User Registration and Login
JWT Authentication
Password Reset
Election Management
Candidate Management
Political Party Management
Secure Vote Casting
Live Election Results
Email Notifications
Role-Based Authorization
Rate Limiting
Helmet
CORS

# Documentation
Check the documentation folder contains API Documentation, System Architecture and Developer Guide.

# Future Improvements
Voter Card verification, cloud storage, SMS notifications, audit logs, frontend integration and service refactoring. check the documentation folder for more.

# Installation Guide

Clone the Repository

git clone https://github.com/ebelethe/Online-Voting-Portal.git



# Navigate to the Project Directory

cd online-voting-portal


# Start the Development Server

npm run dev




# Application Modules

The backend is organized into the following modules:

Authentication Module

Admin Module

Election Module

Candidate Module

Political Party Module

Vote Module

Voter Module

Email Notification Module




# Email Notification Workflow

Email notifications are automatically sent when:

A new user successfully registers.

A password reset request is made.

A new election is created.

Voting begins.

An election is closed.



# Security Implementation

To improve the overall security of the application, the backend implements:

JWT-based authentication

Password hashing

Express Rate Limiting

Helmet security middleware

Cross-Origin Resource Sharing (CORS)

Protected API routes

Environment variable configuration





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






# Project Refactoring

Future development will also focus on improving the project's architecture and maintainability.

Planned improvements include:

Refactor the Vote Service.

Improve the Candidate Service.

Enhance the Password Service.

Restructure the Election Service by separating election business logic from the voting service.

Improve module organization and overall project architecture for better scalability and maintainability.





# Author

Simon Ebelethe

Backend Developer




# License

This project is released under the MIT License.