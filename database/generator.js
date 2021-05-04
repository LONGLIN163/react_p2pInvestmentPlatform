var _ = require("underscore");

var results = [];
for(var i = 0 ; i < 1000 ; i++){
	let t = _.random(400,20000);
	let d = _.random(0,t);
	let n = t - d;

	let y = _.sample(["2021","2022","2023"],1)[0];
	let m = _.sample([1,2,3,4,5,6,7,8,9,10,11,12],1)[0];
	let dd = _.random(1,28);

	results.push(
		{
			"name" : "Long" + i,
			"school" : _.sample(["Java" , "C++" , "React" , "Vue" , "Angular"],1)[0],
			"target" : t,
			"done" : d,
			"need" : n,
			"min" : 10,
			"max" : n,
			"type" : _.sample(["3 + 0B" , "6+2B" , "12+2B" , "18+2B" , "24+2B"],1)[0],
			"rate" : "11.17",
			"credit" : 6,
			"fundraising_deadline" : "2021-05-01",
			"earnings_time" : y + "-" + m + "-" + dd,
			"number_of_people":2,
			"investor" : [
				{
					"name" : "MoMoMo****" ,
					"money" : 1500,
					"anticipated" : 276,
					"time" : "2021.4.25 14:48:36"
				},
				{
					"name" : "MoMoMo****" ,
					"money" : 500,
					"anticipated" : 76,
					"time" : "2021.4.25 14:48:36"
				}
			],
			"province" : "Barcelona",
			"education" : "Bachelor",
			"course_title": "Full Stack",
			"course_time" : "2021-04-25",
			"course_price" : 10000
		}
	)
}

var json = JSON.stringify( {"results" : JSON.stringify(results)} );

var fs = require("fs");
  fs.writeFile("./database.json",json,function(){

})