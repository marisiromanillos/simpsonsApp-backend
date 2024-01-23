README

## Tech Used
- **Back-end:** Express, Express-rate-limit, Helmet, sha256, Cors, Limiter, Chalk,  , SQL, Node

## Description
The Simpsons App is a full-stack project that allows users to interact with a database of Simpsons characters. The application showcases various functionalities, demonstrating proficiency in back-end technologies.

## Features
1. **Search Functionality:**
   - Users can search for specific Simpsons characters.

2. **Sorting:**
   - Characters can be ordered in ascending or descending order.

3. **Character Management:**
   - Delete characters from the database.

4. **User Preferences:**
   - Like or dislike characters based on user preferences.

5. **Statistical Data:**
   - Track the number of characters liked.

6. **Data Update:**
   - Retrieve new data dynamically.

## What It Demonstrates

### Back End
- Implementation of a robust back end using ExpressJS and NodeJS.
- Ensuring secure cross-origin resource sharing (CORS) for enhanced security.
- Effective use of rate limiting (Limiter) and authentication (Auth) mechanisms.
- Integration with SQL for database operations.
- Execution of SQL queries for data retrieval and manipulation.

### DevOps
- Acquisition and configuration of a domain.
- Efficient management of CPANEL operations.
- Deployment of the frontend to provide a seamless user experience.
- Creation of Node.js applications directly from CPANEL.
- File management using FileZilla for an efficient development workflow.

## Project Structure
- **Main File:** `server.js`
- **Scripts:**
  - `start`: Starts the server using `server app.js`.
  - `start-nodemon`: Starts the server with nodemon using `nodemon app.js`.

## Dependencies
- `chalk`: ^4.0.0
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `express-rate-limit`: ^7.1.5
- `helmet`: ^7.1.0
- `mysql`: ^2.18.1
- `sha256`: ^0.2.0
- `sib-api-v3-sdk`: ^8.5.0

