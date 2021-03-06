const port = 3000;
const express = require("express")
const app = express();
const homeController = require("./controllers/homeController");
const httpStatus = require("http-status-codes");

const plainTextContentType = {
    "Content-Type": "text/plain",
};

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(express.static("public"))

app.set("view engine", "ejs");

app.get(
    "/",
    homeController.getAllBooks,
    (req, res, next) => {
        console.log(req.data);
        res.render("home", { books: req.data});
    }
);

app.get(
    "/home",
    homeController.getAllBooks,
    (req, res, next) => {
        console.log(req.data);
        res.render("home", { books: req.data});
    }
);

app.get(
    "/books", 
    homeController.getAllBooks,
    (req, res, next) => {
        console.log(req.data);
        res.send(req.data);
    }
);

app.get(
    "/books/:bookNumber", 
    homeController.sendReqBooks,
    (req, res, next) => {
        console.log(req.data);
        res.render("books", { books: req.data});
    }
);

app.post("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);
mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Book = require("./models/books")

app.listen(port);
console.log(`The Server has started and is listening on port numner: ${port}`);
