var http = require("http");
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var fs =require('fs');

app.get('/send', function (req, res) {
    fs.readFile("h.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);   
      });
      
 })
 app.post('/view', urlencodedParser, function (req, res){
    roll = req.body.id;
    per=req.body.name;

    res.write(per+" "+roll);
    res.end();
   })

 app.post('/thank', urlencodedParser, function (req, res){
    roll = req.body.id;
    per=req.body.name;

    res.write(roll+" "+per);
    res.end();
   }).listen(9000);
