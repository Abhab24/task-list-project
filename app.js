//setting up the EXPRESS SERVER and CONNECTS to the DATABASE before starting the server

const express = require("express");
const app = express();
const tasks = require("./Routes/tasks"); //importing a router handler
const connectDB = require("./db/connect");
require('dotenv').config();

//Middlewares
// when we will be creating a new task we will be passing JSON data from our application to the server via POST request,the JSON data is included in the body of the HTTP request
//middleware parses the json data to json object
//so that ur route can access it using req.body ()
app.use(express.static('./public'))
app.use(express.json());

//accessing the route from route handler using use fn
//app.use(path for which we want this route,route_name)
app.use("/api/v1/tasks", tasks);

const port = 3000;

//Connecting to db and starting server
//Inside the try block, we await the connectDB function to ensure the database connection is established before starting the server
//If the connection is successful, the server starts listening on the specified port, and a success message is logged.
//If there is an error during the database connection, it is caught and logged in the catch block
const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI)//connects to mongo db
        app.listen(port, () => console.log(`server is listening on port ${port}...`));//starts the server
    } catch(err){
       console.log(err);
    }
}

start();

