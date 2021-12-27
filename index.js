const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end("Welcome to our Node Application");
      break;
    case "/about":
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end("Our About page here!!!!");
      break;
    case "/contact":
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end("Your contact page here!!!!");
      break;
    default:
      res.writeHead(404, { "content-Type": "text/plain" });
      res.end("Sorry, we couldn't the page your looking for ): ");
  }
});

server.listen(port, () => console.log(`The server is running on port ${port}`));
