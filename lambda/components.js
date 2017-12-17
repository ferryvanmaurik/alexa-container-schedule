var fs = require('fs');

// Get data from json file, later this will be vfrom DynamoDB
var fetchData = function () {
    var dataString = fs.readFileSync('data.json')
    return JSON.parse(dataString)
}

// Check if with the day of year number a match is for which color container
var checkSchedule = function (day) {
    var schedules = fetchData()
    var whichContainer = schedules.filter((schedule) => schedule.day === day)
    return whichContainer[0].containerType
}

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
//console.log(pastDate)
var weekDay = pastDate.getDay()
//console.log(weekDay)

var weekName = function(weekNumber) {
    switch (weekNumber) {
        case 1:
            dayName = 'Monday'
            break
        case 2:
            dayName = 'Tuesday'
            break
        case 3:
            dayName = 'Wednesday'
            break
        case 4:
            dayName = 'Thursday'
            break
        case 5:
            dayName = 'Friday'
            break
        case 6:
            dayName = 'Saturday'
            break
        case 7:
            dayName = 'Sunday'
            break
    }
}

// weekName(3)
// console.log(weekName)


module.exports = {
    checkSchedule,
    weekName

}