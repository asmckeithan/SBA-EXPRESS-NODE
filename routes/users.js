const express = require("express");
const router = express.Router();
const users = require('../data/user.js');


//Creating a route for all users 
router.get('/', (request, reposne) => {
    const links = [
        {
            href: 'user/:id',
            rel: ':id',
            type: 'GET',
        }
    ]
    response.json({users,links})
})


module.exports = router;











module.exports = users;