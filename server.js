const E6API = require("e6api");
const e6 = new E6API({
  userAgent: "E6API/1.0.6 (https://github.com/FurryBotCo/E6API)"
});
var express = require("express");
var Unblocker = require("unblocker");
var fs = require("fs");
var cors = require("cors");
var app = express();
app.use(cors());

var config = {
  prefix: "/node/",
  responseMiddleware: [hordesMiddleware]
};
app.use(Unblocker(config));
app.use("/", express.static(__dirname + "/public"));
var str = fs.readFileSync(__dirname + "/dist.js");

var http = require("http").Server(app);
var io = require("socket.io")(http);
var client = require("socket.io-client");
var hordes = client.connect("https://hordes.io");
var id;
io.on("connect", function(socket) {
  socket.emit("h");
  hordes.on("c", function(e) {
    socket.emit("c", e);
  });
  hordes.on("m", function(e) {
    socket.emit("m", e);
  });
  hordes.on("d", function(e) {
    e.c = id;
    e.address = "ws-balance.glitch.me/";
    socket.emit("d", e);
  });
  socket.on("c", function(e) {
    hordes.emit("c", e);
  });
  socket.on("auth", function(e) {
    id = e.id;
    hordes.emit("auth", e);
  });
});

function hordesMiddleware(data) {
  if (RegExp(".*://hordes.io/script/dist.min.js").test(data.url)) {
    data.clientResponse.send(str);
  }
}

function checkHttps(req, res, next) {
  // protocol check, if http, redirect to https

  if (req.get("X-Forwarded-Proto").indexOf("https") != -1) {
    console.log("https, yo");
    return next();
  } else {
    console.log("just http");
    res.redirect("https://" + req.hostname + req.url);
  }
}

async function e621Get(){
  e6.listPosts(["pikachu","order:random"], 1, 1, null, []).then(posts=>console.log(posts[0].file.url))
  const e = await e6.listPosts(["pikachu","order:random"], 1, 1, null, []);
  console.log(e[0].file.url)
}

function test(){
  alert("hOi")
}

app.get("/", function(req, res, err) {
  res.sendFile("index.html");
});
app.all("*", checkHttps);
http.listen(process.env.PORT);
