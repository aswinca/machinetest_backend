const Menu = require('../Menu/MenuSchema'); 
const mongoose = require('mongoose');

exports.addMenu = async (req, res) => {
  try {
    const { name, description, items } = req.body;
    const newMenu = new Menu({
      name,
      description,
      items,
    });
    await newMenu.save();

    res.status(201).json({
      message: 'Menu created successfully',
      menu: newMenu,
    });
  } catch (error) {
    console.error('Error creating menu:', error);
    res.status(500).json({
      message: 'Failed to create menu',
      error: error.message,
    });
  }
};

exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find(); 
    res.status(200).json(menus);
  } catch (error) {
    console.error('Error fetching menus:', error);
    res.status(500).json({
      message: 'Error fetching menus',
      error: error.message,
    });
  }
};

exports.getItemById = async (req, res) => {
    try {
      const menuId = req.params.menuId;  
      const itemId = req.params.itemId;  

      if (!mongoose.Types.ObjectId.isValid(menuId) || !mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({ message: 'Invalid menuId or itemId' });
      }
  
      const menu = await Menu.findById(menuId);  
  
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
  
 
      const item = menu.items.find((item) => item._id.toString() === itemId);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);  
    } catch (error) {
      console.error('Error fetching item:', error);
      res.status(500).json({
        message: 'Failed to fetch item',
        error: error.message,
      });
    }
  };
