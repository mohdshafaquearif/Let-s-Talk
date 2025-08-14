// Let's Talk - Real-Time Chat Application
// Author: Mohammad Shafaque Arif
// Description: Backend server for real-time chat using Express + Socket.io

import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
// lib/socket.js
import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

export const app = express();

export const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "https://letstalkchat.netlify.app", // Your Netlify frontend
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});


app.get("/", (req,res)=> {
res.send("hello world");
});
// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});
