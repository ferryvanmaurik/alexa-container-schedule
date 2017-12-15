var Alexa = require('alexa-sdk')

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
  };

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

const fs = require('fs');

var fetchData = function () {
    var dataString = fs.readFileSync('data.json')
    return JSON.parse(dataString)
}

var checkSchedule = function (day) {
    var schedules = fetchData()
    var whichContainer = schedules.filter(function (schedule) {schedule.day === day
    })
    console.log(whichContainer[0].containerType)
}

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', )
    }
}

checkSchedule(day)