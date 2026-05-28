import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url);
  let path = "";
  switch (req.url) {
    case "/":
      path = "./index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path = "./about.html";
      res.statusCode = 200;
      break;

    case "/contact-me":
      path = "./contact-me.html";
      res.statusCode = 200;
      break;

    default:
      path = "./404.html";
      res.statusCode = 404;
      break;
  }

  // content type
  res.setHeader("Content-Type", "text/html");

  // read file and send response
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("Server running on port 8080");
});
