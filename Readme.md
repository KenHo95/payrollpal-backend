# 💼 PayrollPal Backend

## ❓ What

The backend of the PayrollPal application provides the necessary server-side functionality to support the frontend in streamlining contract management and automating payments for TikTok creators.

## 💻 Technologies Used

💼 PayrollPal Backend is built using the following technologies:

- Node.js: A runtime environment for executing JavaScript on the server.
- Express.js: A web application framework for Node.js.
- PostgreSQL: A powerful, open-source relational database system.
- Sequelize: An ORM (Object-Relational Mapping) for Node.js.
- Authentication: Implement user authentication for secure access.

## 📜 Getting Started

To set up the 💼 PayrollPal Backend and make it work seamlessly with the frontend, follow these steps:

1. Clone the repository: `git clone https://github.com/KenHo95/payrollpal-backend.git`
2. Navigate to the project directory: `cd payrollpal-backend`
3. Install dependencies: `npm install`
4. Set up the PostgreSQL database: Configure database connection in `config/config.json`.
5. Run database migrations: `npx sequelize db:migrate`
6. Start the server: `nodemon index.js`
7. Ensure the backend is running on the appropriate port (e.g., `http://localhost:3001`).

Make sure you have Node.js and npm installed on your machine before proceeding with the installation.

## 🌐 API Endpoints

The PayrollPal Backend provides the following API endpoints for interaction with the application:

### Creators

- `GET /creators`: Retrieve a list of all content creators.
- `GET /creators/:id`: Retrieve details of a specific content creator by their ID.
- `POST /creators`: Create a new content creator profile (Admin only).
- `PUT /creators/:id`: Update an existing content creator profile (Admin only).
- `DELETE /creators/:id`: Delete a content creator profile (Admin only).

### Posts

- `GET /posts`: Retrieve a list of all TikTok posts.
- `GET /posts/:id`: Retrieve details of a specific TikTok post by its ID.
- `POST /posts`: Create a new TikTok post for approval (Content Creator).
- `PUT /posts/:id`: Update the details of an existing TikTok post (Content Creator).
- `DELETE /posts/:id`: Delete a TikTok post (Content Creator).

### Contracts

- `GET /contracts`: Retrieve a list of all contracts.
- `GET /contracts/:id`: Retrieve details of a specific contract by its ID.
- `POST /contracts`: Create a new contract for content creators (Admin only).
- `PUT /contracts/:id`: Update the details of an existing contract (Admin only).
- `DELETE /contracts/:id`: Delete a contract (Admin only).
- `POST /contracts/approve/:id`: Approve a contract (Content Manager).
- `POST /contracts/pay-approved-contracts`: Batch payment processing (Admin).

### Categories

- `GET /categories`: Retrieve a list of all content categories.
- `GET /categories/:id`: Retrieve details of a specific content category by its ID.
- `POST /categories`: Create a new content category (Admin only).
- `PUT /categories/:id`: Update the details of an existing content category (Admin only).
- `DELETE /categories/:id`: Delete a content category (Admin only).

### Authentication

- `POST /auth/token`: Obtain an access token by providing valid credentials.
- `POST /auth/register`: Register a new user account.

Please ensure that you have the necessary authentication and authorization scopes for certain endpoints (e.g., Content Manager or Admin scopes) as defined in your code.

## 🚀 Using the Backend with the Frontend

💡 **Integration**: To fully utilize the PayrollPal application, both the Frontend and Backend components should be used together. The [PayrollPal Frontend](https://github.com/KenHo95/payrollpal-frontend) interacts with this backend to provide a seamless experience for contract management and payment automation.

Please ensure that you have both the Frontend and Backend components set up and configured to work together for the complete functionality of PayrollPal.

For detailed instructions on setting up and running the frontend, refer to the [PayrollPal Frontend README](https://github.com/KenHo95/payrollpal-frontend).
