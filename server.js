const express = require('express'); //express module ko import krra h

const app = express(); 
// body parser middleware ko use krna h taki hum post request me data bhej sake
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // ye middleware h jo post request me data ko json format me convert krta h 
// database connection
const db = require('./db');
app.get('/', (req, res) => {
  res.send('welcome to our hotel') //response me ye milega 
})
//ek get method jisse pura person ka data milega
// // GET method to get the person data from the database
// importing routers
const personRoutes = require('./routes/personRoutes'); // importing the routes for the person collection from the personRoutes.js file
const menuRoutes = require('./routes/menuRoutes'); 
// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes); 
// ye middleware h jo menuRoutes ko use krta h
  
// jb koi /menu pr get request bhejega to usse ye milega  

app.listen(3000, () => {
  console.log('listening on port 3000') // jb server successfully start ho jata h to ye message print hota h
  console.log('Server is running on http://localhost:3000')
})


