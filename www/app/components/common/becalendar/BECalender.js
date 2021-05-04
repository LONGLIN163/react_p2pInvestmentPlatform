import React from "react"
import { Component } from "react";
import Calendar from "./Calendar"


class BECalender extends Component{
    constructor({byear,bmonth,bday,eyear,emonth,eday}){
        super()
        var d=new Date();
        this.state={
            // byear,bmonth,bday,eyear,emonth,eday,
            // bshowCalendar:false,  
            // eshowCalendar:false, 
            // showChooseBox:false
            byear: d.getFullYear(),
            bmonth:d.getMonth()+1,
            bday:  d.getDate(),
            bshowCalendar:false,
                
            eyear:d.getFullYear(),
            emonth:d.getMonth()+1,
            eday:d.getDate(),
            
            eshowCalendar:false, 

            showChooseBox:false
            
        }
    }

    onpick1({year,month,day}){
       this.setState({
            byear:year,
            bmonth:month,
            bday:day,
            bshowCalendar:false 
       })
    }
    onpick2({year,month,day}){
       this.setState({
            eyear:year,
            emonth:month,
            eday:day,
            eshowCalendar:false 
       })
    }

    showCalendar1(){
        var props={
           year:this.state.byear,
           month:this.state.bmonth,
           day:this.state.bday
        }

        
        if(this.state.bshowCalendar){
            //******becarefull those two props r different***** */
            return <Calendar {...props} {...this.props} onpick={(this.onpick1).bind(this)} ></Calendar>
        }
    }

    showCalendar2(){
        var props={
            year:this.state.eyear,
            month:this.state.emonth,
            day:this.state.eday 
         }
        if(this.state.eshowCalendar){
            return <Calendar {...props} onpick={(this.onpick2).bind(this)} ></Calendar>
        }
    }

    dataGap(){

		var date1 = new Date(this.state.byear,this.state.bmonth,this.state.bday);
		var date2 = new Date(this.state.eyear,this.state.emonth,this.state.eday);
		var gap = date2 - date1;

		var gday = gap / 1000 / 60 / 60 / 24;

		return <div>{gday}days</div>
    }

    componentDidMount(){
        var self=this;

        $("html").click(function(e){
            var $o=$(self.refs.BECalender);
            //console.log($(e.target).parents($o).length)
            if($(e.target).parents($o).length==0){ // means click outside of this element
               self.setState({ // when click outside, close all
                   showChooseBox:false,
                   bshowCalendar:false,
                   eshowCalendar:false,
               })
            }
        })
    }

    // shouldComponentUpdate(nextProps, nextState){
    /*
    componentWillUpdate(props, state){
        //console.log("state",state)
        this.props.onpick(
        this.state.byear,
        this.state.bmonth,
        this.state.bday,
        this.state.eyear,
        this.state.emonth,
        this.state.eday)

     }*/

     onpick(){
        this.props.onpick(
        this.props.title,{
            byear:this.state.byear,
            bmonth:this.state.bmonth,
            bday:this.state.bday,
            eyear:this.state.eyear,
            emonth:this.state.emonth,
            eday:this.state.eday
          },
          this.props.nicktitle
        )
     }

    showChooseBox(){
       return <div className="chooseBox">
                    <input type="button" value="confirm" className="submitbtn" onClick={()=>{
                        this.setState({ showChooseBox:false });
                        this.onpick();
                    }}/>
                    <div className="begin">
                         start:
                         <div className="begin_result result">
                             <div onClick={()=>{this.setState({ "bshowCalendar":!this.state.bshowCalendar })}}>
                                {this.state.byear}-{this.state.bmonth}-{this.state.bday}
                                <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                             </div>
                            {/* <Calendar {...this.state.b} onpick={(this.onpick1).bind(this)}></Calendar> */}
                            {this.showCalendar1()}
                         </div>
                    </div>
                    <div className="days">
                       {this.dataGap()}
                    </div>
                    <div className="end">
                         end:
                         <div className="end_result result">
                             <div onClick={()=>{this.setState({ "eshowCalendar":!this.state.eshowCalendar })}}>
                              {this.state.eyear}-{this.state.emonth}-{this.state.eday}
                                <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                             </div>
                            {/* <Calendar {...this.state.e} onpick={(this.onpick2).bind(this)}></Calendar> */}
                            {this.showCalendar2()}
                         </div>
                    </div>
                </div>

    }

    render(){
        return(
            <div className="BECalender" ref="BECalender">
                <div className="result" onClick={()=>{this.setState({ showChooseBox:!this.state.showChooseBox })}}>
                {this.state.byear}/{this.state.bmonth}/{this.state.bday}-{this.state.eyear}/{this.state.emonth}/{this.state.eday}
                    <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                </div>
                
                {this.state.showChooseBox && this.showChooseBox()}

            </div>
        )
    }
}

export default BECalender;