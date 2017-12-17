var AWS = require('aws-sdk')
AWS.config.update({region: 'eu-west-1'})

ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})

