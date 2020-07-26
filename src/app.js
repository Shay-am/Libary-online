const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const bodyParser = require("body-parser");




//Import Middleware
const bookRouter = require("./routes/api/book");
const authRouter = require("./routes/api/auth");

const app = express();



mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to MongoDB")
);

// middleware - parse JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//middlewere path
app.use(bookRouter);
app.use(authRouter);





const port = process.env.PORT || '2000';

app.listen(port, () => console.log(`Server started on port ${port}!`));
