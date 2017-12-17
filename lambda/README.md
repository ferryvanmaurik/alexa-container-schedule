# alexa-container-schedule

Reads schedule from dynamo db for all 4 containers and send reminder to alexa

Alexa, does the container needs to go outside today?
    Yes, the {color} container need to go outside today
    No, None of the contaners need to go outside today

Alexa, when does the {color} container need to go outsite?
    The {color} container needs to go outside {date} 

Alexa, which container needs to go outside this week?
    This week no container needs to go outside
    This week the {color} needs to go outside
    This week {numberOfContainers} containers need to go outside, the {color} and the {color} container


Version 1.0 functional requirements:

As a user I want to als Alexa if today any container needs to go outsite. Alexa can tel me yes and which color or no.

Technical requirements:

Read a json file and get a color or none.


