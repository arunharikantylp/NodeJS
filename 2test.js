var url = require('url');
var http = require('http');
function add(var1,var2)
{
	var ans;
	ans=var1+var2;
	return ans;
}

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var a=q.a;
  var b=q.b;
  var ans1 = add(a,b);
  //res.write("sum ="+ ans1);
  
   
  a= parseInt(a);
  b= parseInt(b);

  var c = a+b;  
   res.write("the answer is " +c);
  res.end();
}).listen(8082);