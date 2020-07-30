const router = require('express').Router();
const Book= require( "../models/Book");

//get all books
router.get('/api/books', async (req, res) => {
    try {
        const response = await Book.find();
        res.json({
            data: response
        });
    }catch(error) {
        res.status(400).json({ error });
    }  
});

//get single book
router.get('/api/books/:id', async (req, res) => {
    try {
        const response = await Book.findOne({_id: req.params.id});
        res.json({
            data: response
        });
    } catch(error) {
        res.status(400).json({ error })
    }
});

//POST create book 
router.post('/api/books', async (req, res) => {
    try {
        const response = await Book.create({
            title: req.body.title,
            author: req.body.author
        });
       const savedbook = await response.save();
        res.json({
            data: savedbook
        })
    }catch (error) {
        res.status(400).json( { error });
    }
});

//PUT (update) book
router.put('/:id', async (req, res) => {
    try {
        const response = await Book.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json({
            data: response
        });
    }catch(error) {
        res.status(400).json({ error })
    }
});

//Delete book
router.delete('/api/:id', async (req, res) => {
    try {
        const response = await Book.findOneAndDelete({_id: req.params.id});
        res.json({
            data: response,
            msg: 'Book is deleted'
        });
    } catch (error) {
        res.status(400).json({ error })
    }
});

module.exports = router;