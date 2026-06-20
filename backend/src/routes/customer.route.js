const express = require("express");
const router = express.Router();
const customerHandler =
    require("../handlers/customer.handler");
router.post("/", customerHandler.createCustomer);
router.get("/", customerHandler.getAllCustomers);
router.get("/:id", customerHandler.getCustomerById);
router.put("/:id", customerHandler.updateCustomer);
router.delete("/:id", customerHandler.deleteCustomer);

module.exports = router;