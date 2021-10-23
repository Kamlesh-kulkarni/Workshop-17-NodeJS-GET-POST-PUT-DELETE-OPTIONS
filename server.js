const express = require('express');
const app = express()
const cors = require('cors');
const connectDb = require('./db/conn')
app.use(express.json());
app.use(cors())
connectDb();
const User = require('./model/schema')


app.post("/create-users", (req,res)=>{
  const { id,
    first_name,
    last_name,
    email,
    gender} = req.body;
  const user  = User.create({
    id,
    first_name,
    last_name,
    email,
    gender
  })
  if(user){
    res.status(200).json({
      email:user.email
    })
  }
  else{
    res.status(404).json({
      Message:"Error Occured During Creating a user"
    })
  }
})

// post
app.post("/users", function (req, res) {
    User.find({}, function (err, docs) {
      if (err) res.json(err);
      else res.json(docs);
    });
  });

// get
app.get("/users", function (req, res) {
    User.find({}, function (err, docs) {
      if (err) res.json(err);
      else res.json(docs);
    });
  });

  // put
app.put("/users", function (req, res) {
    User.find({}, function (err, docs) {
      if (err) res.json(err);
      else res.json(docs);
    });
  });

  // delete
app.delete("/users", function (req, res) {
    User.find({}, function (err, docs) {
      if (err) res.json(err);
      else res.json(docs);
    });
  });

  // options
app.options("/users", function (req, res) {
    User.find({}, function (err, docs) {
      if (err) res.json(err);
      else res.json(docs);
    });
  });
  
app.listen(3000, () => console.log("Running at the port 3000"))

