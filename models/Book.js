const mongoose =require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uniqe: true
    },
    author: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date.now
    },
    image: String,
    images: Array
});

module.exports = mongoose.model('Book', bookSchema);