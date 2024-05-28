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
const posts = require("./routes/post.js");
const { Template } = require("ejs");

app.get("/", (request, response) => {
    response.send("Working on a Master Plan. Stay Tuned")
})

app.get('/users/new', (req, res) => {
    res.sendFile('/views/newUser.html', {
        root: __dirname,
    });
    });
      

//This callback function will use the parameters to find a specific userID
app.get("/users/:id", (request, response,next) => {
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


// Template

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the directory where your views are located
app.set('users', './data/users.js' + '/users');

// Sample data (you can replace this with your actual data)
const username = 'John';
const isAdmin = true;
const hobbies = ['Reading', 'Cooking', 'Gardening'];

// Define a route to render the home page
app.get('/', (req, res) => {
    // Render the 'home.ejs' view with dynamic data
    res.render('home', { username: username, isAdmin: isAdmin, hobbies: hobbies });
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});