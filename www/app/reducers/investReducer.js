
let initState={

	"filters":{
		"schools":[],
		"types":[],
		"need":{"min":0,"max":12000},
		"date":{
			"byear":2000,
			"bmonth":1,
			"bday":8,
			"eyear":2004,
			"emonth":2,
			"eday":5}
	},
	"currentFilters":[
		// {"filterTitle":"schools","v":["java","react"]},
		// {"filterTitle":"types","v":["3+2B","2+0B"]}
	],
	"data":[]

}


export default (state = initState , action) => {
	
	console.log("action",action) 

	switch (action.type) {
		case "FETCHINITFILTER":
			return {
               ...state,
			   "filters":action.data
			}
		case "FETCHDATA":
			return {
               ...state,
			   "data":action.data.results
			}
		case "ADDFILTER":
			return {
				...state,
				"currentFilters":[
					...state.currentFilters,
					{"filterTitle":action.title, "v":action.v}
				],
				"data":action.data.results
				// "filters":{
				// 	[action.nicktitle] : action.v,
				// }
			}
		case "DELFILTER":
			return {
				...state,
				"currentFilters":state.currentFilters.filter((item)=>{
					return item.filterTitle==action.title ? false : true;
				}),
				"data":action.data.results
			}
				

		default:
			break;
	}
	console.log("state",state)
	return state;
}