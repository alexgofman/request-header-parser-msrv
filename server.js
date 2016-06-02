var express = require('express');
var app = express();
var parser = require(process.cwd() + "/app.js");

app.get('/', function(req, res) {
  var strIP = req.get("x-forwarded-for");
  var strLang = req.get("accept-language");
  var strUser = req.get("User-agent");
  var obj = parser(strIP, strLang, strUser);
  console.log(strUser);
  res.json(obj);
  res.end();
});

app.listen(process.env.PORT || 8080);
