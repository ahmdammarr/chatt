import express from 'express';
import { Server, Socket } from 'socket.io';

const app = express();
const server = app.listen(8000);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('A client connected');

  // Handle events from the client
  socket.on('event', (data) => {
    console.log('Received event:', data);
    // Perform actions based on the event
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

export default io;