const http = require("http");
const fs = require("fs");
const url = require("url");

const home = fs.readFileSync("home.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contact = fs.readFileSync("contact.html", "utf-8");

const server = http.createServer((req, res) => {
  const pathname = req.url;

  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(home);
  } else if (pathname === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(about);
  } else if (pathname === "/contact") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(contact);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(3000, () => {
  console.log("server listening at PORT 3000...");
});
