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

app.get("/", homeController.sendReqHome);

app.get("/home", homeController.sendReqHome);

app.get("/image", homeController.sendReqImages);

app.get("/images/:imageNumber", homeController.sendReqImages);

app.post("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

app.listen(port);
console.log(`The Server has started and is listening on port numner: ${port}`);
