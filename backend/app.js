const path = require("path");
const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');

const driverRoutes = require('./routes/drivers');
const bookingRoutes = require('./routes/booking');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://minipro:miS9YUvYhQmUvYZc@cluster0-6lomq.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then( ()=>{
  console.log('Connected to database');
})
.catch(()=>{
  console.log(console.error());
  console.log("error Ocuured");
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join("./backend/images")));

app.use(       //CORS
  (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*") ;
      res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS");
      next();
});

app.use("/api/driver",driverRoutes);
app.use("/api/book",bookingRoutes);
app.use("/api/user",userRoutes);

module.exports = app;
