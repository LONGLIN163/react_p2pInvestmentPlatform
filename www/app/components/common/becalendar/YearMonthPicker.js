import React from "react"
import { Component } from "react";
import PropTypes from 'prop-types';
import "../../../../assets/jquery-mousewheel/jquery.mousewheel"

class YearMonthPicker extends Component{

    // static propTypes = {
    //     onpick: PropTypes.func.isRequired
    // };

    constructor({onpick,year,month}){
        super()
        this.state={
            year:year,
            month:month,
            currentYear:2021
        }

        console.log({onpick,year,month})
        this.currentYear=this.state.currentYear;
    }


    rrBtnHandler(currentYear){
        var self=this;
        ++self.currentYear;

        //******.stop(true,true) resolve the bug******** */
        $(this.refs.span_container).append($(`<span >${self.currentYear+2}</span>`)).stop(true,true).animate({"left":-38},300,function () { 
            $(this).find("span").eq(0).remove(); // remove the first one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(1).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })

        // do not want to fix year fist. so when change the year, dont select month until u select one
        $(this.refs.month_panel).find("a").removeClass("cur");
        if(self.currentYear==self.state.year){
           $(".month_panel").find("a").eq(self.state.month-1).addClass("cur");
        }

        console.log(self.currentYear,self.state.year);
    }

    componentDidMount(){
        $(this.refs.month_panel).find("a").removeClass("cur");
        if(this.currentYear==this.state.year){
           $(".month_panel").find("a").eq(this.state.month-1).addClass("cur");
        }

        var self=this;
        $(this.refs.span_container).mousewheel(function(event,delta){
            //console.log(delta);
            if(delta>0){
               self.llBtnHandler()
            }else{
                self.rrBtnHandler()
            }
        })

        // month click event(a)
        $(this.refs.month_panel).find("a").click(function(){
            self.setState({
                year:self.currentYear,
                month:Number($(this).attr("data-month"))
            })
            self.props.onpick(self.state);
        })

        // year click event(a)
        $(this.refs.span_container).delegate("span","click",function(event){
			event.preventDefault();
			if($(this).index() > 2){
				let a = $(this).index() - 2;
				while(a){
					a--;
					self.rrBtnHandler();
				}
			}else if($(this).index() < 2){
				let a =  2 - $(this).index();
				while(a){
					a--;
					self.llBtnHandler();
				}
			}
			return false;
		});

    }

    llBtnHandler(currentYear){
        var self=this;
        --self.currentYear;

        $(this.refs.span_container).prepend($(`<span >${self.currentYear-2}</span>`)).stop(true,true).animate({"left":38},300,function () { 
            $(this).find("span").eq(-1).remove();//remove the last one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(3).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })

        // do not want to fix year fist. so when change the year, dont select month until u select one
        $(".month_panel").find("a").removeClass("cur");
        if(self.currentYear==self.state.year){
           $(".month_panel").find("a").eq(self.state.month-1).addClass("cur");
        }
        //console.log(self.currentYear,self.state.year);
        

    }

    render(){
        //var currentYear=this.state.currentYear;
        return(
            <div className="YearMonthPicker">
                <div className="inner">
                     <div className="year_panel">
                         <div className="panel_inner">
                             <div className="span_container" ref="span_container">
                                <span >{this.currentYear-2}</span>
                                <span >{this.currentYear-1}</span>
                                <span className="cur">{this.currentYear}</span>
                                <span >{this.currentYear+1}</span>
                                <span >{this.currentYear+2}</span>
                             </div>
                         </div>
                         <i className="ll" onClick={()=>{this.llBtnHandler()}}></i>
                         <i className="rr" onClick={()=>{this.rrBtnHandler()}}></i>
                     </div>
                     <div className="month_panel" ref="month_panel">
                         <div className="col">
                             <a data-month="1">Jan</a>
                             <a data-month="2">Feb</a>
                             <a data-month="3">Mar</a>
                             <a data-month="4">Apr</a>
                             <a data-month="5">May</a>
                             <a data-month="6">Jun</a>
                             {/* <a className={this.state.year==this.currentYear && this.state.month=="6" ? "cur":""}>Jun</a> */}
                         </div>
                         <div className="col">
                             <a data-month="7">Jul</a>
                             <a data-month="8">Aug</a>
                             <a data-month="9">Sept</a>
                             <a data-month="10">Oct</a>
                             <a data-month="11">Nov</a>
                             <a data-month="12">Dec</a>
                         </div>
                     </div>
                </div>
            </div>
        )
    }
}

YearMonthPicker.propTypes = {
    onpick: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
};
 

export default YearMonthPicker;