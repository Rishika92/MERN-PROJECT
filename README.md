# MERN Project

This repository contains a full-stack MERN-style application with separate `backend/` and `frontend/` folders.

## Project Overview

- `backend/`: Node.js + Express backend API with CRUD endpoints for `products`, `customers`, and `orders`.
- `frontend/`: React + Vite + Tailwind CSS client app with separate pages for products, orders, and users.

## Tech Stack

- Backend: Node.js, Express.js, MongoDB
- Frontend: React, Vite, Tailwind CSS, React Router

## Frontend Structure

- `frontend/src/components/`: reusable UI components such as navigation, form, and table layout
- `frontend/src/pages/`: feature-based pages for `Products`, `Orders`, and `Users`
- `frontend/src/api/`: shared API client configuration
- `frontend/src/routes/`: application route definitions
- `frontend/src/resources/`: resource metadata and form defaults

## Backend Structure

- `backend/src/routes/`: Express route definitions for each resource
- `backend/src/handlers/`: request handlers for products, customers, and orders
- `backend/src/services/`: business logic and data access helpers
- `backend/src/models/`: data models for the backend resources

## Available Features

- CRUD operations for Products, Customers, and Orders
- Resource-driven React pages with add/edit/list flows
- Tailwind styling for a clean admin UI
- Proxy setup so frontend requests `/api/*` to backend

## Run Locally

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```
