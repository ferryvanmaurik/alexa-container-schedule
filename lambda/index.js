var fs = require('fs');
var Alexa = require('alexa-sdk')
var components = require('./components')


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
  };

// Get day of year
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var yesterday = day - 1 //Used for reminding day before

var color = components.checkSchedule(day)
console.log(color)

// ask will keep the session open.
// tell will close the session.
var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Hi Ferry, what would you like to know about the containers?', 'Try asking if today a container needs to go outside')
    },

    'ContainerSchedule': function (color) {
        if (day)
        this.emit(':tell', `Today the ${color} needs to go outside`)
        else {
            this.emit(':tell', 'No, today not')
        }
    }
}
