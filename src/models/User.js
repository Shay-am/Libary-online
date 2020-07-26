const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'name musi zawierac 5']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'email musi miec 6 znakow']
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User1", userSchema);