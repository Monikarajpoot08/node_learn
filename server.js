const express = require('express'); //express module ko import krra h

const app = express(); 
const db = require('./db'); 
require('dotenv').config();
const bodyParser = require('body-parser');
 // ye line h jo .env file ko load krti h taki hum usme se environment variables ko access kr sake
app.use(bodyParser.json()); // ye middleware h jo post request me data ko json format me convert krta h 
const PORT = process.env.PORT || 3000; 
// database connection

// ye line h jo .env file ko load krti h taki hum usme se environment variables ko access kr sake

app.get('/', (req, res) => {
  res.send('welcome to our hotel') //response me ye milega 
})
//ek get method jisse pura person ka data milega
// // GET method to get the person data from the database

// importing routers
const personRoutes = require('./routes/personRoutes'); 
app.use('/person', personRoutes);

// importing the routes for the person collection from the personRoutes.js file
const menuRoutes = require('./routes/menuRoutes'); 
// use the routers
app.use('/menu', menuRoutes); 
// ye middleware h jo menuRoutes ko use krta h

// ye line h jo .env file me se PORT variable ko access krti h aur agar wo variable define nahi h to default port 3000 use krti h

// jb koi /menu pr get request bhejega to usse ye milega  

app.listen(PORT, () => {
  console.log('listening on port 3000') // jb server successfully start ho jata h to ye message print hota h
  console.log('Server is running on http://localhost:3000')
})


