var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('hello');
});
app.get('/index',function(req,res){
	res.sendFile('views/index.html',{root: __dirname});
});

app.listen(3000,function(){
	console.log('server strated, running at port : 3000');
});