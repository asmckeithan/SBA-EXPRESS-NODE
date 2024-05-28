//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require("express")
// initialiing the express framework and storing it as a variable 
const app = express();
//assigning the port number for our server 
const PORT = 4000

// ------------------------------------Routes------------------------------
//importing data from our database files 
const userRouter = require('./routes/users.js')
const posts = require("./routes/post.js")

app.get("/", (request, response) => {
    response.send("Working on a Master Plan. Stay Tuned")
})

//This callback function will use the parameters to find a specific userID
app.get("/users", (request, response,next) => {
    const user = users.find((u) => u.id == request.params.id) 
        if (user) {response.json(user);
        }else{ next()

    }
})


// ------------------------------------Middleware------------------------------
app.use ((request,  response, next ) => {
    console.log(`Time`, Date.now)
    next()
})//request a time stamp every time a request is received 

// Checking to make sure request is listening 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
//Checking Status 
app.get("/status", (request, reposne) => {
    const status = {
        "Status": "Running"
    };
    reposne.send(status)
})

