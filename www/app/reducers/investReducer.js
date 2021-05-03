
let initState={

	"filters":{
		"schools":[],
		"types":[],
		"need":{"min":100,"max":12000}
	},
	"currentFilters":[
		// {"filterTitle":"schools","v":["java","react"]},
		// {"filterTitle":"types","v":["3+2B","2+0B"]}
	]

}


export default (state = initState , action) => {

	switch (action.type) {
		case "FETCHINITDATA":
			return {
               ...state,
			   "filters":action.data
			}
		case "ADDFILTER":
			return {
				...state,
				"currentFilters":[
					...state.currentFilters,
					{"filterTitle":action.title, "v":action.v}
				]
			}
		case "DELFILTER":
			return {
				...state,
				"currentFilters":state.currentFilters.filter((item)=>{
					return item.filterTitle==action.title ? false : true;
				})
			}
				

		default:
			break;
	}
	return state;
}