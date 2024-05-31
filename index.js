//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require("express")
// initialiing the express framework and storing it as a variable 
const app = express();
app.use(express.json());
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


app.get('/user', (req, res) => {
    res.send('Received a GET request for user!');
  });
  
app.get('/user/:userID/profile/:data', (req, res) => {
    console.log(req.params);
    res.send(
      `ROUTED TO USER PROFILE PAGE: ${req.params.userID} with the data of ${req.params.data}`
    );
  });
  

//This callback function will use the parameters to find a specific userID
app.get("/users/:id", (request, response,next) => {
    const user = users.find((u) => u.id == request.params.id) 
        if (user) {response.json(user);
        }else{ next()

    }
})

app.get('/', (req, res) => {
    res.render('index', { items });
});

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
    const newData = req.body.item;
    items.push(newData);
    saveData();
    res.json({ message: 'Item added successfully', newData });
});

// Update an item
app.put('/api/items/:id', (req, res) => {
    const id = req.params.id;
    const updateItem = req.body.item;
    items[id] = updateItem;
    saveData();
    res.json({ message: `Item ${id} updated successfully`, updateItem });
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    saveData();
    res.json({ message: `Item ${id} deleted successfully` });
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});


// ------------------------------------Middleware------------------------------
app.use ((request,  response, next ) => {
    console.log(`Time`, Date.now)
    next()
})//request a time stamp every time a request is received 

// Checking to make sure request is listening 

//Checking Status 
app.get("/status", (request, res) => {
    const status = {
        "Status": "Running"
    };
    response.send(status)
});


// // Template (Error occured and still learning how to project this throughout my code )
// // const express = require('express');
// // const app = express();


// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// // Specify the directory where your views are located
// app.set('view', './view/users.ejs' + '/users');

// // Sample data (you can replace this with your actual data)
// const username = 'John';
// const isAdmin = true;
// const hobbies = ['Reading', 'Cooking', 'Gardening'];

// // Define a route to render the home page
// app.get('/view/template', (req, res) => {
//     // Render the 'home.ejs' view with dynamic data
//     res.render('home', { username: username, isAdmin: isAdmin, hobbies: hobbies });
// });


// // // Start the server
// // app.listen(3000, () => {
// //     console.log('Server is running on port 3000');
// // });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })