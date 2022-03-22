const httpStatus = require("http-status-codes");
const htmlContentType = {
    "Content-Type": "text/html"
};
const pngContentType = {
    "Content-Type": "image/png"
};
const routes = {
    GET: {
        "/": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/index.html", res);
        },
        "/home.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/index.html", res);
        },
        "/books.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/books.html", res);
        },
        "/book1.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/book1.html", res);
        },
        "/book2.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/book2.html", res);
        },
        "/book3.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/book3.html", res);
        },
        "/images/book.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/book.png", res);
        },
        "/images/book2.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/book2.png", res);
        },
        "/images/book3.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/book3.png", res);
        },
        "/images/book1.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/book1.png", res);
        },
        "/images/LibraryBanner.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/LibraryBanner.png", res);
        },
    },
    POST: {},
};

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};