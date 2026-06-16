//database operations related to user
const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

const customerCollection = () => {
    return getDB().collection("customers");
};

const createCustomer = async (customerData) => {
    return await customerCollection().insertOne(customerData);
};

const getAllCustomers = async () => {
    return await customerCollection().find().toArray();
};

const getCustomerById = async (id) => {
    return await customerCollection().findOne({
        _id: new ObjectId(id)
    });
};

const updateCustomer = async (id, data) => {
    return await customerCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
};

const deleteCustomer = async (id) => {
    return await customerCollection().deleteOne({
        _id: new ObjectId(id)
    });
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};