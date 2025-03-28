import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "response for get request",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})