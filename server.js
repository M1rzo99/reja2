console.log("Web serverni boshlash");
// qayta qayta obnavleniya berishnni orniga nodemon ni install qilsak va package.jsondan "dev":"nodemon serevr.js"  desak kifoya

const express = require("express");
const app = express(); // express opbj dan insteancde oldik
const http = require("http");
const chalk = require("chalk");
const { log } = require("console");
const { default: test } = require("node:test");

// 1# kirish codlari:
app.use(express.static("public")); // public folderini clientlarga ochib berayapmiz/ keyinchalik css va img larni joylaymiz
app.use(express.json()); // client va web serverlar orasidagi data lar json korinishida va express.json ularni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // HTMl forumdan post qilingan  narsalarni serverga kiritish un kk.

// 2# sessions codes:

// #3 bssr(backend server sider rendering) + use ejs : views codelar
app.set("views", "views");
app.set("view engine", "ejs"); // ejs orqali html ni backend da yasaymiz

// #4 router - agar boruzerda  qidirganda qaysi nom bn qidirsak shu bolimga otirib beradi.

app.post("/create-item", (req, res) => {
  // post user kiritgan (brauzerga)  malumotni ozi bn olib keladi va data basega osha malumotni yozadi.
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  // get data basedagi malumotni user brauzerda oqishi un ishlatadi.
  res.render("harid");
});

const server = http.createServer(app); // hamma qilingan requeestaar (app ga keladi)
let PORT = 1000;
server.listen(PORT, function () {
  console.log(
    ` Bu Sever  ${chalk.red(PORT)} portda muvoffaqiyatli  ishlayapti!`
  );
});

// notes:  mgithub ni ulashda tooken yasab uni git hub ni install qilmoqchi bolganda birga i qiliash kk (@ qolib ketmasin)
