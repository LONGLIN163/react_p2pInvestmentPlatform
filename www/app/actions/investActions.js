export const fetchInitData=()=>{return (dispatch)=>{
    $.get("/api/"+"filters.json", function(data){
        dispatch({"type":"FETCHINITDATA", "data" : data})
    })
} }
export const addFilter=(title,v)=>{ 
    return {"type":"ADDFILTER",title,v}
}
export const delFilter=(title)=>{ 
    return {"type":"DELFILTER",title}
}