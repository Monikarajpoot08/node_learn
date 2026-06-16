const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb+srv://Monika:monika0814@cluster0.mtkcxhs.mongodb.net/'
mongoose.connect(MONGODB_URL);

const db=mongoose.connection;

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

     