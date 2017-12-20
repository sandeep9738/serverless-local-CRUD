# serverless-local-CRUD
Creating serverless local application to perform simple CRUD operation using MYSQL database

This example demonstrates how to run a serverless locally. It provides a REST API to manage CRUD operation in mysql database.

Setup

  npm install
  
  For Database
    Edit your preferences in localdev of env.json file which is located inside the config folder.
  

To Run

Create 
  Command:
    serverless invoke local --function create --data '{"data" : "value", "data" : "value"}

ListAll 
  Command:
    sls invoke local --function list
    
ListSpecific 
  Command:
    sls invoke local --function get --data '{ "data" : "value" }'

Update 
  Command:
    serverless invoke local --function update --data '{ "data" : "value" ,  "data" : "value" ,  "data" : "value" }'

Delete 
  Command:
    sls invoke local --function delete --data '{ "data" : "value" }'





    
 







