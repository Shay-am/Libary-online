const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({  debug:process.env.DEBUG })
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");




const bookRouter = require("./routes/api/book");
const authRouter = require("./routes/api/auth");

const app = express();
// const DB_CONNECT = 'mongodb+srv://shayam:wajcha@cluster0.j5zo5.mongodb.net/apiBooks?retryWrites=true&w=majority';


mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to MongoDB")
);

// middleware - parse JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', bookRouter);
app.use('/', authRouter);





const port = process.env.PORT || '2000';

app.listen(port, () => console.log(`Server started on port ${port}!`));
