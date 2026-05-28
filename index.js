// import http from "http";
// import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const expressServer = express();
const PORT = 8080;

// Needed because __dirname does not work in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home route
expressServer.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// About route
expressServer.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

// Contact route
expressServer.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// 404 route (must always be last)
expressServer.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// Start server
expressServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   let path = "";

//   switch (req.url) {
//     case "/":
//       path = "./index.html";
//       res.statusCode = 200;
//       break;

//     case "/about":
//       path = "./about.html";
//       res.statusCode = 200;
//       break;

//     case "/contact-me":
//       path = "./contact-me.html";
//       res.statusCode = 200;
//       break;

//     default:
//       path = "./404.html";
//       res.statusCode = 404;
//       break;
//   }

//   // content type
//   res.setHeader("Content-Type", "text/html");

//   // read file and send response
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(8080, "localhost", () => {
//   console.log("Server running on port 8080");
// });
