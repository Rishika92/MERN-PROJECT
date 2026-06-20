const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

const productCollection = () => {
    return getDB().collection("products");
};
const createProduct = async (productData) => {
    const result = await productCollection().insertOne(productData);
    return { _id: result.insertedId, ...productData };
};
const getAllProducts = async () => {
    return await productCollection().find().toArray();
};
const getProductById = async (id) => {
    return await productCollection().findOne({
        _id: new ObjectId(id)
    });
};
const updateProduct = async (id, data) => {
    await productCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
    return await getProductById(id);
};
const deleteProduct = async (id) => {
    return await productCollection().deleteOne({
        _id: new ObjectId(id)
    });
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};