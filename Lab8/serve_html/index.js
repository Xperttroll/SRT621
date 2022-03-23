const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const plainTextContentType = {
    "Content-Type": "text/plain",
};
const htmlContentType = {
    "Content-Type": "text/html",
};
const pngContentType = {
    "Content-Type": "image/png"
};

router.get("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/home.html", res);
});
router.get("/home.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/home.html", res);
});
router.get("/books.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/books.html", res);
});
router.get("/book1.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book1.html", res);
});
router.get("/book2.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book2.html", res);
});
router.get("/book3.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book3.html", res);
});

router.get("/images/book.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
    customReadFile("public/images/book.png", res);
});
router.get("/images/book1.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
    customReadFile("public/images/book1.png", res);
});
router.get("/images/book2.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
    customReadFile("public/images/book2.png", res);
});
router.get("/images/book3.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
    customReadFile("public/images/book3.png", res);
});
router.get("/images/LibraryBanner.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
    customReadFile("public/images/LibraryBanner.png", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

const app = http.createServer(router.handle);
app.listen(port);
console.log(`The Server has started and is listening on port numner: ${port}`);

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading file");
        }
        res.end(data);
    });
};