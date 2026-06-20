# E-Commerce Backend API

A simple backend application built using **Node.js**, **Express.js**, and **MongoDB** that performs CRUD operations for Customers and Products.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Thunder Client

## API Endpoints

### Customers

* POST `/customers`
* GET `/customers`
* GET `/customers/:id`
* PUT `/customers/:id`
* DELETE `/customers/:id`

### Products

* POST `/products`
* GET `/products`
* GET `/products/:id`
* PUT `/products/:id`
* DELETE `/products/:id`

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

The frontend is configured to proxy API calls from `/api` to the backend running on `http://localhost:3000`.
