const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
  if (req.url === "/system-info") {
    const data = {
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      user: os.userInfo().username,
      platform: os.platform(),
    };

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Route Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});

module.exports = server;