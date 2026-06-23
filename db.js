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
 
db.on('error', function(err) {
      console.log('Error connecting to MongoDB:', err);
    });
 
db.on('disconnected', function() {
      console.log('Disconnected from MongoDB');
    });
 
module.exports = db;

     
