


// get day of week of the first day of a month
const getWeekdayOfFirstDayOfAmonth=(year,month)=>{
    return new Date(year,month-1,1).getDay();
}
//console.log(getWeekdayOfFirstDayOfAmonth(2021,4))

// get days number of previous month
const getPrevMonthDays=(year,month)=>{
    return (new Date(new Date(year,month-1,1)-1)).getDate();
}
//console.log(getPrevMonthDays(2021,3))

// get days number of previous month
const getCurMonthDays=(year,month)=>{
    //return (new Date(new Date(year,month-1,1)+1)).getDate();
    return new Date(year,month,0).getDate();
}
//console.log(getCurMonthDays(2021,3))

const createDateTable=(year,month)=>{

    var rearArr=[23,24,25,26,27,28,29,30,31];
    var curarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var hearArr=[1,2,3,4,5,6,7,8,9,10,11,13,14];

    var weekdayOfFirstDayOfAmonth=getWeekdayOfFirstDayOfAmonth(year,month);
    //console.log(weekdayOfFirstDayOfAmonth)
    var daysOfPrevMonth=getPrevMonthDays(year,month);
    //console.log(daysOfPrevMonth)

    //***get the rest days of the last month
    // ******method1*****
    for (let i = 0; i < 31-daysOfPrevMonth; i++) {
        rearArr.pop();
    }
    rearArr=rearArr.slice(rearArr.length-weekdayOfFirstDayOfAmonth+1)
    //console.log(rearArr)

    //***get current month days
    curarr=curarr.slice(0,getCurMonthDays(year,month));
    //console.log(arr.length)

    //***get the rest days of the next month
    hearArr=hearArr.slice(0,42-curarr.length-rearArr.length)
    //console.log(hearArr)

    return{
        rearArr,
        curarr,
        hearArr
    }


}
//console.log(createDateTable(2021,4))

export default createDateTable;