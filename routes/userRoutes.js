const { getAllUsers, getSingleUser, createUser, updateUser,deleteUser, updateMultipleUser } = require('../controllers/userControllers');

const router = require('express').Router()


// get a random user
router.get("/random", getSingleUser)

// get all users data
router.get("/all", getAllUsers)

// create a user
router.post("/save", createUser)

// Update a random user
router.patch("/update/:id", updateUser)

// Update a random user
router.patch("/bulk-update", updateMultipleUser)

// delete a random user
router.delete("/delete/:id", deleteUser)


module.exports = router;