const express = require('express');
const router = express.Router();
const {register,logins,findUser,deleteUser} = require('../controller/UserController')

router.route('/register').post(register);
router.route('/login').post(logins);
router.route('/findUser').get(findUser);
router.route('/deleteUser').delete(deleteUser)

module.exports = router;