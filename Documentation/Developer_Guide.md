# Developer Guide

Introduction

This document provides development guidelines, coding standards, project structure, and best practices for the Online Voting Portal Backend. It is intended to help developers understand the architecture of the application, follow consistent development practices, and maintain the project as it grows.

The guide should be used by anyone contributing to the project to ensure consistency across the codebase.


# Prerequisites

Before setting up the project, ensure the following software is installed on your system:

Node.js (Version 18 or later)

npm (Node Package Manager) check the Architecture_plan.md to see all dependencies

MongoDB Atlas account

Git

Postman

Visual Studio Code (Recommended)


# Project Setup

Clone the Repository

Clone the project from GitHub to your local machine.

Example:

git clone https://github.com/your-username/online-voting-portal.git

Navigate into the project directory.

Example:

cd online-voting-portal

Install all project dependencies.

Example:

npm install

Create a .env file in the root directory and configure the required environment variables.

Required environment variables include:

PORT

MONGO_URI

JWT_SECRET

EMAIL_USER

EMAIL_PASS


After configuration, start the development server.

Example:

npm run dev



# Project Structure
check the Architecture_plan.md for the project structure

# Folder Responsibilities

1. Controllers

Controllers receive incoming HTTP requests and return responses to the client.

A controller should:

Receive client requests.

Validate incoming data.

Call the appropriate service or module.

Return the appropriate HTTP response.


Controllers should avoid implementing complex business logic.


2. Middleware

The middleware folder contains reusable middleware responsible for handling common application tasks.

Examples include:

Authentication

Authorization

Rate Limiting

Request Validation

Error Handling


3. Models

Models define the application's database structure using Mongoose schemas.

Each model represents a collection in MongoDB.

Examples include:

User

Election

Candidate

Party

Vote


4. Modules

The modules folder contains the application's business logic.

Business operations should be implemented within modules instead of controllers.

Examples include:

Authentication

Candidate

Email

Party

Vote


5. Routes

The routes folder defines all API endpoints and maps them to their corresponding controllers.

Routes should only be responsible for connecting endpoints to controllers.


6. Templates

The templates folder stores reusable HTML email templates used throughout the application.

Examples include:

Welcome Email

Password Reset Email

Election Notification Email



7. Upload

The upload folder stores uploaded files such as candidate profile images.


8. Utils

The utils folder contains helper functions that are shared across multiple modules.



# Coding Standards

Naming Convention

Developers should use meaningful and descriptive names for variables, functions, and files.

1. Variables

Good examples:

user

election

candidate


Avoid generic names such as:

x

test

data1




2. Functions

Function names should follow the camelCase naming convention.

Examples:

createElection()

closeElection()

sendWelcomeEmail()



3. File Names

Use descriptive file names that clearly describe their purpose.

Examples:

createElection.controller.js

login.controller.js

notificationEmail.service.js



4. Controller Guidelines

Controllers should only:

Receive requests.

Validate input.

Call business logic.

Return responses.


Business logic should remain inside modules or services.


5. Module and Service Guidelines

Modules are responsible for implementing business logic.

They should:

Interact with the database.

Perform calculations.

Apply business rules.

Return processed data to controllers.


Controllers should never directly implement business rules.



6. Error Handling

Return meaningful and consistent error responses.

Example:

Success Response

{
    "success": true,
    "message": "Operation completed successfully.",
    "data": {}
}

Error Response

{
    "success": false,
    "message": "An error occurred."
}

Avoid exposing internal server information in responses.


7. Authentication

Protected endpoints require a valid JWT access token.

The token should be supplied in the Authorization header using the Bearer scheme.

Unauthorized requests should return 401 Unauthorized.



8. Git Workflow

The project follows a feature branch workflow.

For every new feature:

1. Create a new feature branch.


2. Implement the feature.


3. Commit changes using descriptive commit messages.


4. Push the branch to GitHub.


5. Open a Pull Request for review before merging.



Commit messages should clearly describe the completed work.



9. Adding a New Feature

When implementing a new feature, follow this sequence:

1. Create the database model if required.


2. Implement the business logic inside a module.


3. Create the controller.


4. Register the API route.


5. Add request validation.


6. Test the endpoint using Postman.


7. Update project documentation.




10. Adding a New Endpoint

Every endpoint should include:

Route

Controller

Validation

Authorization (where required)

Business logic

Proper error handling

Postman testing


11. Security Guidelines

To maintain application security:

Hash all passwords before storing them.

Protect sensitive routes with JWT authentication.

Validate all incoming requests.

Store sensitive information in environment variables.

Keep Rate Limiting enabled.

Keep Helmet enabled.

Never commit the .env file to version control.


12. Testing

Before committing any changes, verify that:

All endpoints return the expected status codes.

Input validation works correctly.

Authentication and authorization behave as expected.

Email notifications are sent where applicable.

No unnecessary debugging statements remain in the code.



13. Documentation

Whenever new functionality is introduced:

Update the README if necessary.

Update the API Documentation.

Update the System Architecture Document if the application's structure changes.


Maintaining documentation ensures the project remains understandable and easy to maintain.


15. Contribution Guidelines

Before submitting changes:

Ensure the project builds successfully.

Follow the coding standards described in this guide.

Test all implemented features.

Write meaningful commit messages.

Keep pull requests focused on a single feature or bug fix.
