const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'name must be at least 5 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'email must be at least 6 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'password must be at least 5 characters']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User1", userSchema);