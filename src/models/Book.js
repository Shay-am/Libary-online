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
    }
});

const books = mongoose.model('Book', bookSchema)

const book = new books(
    { title: 'Pan Tadeusz', author: 'A.Mickiewicz'});
book.save();


module.exports = mongoose.model('Book', bookSchema);