const express = require("express");
const app = express();

/**
 * GET endpoint, providing hi world
 * 
 * @param
 * @returns
 */

app.get("/", (req, res) => {
     res.send({ message: "hi world"})
})

app.listen(3000, (err) =>{
    if(!err) {
        console.log("running on port" + 3000)
    }
    else {
        console.error(err)
    }
})