const router = require("express").Router();
const { verifyToken } = require("../utils/verifyToken");
const bookControllers = require('../Controllers/bookControllers')


//get all books
router.get('/api/books', bookControllers);

//get single book
router.get('/api/books/:id', bookControllers)

//POST create book 
router.post('/api/books', verifyToken, bookControllers);

//PUT (update) book
router.put('/:id', verifyToken, bookControllers);

//Delete book
router.delete('/api/:id',verifyToken, bookControllers);

module.exports = router;