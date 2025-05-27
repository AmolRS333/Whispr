# MERN Chat App

A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js). Features authentication, user profiles, and messaging with image support.

## Features

- User authentication (signup, login, logout)
- Profile management with avatar upload
- Real-time messaging (Socket.io ready)
- Responsive UI with React, Tailwind CSS, and DaisyUI
- RESTful API backend with Express and MongoDB

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB

### Backend Setup

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Create a `.env` file in `backend/` (see `.env` example in the repo).
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the frontend dev server:
   ```sh
   npm run dev
   ```
3. Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

See `backend/.env` for required variables:

- `MONGO_URI`
- `PORT`
- `JWT_SECRET`
- `NODE_ENV`
- `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` (for Cloudinary image uploads)

## Scripts

### Backend

- `npm run dev` — Start backend with nodemon

### Frontend

- `npm run dev` — Start frontend dev server
- `npm run build` — Build frontend for production
- `npm run lint` — Lint frontend code

## License

MIT

---

Built with ❤️ using the MERN stack.
