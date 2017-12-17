// This module converts the day of the year to the name of the week day.

var getDateFromDayNum = function(dayNum, year){

    var date = new Date();
    if(year){
        date.setFullYear(year);
    }
    date.setMonth(0);
    date.setDate(0);
    var timeOfFirst = date.getTime(); // this is the time in milliseconds of 1/1/YYYY
    var dayMilli = 1000 * 60 * 60 * 24;
    var dayNumMilli = dayNum * dayMilli;
    date.setTime(timeOfFirst + dayNumMilli);
    return date;
}

var pastDate = getDateFromDayNum(350,2017)
console.log(pastDate)
var weekDay = pastDate.getDay()
console.log(weekDay)

var weekName
var convertWeekName = function(weekNumber) {
    switch (weekNumber) {
        case 1:
            weekName = 'Monday'
            break
        case 2:
            weekName = 'Tuesday'
            break
        case 3:
            weekName = 'Wednesday'
            break
        case 4:
            weekName = 'Thursday'
            break
        case 5:
            weekName = 'Friday'
            break
        case 6:
            weekName = 'Saturday'
            break
        case 7:
            weekName = 'Sunday'
            break
    }
}

convertWeekName(3)
console.log(weekName)
