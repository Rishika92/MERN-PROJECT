const customerService = require('../services/customer.service');

const createCustomer = async (req, res) => {
    try {
        const result = await customerService.createCustomer(req.body);

        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers =
            await customerService.getAllCustomers();

        res.status(200).json({
            success: true,
            data: customers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customer =
            await customerService.getCustomerById(
                req.params.id
            );

        res.status(200).json({
            success: true,
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const customer =
            await customerService.updateCustomer(
                req.params.id,
                req.body
            );

        res.status(200).json({
            success: true,
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const customer =
            await customerService.deleteCustomer(
                req.params.id
            );

        res.status(200).json({
            success: true,
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};