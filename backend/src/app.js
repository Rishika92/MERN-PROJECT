const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customer.route");
const productRoutes = require("./routes/product.route");
const orderRoutes = require("./routes/order.route");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Routes
app.use("/customers", customerRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;