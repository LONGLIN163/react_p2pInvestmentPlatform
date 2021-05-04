
export const fetchInitFilter=()=>{return (dispatch)=>{
    $.get("/api/filters.json", function(data){
        //console.log("data",data)
        dispatch({"type":"FETCHINITFILTER", data : data})
    })
} }
export const fetchData=()=>{return (dispatch)=>{
    $.get("/api/data.json", function(data){
        //console.log("data",data)
        dispatch({"type":"FETCHDATA", data : data.results})
    })
} }
// export const addFilter=(title,v,nicktitle)=>{ 
//     return {"type":"ADDFILTER",title,v,nicktitle}
// }
export const addFilter=(title,v)=>{ 
    return (dispatch,getState)=>{
        // var currentFilters=getState().investReducer.currentFilters;
        // currentFilters.push({"filterTitle":title,"v":v})
        var currentFilters=getState().investReducer.currentFilters.concat({"filterTitle":title,"v":v});
        //console.log("###",currentFilters)
        $.ajax({
            "url": "/api",
            "data":{"filter":JSON.stringify(currentFilters)},//***********this is a big hole*************** */
            "type":"post",
            "traditional":true,
            "success":function(data){
                dispatch({"type":"ADDFILTER",title,v,data})
              }
        })
    }
}
export const delFilter=(title)=>{ 
    return {"type":"DELFILTER",title}
}