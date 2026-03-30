const mongoose= require('mongoose');
// in this file we will define the schema for the person collection in the database
// schema is a blueprint for the data that we want to store in the database 

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ['sweet', 'sour', 'spicy'],
    required: true
  },
is_drink: {
    type: Boolean,
    default: false // by default, it is not a drink if user does not specify it
  },
  ingredients: {
    type: [String], // array of strings to store multiple ingredients
    default: [] // default value is an empty array if user does not specify any ingredients
  },
  num_sales: {
    type: Number,
    default: 0 // by default, the number of sales is 0 when a new menu item is created
  }
});

// schema is ready
//export the model for the menu item collection using the schema that we have defined
const menuItem =mongoose.model('Menuitem', menuItemSchema);
module.exports = menuItem;