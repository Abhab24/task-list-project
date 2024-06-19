const express = require('express');
const app= express();
const tasks = require('./Routes/tasks')//importing a router handler 

// when we will be creating a new task we will be passing JSON data from our application to the server via POST request,the JSON data is included in the body of the HTTP request 
//middleware parses the json data to json object 
//so that ur route can access it using req.body ()
app.use(express.json());

//routes

//accessing the route from route handler using use fn
//app.use(path for which we want this route,route_name)
app.use('/api/v1/tasks',tasks);



const port = 3000;

app.listen(port, console.log('server is listening on port ${port}...')) 