const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


// routes
const userRoutes = require('./routes/userRoutes')

// middleware
app.use(cors())
app.use(express.json())

app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Our Site!"})
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})