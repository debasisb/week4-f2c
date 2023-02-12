//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

// this code is only invoked on the path /f2c
app.get("/f2c", function(req, res){
  res.sendFile(__dirname + "/f2cCalc.html");
});

// invoked on the submit button using form action Post
app.post("/f2c", function(req, res){

//converts the string input in the form to an integer
  var F_Temp = parseInt(req.body.F_Temp);

// does the computation of f2c - note parenthesis!
  var C_Temp = ((F_Temp - 32) * 5/9);

//display the result in Centigrade with zero decimal places. I wrote this new comment to update my Repo
res.send(F_Temp + " Fahrenheit is " + C_Temp.toFixed(0) + " in Centigrade");

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
