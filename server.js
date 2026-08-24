const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("Server is working.....");
    res.write("Hello ");

    res.end();
});

server.listen(5000, () => {
    console.log("Server is working");
});