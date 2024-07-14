console.log("Web serverni boshlash");
// qayta qayta obnavleniya berishnni orniga nodemon ni install qilsak va package.jsondan "dev":"nodemon serevr.js"  desak kifoya

const express = require("express");
const app = express(); // express opbj dan insteancde oldik
const http = require("http");
const chalk = require("chalk");

// 1# kirish codlari:
app.use(express.static("public")); // public folderini clientlarga ochib berayapmiz/ keyinchalik css va img larni joylaymiz
app.use(express.json()); // client va web serverlar orasidagi data lar json korinishida va express.json ularni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // HTMl forumdan post qilingan  narsalarni serverga kiritish un kk.

// 2# sessions codes:

// #3 bssr(backend server sider rendering) + use ejs : views codelar
app.set("views", "views");
app.set("view enjine", "ejs"); // ejs orqali html ni backend da yasaymiz

// #4 router - agar boruzerda  qidirganda qaysi nom bn qidirsak shu bolimga otirib beradi.

app.get("/", function (req, res) {
  res.end(`<h1 style="color:blue">Hello World for Mirzo</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="color:grey">You are in Gifft page</h1>`);
});
app.get("/hello", function (req, res) {
  res.end(`<h1 style="color:yellow">Hello Pages</h1>`);
});

const server = http.createServer(app);
let PORT = 1000;
server.listen(PORT, function () {
  console.log(
    ` Bu Sever  ${chalk.red(PORT)} portda muvoffaqiyatli  ishlayapti!`
  );
});
