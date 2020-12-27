const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const app = express();
const fs = require("fs");
const { API } = require("./src/config");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "build")));

const __PAGE_TITLE__ = "Welcome to express rendering";
const __DESCRIPTION__ = "Dynamic tags, dynamic description and so much more!";

app.get("/", function (req, res) {
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `Welcome to express rendering`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `Dynamic tags, dynamic description and so much more!`);
  res.send(htmlContent);
});

app.get("/about", function (req, res) {
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `About Express rendering`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `How amazing is this description!`);
  res.send(htmlContent);
});
app.get("/blog", function (req, res) {
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `Our Blog section`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `Read amazing articles from our esteemed team`);
  res.send(htmlContent);
});
app.get("/blog/:id", async function (req, res) {
  const { id } = req.params;
  let detail = { title: `Blog Post ${id}`, body: "Read amazing articles from our esteemed team" };
  try {
    detail = await fetch(`${API.posts}/${id}`);
    detail = await detail.json();
  } catch (e) {
    console.log(e);
  }
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, detail.title);
  htmlContent = htmlContent.replace(__DESCRIPTION__, detail.body.slice(0, 50));
  htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `<p>${detail.body}</p>`);
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}.`);
});
