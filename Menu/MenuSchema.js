const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,  // Example of additional field
});

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [itemSchema],  // Array of items for the menu
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
