const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "build")));

const __PAGE_TITLE__ = "Welcome to express rendering";
const __DESCRIPTION__ = "Dynamic tags, dynamic description and so much more!";

app.get("/", function (req, res) {
  console.log("Homepage!");
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `Welcome to express rendering`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `Dynamic tags, dynamic description and so much more!`);
  htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `Page content for when JS is disabled.`);
  res.send(htmlContent);
});

app.get("/about", function (req, res) {
  console.log("about!");
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `About Express rendering`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `How amazing is this description!`);
  htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `Page content for when JS is disabled.`);
  res.send(htmlContent);
});
app.get("/blog", function (req, res) {
  // make db/api request to get the blog content dynamically
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `Our Blog section`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `Read amazing articles from our esteemed team`);
  htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `Page content for when JS is disabled.`);
  res.send(htmlContent);
});
app.get("/blog/:id", function (req, res) {
  const { id } = req.params;
  // make db/api request to get the blog content dynamically for ${id}
  let htmlContent = fs.readFileSync("build/index.html", "utf8");
  htmlContent = htmlContent.replace(__PAGE_TITLE__, `${id} - Our Blog Post`);
  htmlContent = htmlContent.replace(__DESCRIPTION__, `Read amazing articles from our esteemed team`);
  htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `Page content for when JS is disabled.`);
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}.`);
});
