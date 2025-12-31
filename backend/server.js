// This is the answer of Task 2.3 - Server Making

import express from "express";

const app = express();
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
