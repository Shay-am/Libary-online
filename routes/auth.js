const router = require("express").Router();
const authControllers = require('../controllers/authController');


//Get all users
router.get('/api/auth/register', authControllers);

//register user
router.post('/api/auth/register', authControllers);


////Login user
router.post('/api/auth/login', authControllers);




module.exports = router;
