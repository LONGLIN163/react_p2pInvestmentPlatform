var express=require("express");
var formidable = require('formidable');
var fs = require('fs');


var app = express();


app.post('/api' ,function(req,res){
	var form = new formidable.IncomingForm(); 
    form.parse(req, function(err, fields, files) {
        //console.log(fields)
		var filterobj=JSON.parse(fields.filter);
		//console.log(filterobj)
		fs.readFile("./database/database.json",function(err,data){
			//res.json(JSON.parse(data.toString()))
			var arr=JSON.parse(data.toString()).results;
			//console.log("arr",arr)

			//************filter********** */
			filterobj.forEach(function(thefilter){
				console.log("thefilter:",thefilter)
				if(thefilter.filterTitle == "schools"){
					arr = arr.filter(function(item){
						var itemschool=item.school.toLowerCase();
						return thefilter.v.indexOf(itemschool) != -1;
					});
				}else if(thefilter.filterTitle == "types"){
					arr = arr.filter(function(item){
						return thefilter.v.indexOf(item.type) != -1;
					});
				}else if(thefilter.filterTitle == "need"){
					arr = arr.filter(function(item){
						return item.need >= thefilter.v.scaleLeft && item.need <= thefilter.v.scaleRight;
					});
				}else if(thefilter.filterTitle == "date"){
					arr = arr.filter(function(item){
						  var d1 = new Date(item.earnings_time);
						  var d2 = new Date(thefilter.v.byear , thefilter.v.bmonth - 1 , thefilter.v.bday );
						  var d3 = new Date(thefilter.v.eyear , thefilter.v.emonth - 1, thefilter.v.eday );
						  return (d1 > d2 && d1 < d3);
					});
			  }
			});
			//console.log(arr)
			res.json({"results":arr})
		})
    });
});

app.use(express.static("www"));

// app.listen(3000);

// console.log("The app is running on server!")
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
