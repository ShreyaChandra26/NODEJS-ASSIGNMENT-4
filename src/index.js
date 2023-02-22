// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here

// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());



app.get("/", (req, resp) => {
  resp.send("Hello World");
});



app.post("/add", (req, resp) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);


  if (num1 > 1000000 || num2 > 1000000) {
      resp.send("underflow");
    }
  else if(isNaN(num1) || isNaN(num2)){
    resp.send("Invalid data types")
  }

  

  



  let sum = Number(num1 + num2);
  if(sum>1000000){
    resp.send("overflow")
  }

  resp.send("The sum of given numbers" + " " + Number(sum));

});



app.post("/sub", (req, resp) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);


  

  if (num1 > 1000000 || num2 > 1000000) {
    resp.send("underflow");
  }
  else if(isNaN(num1) || isNaN(num2)){
  resp.send("Invalid data types")
  }


   
    
  


  let sub = Number(num1 - num2);
 

  resp.send("The difference of given numbers" + " " + Number(sub));
});



app.post("/multiply", (req, resp) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);



  if (num1 > 1000000 || num2 > 1000000) {
    resp.send("underflow");
  }
  else if(isNaN(num1) || isNaN(num2)){
  resp.send("Invalid data types")
  }


  


  let product = Number(num1 * num2);
 
  resp.send("The product of given numbers" + " " + Number(product));
});



app.post("/divide", (req, resp) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);


   if (num1 > 1000000 || num2 > 1000000) {
      resp.send("overflow");
    }
   else if (num2 === 0) {
    resp.send("Cannot divide by zero");
  
   }
   else if(isNaN(num1) || isNaN(num2)){
     resp.send("Invalid data types")
   }


  let divide = Number(num1 / num2);
  
  resp.send("The division of given numbers" + " " + Number(divide));
});



app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
