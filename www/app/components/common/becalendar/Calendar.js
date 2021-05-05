import React from "react"
import { Component } from "react";
import createDateTable from "./createDateTable"
import YearMonthPicker from "./YearMonthPicker"
import "../../../../assets/jquery-mousewheel/jquery.mousewheel"

class Calendar extends Component{
    constructor({onpick,year,month,day}){
        super()
        this.state={
            year,
            month,
            day,
            showPicker : false
        }
    }

    showDateTable(){

        var {rearArr,curarr,hearArr} = createDateTable(this.state.year,this.state.month);
        var dateArr = rearArr.concat(curarr).concat(hearArr);
        var trs=[];
        var tds=[];
        //console.log(this.state.dateArr);

        let classname=(day,index)=>{

            //console.log(this.props)
            var theday=new Date(this.state.year,this.state.month,day);
            //console.log(this.props.earliest)
            if(this.props.earliest){
                var earliestdate= new Date(this.props.earliest.year,this.props.earliest.month,this.props.earliest.day);
                if((theday-earliestdate)<0){
                    return "gray earliestinvalid"
                }
            }
            if(this.props.latest){
                var latestdate= new Date(this.props.latest.year,this.props.latest.month,this.props.latest.day);
                if((theday-latestdate)>0){
                    return "gray latestinvalid"
                }
            }
            
            if(index<rearArr.length){
                return "gray prev"
            }else if(index>(curarr.length+rearArr.length-1)){
                return "gray next"
            }else{
                if(day==this.state.day){
                    return "incurmonth cur"
                }
                return "incurmonth"
            }
        }

        dateArr.forEach((day,index) => {
            if(index%7==0 && index!=0){
                trs.push(<tr key={index}>{tds}</tr>)
                tds=[];
            }
            // tds.push(<td key={index} className={index<rearArr.length || index>(curarr.length+rearArr.length-1) ? "gray" : ""}>{day}</td>)
            tds.push(<td key={index} data-day={day} className={classname(day,index)}>{day}</td>)
        });
        trs.push(<tr key={5}>{tds}</tr>)
        return (<tbody>{trs}</tbody>)
    }

    goNextMonth(){

        if(this.state.month!=12){
            this.setState({
                month:this.state.month+1
            })
        }else{
            this.setState({
                month:1,
                year:this.state.year+1
            })
        }

        this.setState({day:0})
    }

    goPrevMonth(){

        if(this.state.month!=1){
            this.setState({
                month:this.state.month-1
            })
        }else{
            this.setState({
                month:12,
                year:this.state.year-1
            })
        }

        this.setState({day:0})
    }

    // month year select event, recieve year and month from sub component
    onpick({year,month}){
       this.setState({
            showPicker : false , 
            year,
            month
       })
    }

    showpicker(){
		if(this.state.showPicker){
			return 	<YearMonthPicker year={this.state.year} month={this.state.month} onpick={(this.onpick).bind(this)}></YearMonthPicker>;
		}else{
			return "";
		}
	}

    componentDidMount(){
        var self=this;
        //bind .prev event
        $(this.refs.table).delegate("td.prev","click",function(){
              self.goPrevMonth();
        })
        //bind .next event
        $(this.refs.table).delegate("td.next","click",function(){
            self.goNextMonth();
        })

        //bind .incurmonth event
        $(this.refs.table).delegate("td.incurmonth","click",function(){
            self.setState({
                day:Number($(this).attr("data-day"))
            })
            //sent back to BE...
            self.props.onpick(self.state);
        })

        $(this.refs.table).mousewheel(function(event,delta){
            //console.log(delta);
            if(delta>0){
               self.goPrevMonth()
            }else{
                self.goNextMonth()
            }
        })
    }

    render(){

        return(
            <div className="calendarChooser">
                <h4 onClick={()=>{this.setState({showPicker : true})}}>
                    {/* <a>Last Month</a> */}
                    {this.state.year} - {this.state.month}
                    {/* <a onClick={(this.goNextMonth).bind(this)}>Next Month</a> */}
                </h4>
                <a className="leftBtn" onClick={(this.goPrevMonth).bind(this)}></a>
                <a className="rightBtn" onClick={(this.goNextMonth).bind(this)}></a>

                {this.showpicker()}
                
                <table ref="table"> 
                    <thead>
                        <tr>
                            {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((item,index)=>{
                                return <th key={index}>{item}</th>
                            })}
                        </tr>
                    </thead>
                   
                    {this.showDateTable()}

                </table>
            </div>
        )
    }
}

export default Calendar;