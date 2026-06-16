const express=require("express");
const customerRoutes =require('./routes/customer.route');
const productRoutes =require('./routes/product.route');
const orderRoutes = require('./routes/order.route');
const app=express();
app.use(express.json());
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);

app.use('/orders', orderRoutes);
module.exports=app;