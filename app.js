const { json } = require("express");
var express=require("express");
var formidable = require('formidable');


var app = express();


app.post('/api' ,function(req,res){
	var form = new formidable.IncomingForm(); 
    form.parse(req, function(err, fields, files) {
		console.log("hahahahhahah")
        console.log(fields)
    });
});

app.use(express.static("www"));

app.listen(3000);

console.log("The app is running on server!")
