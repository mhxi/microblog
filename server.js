// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var db = require('./models/index.js');

// CONFIG //

// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES //

// read all blog posts
app.get('/api/posts', function (req, res){
    db.Post.find({}, function (err, posts){
        if (err) console.log(err);
        res.render('index', {
            posts: posts
          });
      });
  });

// read one blog post
app.get('/api/posts/:_id', function (req, res){
    console.log('post id is: ', req.params);
    db.Post.find({
      _id: req.params._id
    }, function (err, post){
      console.log("post retrieved");
      res.json(post);
      });
  });

// create a new blog post
app.post('/api/posts', function (req, res){
    console.log(req.body);
    db.Post.create(req.body, function (err, post){
        if (err) {
            console.log(err);
        }
        res.json(post);
    });
});

// delete a single blog post
app.delete('/api/posts/:_id', function (req, res){
    console.log('post id is: ', req.params);
    db.Post.find({
        _id: req.params._id
      }).remove(function (err, post){
        console.log("post deleted");
        res.json("That post is gone");
      });
  });

app.listen(3000, function(){
  console.log("listening on port 3000");
});