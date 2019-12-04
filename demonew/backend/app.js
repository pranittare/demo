const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const Post = require('./models/post')

const app = express();

mongoose.connect("mongodb+srv://pranit:LlTcXcGYGBl37iDQ@cluster0-auzy7.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() =>{
    console.log('connected to database');
})
.catch(() =>{
    console.log('connection failed')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'GET, POST, PATCH, DELETE, OPTIONS, PUT'
        )
    next();
});

app.post('/api/posts',(req, res, next) =>{
    const post = new Post({
        content: req.body.content
    });
    console.log(post);
    post.save().then(createdPost =>{
        res.status(201).json({
            message: 'Post added sucessfully',
            postId: createdPost._id        
        });
    })


});
//LlTcXcGYGBl37iDQ 


app.get('/api/posts' ,(req, res, next) =>{
    Post.find()
        .then(documents =>{
            // console.log(documents)
            res.status(200).json({
                message: 'Posts fetech successfully!!!',
                posts: documents
            });
        });

});

app.delete('/api/posts/:id',(req, res, next) =>{
    Post.deleteOne({_id: req.params.id}).then(result =>{
        console.log(result);
        res.status(200).json({
            message: 'post Deleted'
        })
    })

})

module.exports = app;