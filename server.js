const express = require("express");
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());

// variables
const PORT = 3000;
const data = {
    name:"jahid",
    course:"docker",
}

// routes
app.get('/', (req, res)=>{
    res.status(200).json(data)
})

// server
app.listen(PORT, ()=>{
    console.log(`Server is listening at the port ${PORT}`);
})