var url = require('url');
var http = require('http');
var dt = require('./mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var a= q.a;
  var b= q.b;
   
   a = parseInt(a);
   b= parseInt(b);
   
  res.write( "the addition is"  + dt.add(a,b) + '<br/>' );
  //res.write("the addition is" + dt.add(8,9));
  res.write('<br/>'+"the sub is"+ "\n" +dt.sub(a,b)+'<br/>');
  //res.write("the subtraction is" dt.sub(8,9));
  res.write("the multiplication is "+'<br/>' + dt.mul(a,b));
  res.write("the division is" + "\n" + dt.div(a,b));
  
  res.end();
}).listen(8085);
   