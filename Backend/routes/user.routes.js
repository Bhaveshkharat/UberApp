const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.get('/registers', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

router.post('/logins',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6}).withMessage('Password must be at least 6 charaters long')
],
    userController.loginUser
)

router.get('/profiles',authMiddleware.authUser, userController.getProfile)

router.get('/logouts', authMiddleware.authUser, userController.logoutUser)


module.exports = router;