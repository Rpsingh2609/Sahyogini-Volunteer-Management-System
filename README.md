# Sahyogini 2.0

## Overview
Sahyogini 2.0 is a full-stack web application built using **React**, **Node.js**, and **Express** with **Supabase** as the backend database and **Clerk** for authentication. The application provides seamless user authentication, database management, and an optimized user experience.

## Features
- **User Authentication**: Implemented using Clerk for secure authentication.
- **Database Management**: Powered by Supabase for real-time data handling.
- **RESTful API**: Built with Express and Node.js to handle backend operations.
- **Frontend Framework**: React for dynamic and responsive UI.
- **Secure & Scalable**: Designed for scalability with modern authentication and database solutions.

## Tech Stack
### Frontend
- **React**
- **Clerk (Authentication)**

### Backend
- **Node.js**
- **Express.js**
- **Supabase (PostgreSQL database & backend services)**

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (latest stable version)
- **npm** or **yarn**

### Steps
#### 1. Clone the Repository
```sh
git clone <repo-url>
cd Sahyogini_2.0
```

#### 2. Install Dependencies
```sh
npm install  # or yarn install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables:
```env
REACT_APP_CLERK_PUBLISHABLE_KEY=your-clerk-key
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### 4. Start the Development Server
```sh
npm start  # or yarn start
```

## Deployment
The application can be deployed on platforms like **Vercel, Netlify (for frontend)** and **Render, Railway (for backend)**.

### Live Demo
[Sahyogini Volunteer Management System](https://sahyogini-volunteer-management-system-hhhrbkp64.vercel.app/)

## API Endpoints
### Authentication
- `POST /login` – User login
- `POST /register` – User registration
- `POST /logout` – User logout

### Data Management
- `GET /data` – Fetch stored data
- `POST /data` – Add new data
- `DELETE /data/:id` – Remove data

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and create a PR.

### Contributors
- **AMAN CHOURASIA**
- **RAJAN PRATAP SINGH**

## License
This project is licensed under the **MIT License**.

## Contact
For any issues or contributions, feel free to raise an issue or contact me at [anuragprajapati02005@gmail.com].

