var reminders = require('alexa-reminders')

reminders.login('Ferry Echo Dot', 'ferry@softwareness.nl', 'Piyawan29', function(error, response, config){
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, config, function(error, response){
    console.log(response)
  })
})