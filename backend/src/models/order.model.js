const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

const orderCollection = () => {
    return getDB().collection("orders");
};

const createOrder = async (orderData) => {
    const result = await orderCollection().insertOne(orderData);
    return { _id: result.insertedId, ...orderData };
};

const getAllOrders = async () => {
    return await orderCollection().find().toArray();
};

const getOrderById = async (id) => {
    return await orderCollection().findOne({
        _id: new ObjectId(id)
    });
};

const updateOrder = async (id, data) => {
    await orderCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
    return await getOrderById(id);
};

const deleteOrder = async (id) => {
    return await orderCollection().deleteOne({
        _id: new ObjectId(id)
    });
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};