const port = 8989;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    var date = new Date();
    var today = date.toDateString();
    var time = date.toTimeString();
    let responseMessage = "<h1>Today is " + today + ". The time is " + time +".</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The Server has started and is listening on port numner: ${port}`);