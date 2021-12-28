const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000; // default

function serveStaticFiles(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { contentType: "text/plain" });
      return res.end("500-Internal server error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const serve = http.createServer((req, res) => {
  const path = req.url.replace(/\/$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFiles(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFiles(res, "/public/about.html", "text/html");
      break;
    case "/contact":
      serveStaticFiles(res, "/public/contact.html", "text/html");
      break;
    default:
      serveStaticFiles(res, "/public/404.html", "text/html", 404);
      break;
  }
});

serve.listen(port, () =>
  console.log(`The server is running at port ${port} press Ctrl-C to exit`)
);
