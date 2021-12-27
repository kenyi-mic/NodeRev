const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const serveStaticFile = (res, path, contentType, responseCode = 200) => {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-Type": "text/plain" });
      return res.end("500-Internal error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/contact":
      serveStaticFile(res, "/public/contact.html", "text/html");
      break;
    default:
      serveStaticFile(res, "/public/404.html", "text/html", 404);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is runing at the port ${port} press ctrl C to exit`);
});
