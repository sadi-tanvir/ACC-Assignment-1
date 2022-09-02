const express = require('express');
const app = express()


// routes
const userRoutes = require('./routes/userRoutes')

// middleware
app.use(express.json())

app.use("/user", userRoutes)


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})