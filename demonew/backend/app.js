const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path")

const postsRoutes = require("./routes/posts")
const app = express();

mongoose.connect("mongodb+srv://pranit:2NEMMsK8ftonE9fk@cluster0-ffnpr.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() =>{
    console.log("Connected to Database");
})
.catch(() =>{
    console.log("connection Failed")
})
;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")))
// 2NEMMsK8ftonE9fk mongodb db pass
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    )
    next();
});

app.use("/api/posts",postsRoutes); 
module.exports = app;
