const customerModel = require('../models/customer.model');
const createCustomer = async (customerData) => {
    if (!customerData.name) {
        throw new Error("Customer name is required");
    }
    return await customerModel.createCustomer(customerData);
};
const getAllCustomers = async () => {
    return await customerModel.getAllCustomers();
};
const getCustomerById = async (id) => {
    return await customerModel.getCustomerById(id);
};
const updateCustomer = async (id, data) => {
    return await customerModel.updateCustomer(id, data);
};
const deleteCustomer = async (id) => {
    return await customerModel.deleteCustomer(id);
};
module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
