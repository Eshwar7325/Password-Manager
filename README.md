# PassOP - Password Manager

A full-stack password manager built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend.

## Features
- Securely store website credentials (site, username, password)
- Copy credentials to clipboard
- Edit and delete saved passwords
- Show/hide password functionality
- Toast notifications for actions

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, react-toastify
- Backend: Node.js, Express, MongoDB

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or accessible via URI

### Backend Setup
1. Open a terminal and navigate to the `Backend` folder:
   ```sh
   cd Backend
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The backend will run on `http://localhost:3000/` by default.

### Frontend Setup
1. In a new terminal, navigate to the project root:
   ```sh
   cd ..
   npm install
   ```
2. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173/` by default.

## Usage
- Open the frontend in your browser.
- Add, edit, or delete passwords as needed.
- Click the copy icon to copy credentials to your clipboard.

## Folder Structure
- `src/components/` - React components (Manager, Navbar, Footer)
- `Backend/` - Express server and backend logic

## License
This project is for educational purposes.
Feel free to use and modify the code as needed.

Feel free to use and modify the code as needed.
