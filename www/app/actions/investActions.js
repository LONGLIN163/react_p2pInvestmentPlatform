// export const fetchInitData=()=>{return (dispatch)=>{
//     $.get("/api/"+"filters.json", (data)=>{
//         console.log("data",data)
//         dispatch({"type":"FETCHINITDATA", "data" : data})
//     })
// } }
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
export const addFilter=(title,v,nicktitle)=>{ 
    return {"type":"ADDFILTER",title,v,nicktitle}
}
export const delFilter=(title)=>{ 
    return {"type":"DELFILTER",title}
}