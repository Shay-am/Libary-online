const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');




//Import Middleware
const bookRouter = require('./routes/book');
const authRouter = require("./routes/auth");

const app = express();

mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, },
    () => console.log("Connected to MongoDB")
);

// middleware - parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//middlewere path
app.use(bookRouter);
app.use(authRouter);





const port = process.env.PORT || '9000';

app.listen(port, () => console.log(`Server started on port ${port}!`));
