const orderService = require('../services/order.service');

const createOrder = async (req, res) => {
    try {
        const result = await orderService.createOrder(req.body);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    const orders = await orderService.getAllOrders();
    res.status(200).json({ success: true, data: orders });
};

const getOrderById = async (req, res) => {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json({ success: true, data: order });
};

const updateOrder = async (req, res) => {
    const order = await orderService.updateOrder(req.params.id, req.body);
    res.status(200).json({ success: true, data: order });
};

const deleteOrder = async (req, res) => {
    const order = await orderService.deleteOrder(req.params.id);
    res.status(200).json({ success: true, data: order });
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};