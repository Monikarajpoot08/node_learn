const express = require('express'); //express module ko import krra h

const app = express(); 
const db = require('./db'); 
const bodyParser = require('body-parser');
 // ye line h jo .env file ko load krti h taki hum usme se environment variables ko access kr sake
app.use(bodyParser.json()); // ye middleware h jo post request me data ko json format me convert krta h 


app.get('/', (req, res) => {
  res.send('welcome to our hotel') 
})
const personRoutes = require('./routes/personRoutes'); 
app.use('/person', personRoutes);


const menuRoutes = require('./routes/menuRoutes'); 


app.use('/menu', menuRoutes); 

app.listen(3000, () => {
  console.log('listening on port 3000') // jb server successfully start ho jata h to ye message print hota h
  console.log('Server is running on http://localhost:3000')
})

 
