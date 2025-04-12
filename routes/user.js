const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.js');

router.route("/").get(UserController.getAllUsers).post(UserController.saveUser);
router.route("/:id").get(UserController.getUserById).patch(UserController.updateUser).delete(UserController.deleteUser);

module.exports = router;