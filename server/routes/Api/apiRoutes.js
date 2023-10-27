const express = require("express");
const apiRoutes = express.Router();
const userRoutes = require("./User/user");

// => /api/user
apiRoutes.use("/user", userRoutes);

module.exports = apiRoutes;
