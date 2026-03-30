//this file is responsible for connecting to the database
const mongoose = require('mongoose');
//define url for mongodb connection
// connection bw database and server
// it is the mandatory step to connect to the database before performing any database operations
const mongoURL = 'mongodb://localhost:27017/hotels';
mongoose.connect(mongoURL, { 
     });
//mongoose.connection object ko db variable me store krliya h taaki hum uske through connection events ko handle kr sake
// connection events ko handle krne ke liye hum db variable ka use krte h and to interact with the database
const db=mongoose.connection;
    // event listeners for successful connection or error
    // ye event listeners h jo connection events ko handle krte h
    // jb tumhara database successfully connect ho jata h to ye event trigger hota h and uske baad hum console me message print krte h
db.once('connected', function() {
      console.log('Connected to MongoDB successfully!');
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

     