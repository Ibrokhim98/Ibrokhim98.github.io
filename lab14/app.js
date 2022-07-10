const express = require("express");
const productRouter = require("./routes/product");
const bookRouter = require("./routes/book");
const cors = require("cors");
const app = express();

const path = require("path");
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

app.use("/api/products", productRouter);
app.use("/api/books", bookRouter);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use((req, res, next) => {
  res.status(404).json({ error: req.url + " API not supported!" });
});

app.use((err, req, res, next) => {
  if (err.message === "NOT Found") {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Something is wrong! Try later" });
  }
});

app.listen(3000, () => console.log("listening to 3000..."));
