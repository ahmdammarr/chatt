import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

httpServer.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});

io.on("connection", (socket) => {
  console.log("A new client has connected");
});
