
let initState={

	"filters":{
		"schools":[],
		"types":[]
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

		default:
			break;
	}
	return state;
}