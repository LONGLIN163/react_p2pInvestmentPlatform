
let initState={

	"filter":{
		"schools":[]
	}

}


export default (state = initState , action) => {

	switch (action.type) {
		case "FETCHINITDATA":
			return {
               ...state,
			   "filter":{
				   ...state.filter,
				   "schools":action.data.schools
			   }
			}
		default:
			break;
	}
	return state;
}