import React from "react"
import {render} from "react-dom"
import BECalender from "./BECalender"
var d=new Date();

var handler = (by,bm,bd,ey,em,ed)=> {
	console.log(by,bm,bd,ey,em,ed)
}

render(
    <div>
        <BECalender onpick={handler} 

        earliest={{ //can not be early than today
            year: d.getFullYear(),
            month:d.getMonth()+1,
            day:  d.getDate()
        }}  

        // latest={{
        //     year: 2021,
        //     month:5,
        //     day:  5
        // }}

        />
    </div>,
    document.getElementById("container")
)