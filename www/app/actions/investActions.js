export const fetchInitData=(title)=>{return (dispatch)=>{
    $.get("/api/"+title+".json", function(data){
        dispatch({"type":"FETCHINITDATA", "title" : title, "data" : data})
    })
} }