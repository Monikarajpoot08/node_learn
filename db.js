//this file is responsible for connecting to the database
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL= process.env.MONGODB_URL; // ye line h jo .env file me se DB_URL_LOCAL variable ko access krti h aur usse MONGODB_URL_LOCAL variable me store krti h and if DB_URL_LOCAL variable is not defined then it will use the DB_URL variable;
mongoose.connect(mongoURL, { 
    
     });
//mongoose.connection object ko db variable me store krliya h taaki hum uske through connection events ko handle kr sake
// connection  events ko handle krne ke liye hum db variable ka use krte h and to interact with the database
const db=mongoose.connection;
    // event listeners for successful connection or error
    // ye event listeners h jo connection events ko handle krte h
    // jb tumhara database successfully connect ho jata h to ye event trigger hota h and uske baad hum console me message print krte h
db.once('connected', function() {
      console.log('Connected to MongoDB successfully!');
      console.log('Connected to host:', db.host);
      console.log('Connected to port:', db.port);
      console.log('Connected to database:', db.name);
    }); 
    //similarly, agar connection me koi error aata h to ye event trigger hota h and uske baad hum console me error message print krte h
db.on('error', function(err) {
      console.log('Error connecting to MongoDB:', err);
    });
    // agar connection disconnect ho jata h to ye event trigger hota h and uske baad hum console me message print krte h
db.on('disconnected', function() {
      console.log('Disconnected from MongoDB');
    });
    // to connect to the database, we need to export the db variable so that we can use it in other files like server.js
module.exports = db;

     