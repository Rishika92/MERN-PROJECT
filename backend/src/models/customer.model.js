//database operations related to user
const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

const customerCollection = () => {
    return getDB().collection("customers");
};

const createCustomer = async (customerData) => {
    const result = await customerCollection().insertOne(customerData);
    return { _id: result.insertedId, ...customerData };
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
    await customerCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
    return await getCustomerById(id);
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