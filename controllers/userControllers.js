const users = require('../users.json')



// get a random user
module.exports.getSingleUser = (req, res) => {
    // create random index
    const randomId = Math.floor(Math.random() * (users.length - 0 + 0)) + 0;

    // find user from database
    const user = users.find((user) => {
        return user.id === users[randomId].id
    })

    res.json({
        user
    })
}

// get all users data
module.exports.getAllUsers = (req, res) => {
    const limitUser = req.query.s

    res.json({
        user: limitUser ? users.slice(0, limitUser) : users
    })
}

// create a user
module.exports.createUser = (req, res) => {
    const { id, gender, name, address, contact, photoUrl } = req.body;

    // validation
    if (!id || !gender || !name || !address || !contact || !photoUrl) return res.json({ message: "All Fields are required!" })

    // create user
    users.push(req.body)

    res.json({
        message: "User Created Successfully."
    })
}

// Update a random user
module.exports.updateUser = (req, res) => {
    const userId = req.params.id

    // validation
    if (typeof userId !== "string") return res.json({ message: "User Type Not Supported." })

    // update user information
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            users[i].name = req.body.name || users[i].name
            users[i].gender = req.body.gender || users[i].gender
            users[i].address = req.body.address || users[i].address
            users[i].contact = req.body.contact || users[i].contact
            users[i].photoUrl = req.body.photoUrl || users[i].photoUrl
        }
    }

    res.json({
        message: "User Updated Successfully."
    })
}



// Update a random user
module.exports.updateMultipleUser = (req, res) => {

    // update multiple user information
    for (var i = 0; i < req.body.length; i++) {
        for (var j = 0; j < users.length; j++) {
            if (users[j].id == req.body[i].id) {
                users[j].name = req.body[i].name || users[j].name
                users[j].gender = req.body[i].gender || users[j].gender
                users[j].address = req.body[i].address || users[j].address
                users[j].contact = req.body[i].contact || users[j].contact
                users[j].photoUrl = req.body[i].photoUrl || users[j].photoUrl
            }
        }
    }
    
    res.json({
        message: "Multiple Users Updated Successfully."
    })
}

// Update a random user
module.exports.deleteUser = (req, res) => {

    let userId = req.params.id

    // validation
    if (typeof userId !== "string") return res.json({ message: "User Type Not Supported." })

    for (var i = users.length - 1; i >= 0; i--) {
        if (users[i].id == userId) {
            users.splice(i, 1)
        }
    }

    res.json({
        message: "User Deleted Successfully."
    })
}