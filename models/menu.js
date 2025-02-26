import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum:["sour","spicy","sweet"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    required: true,
    },
    ingredients: {
        type: Array,
        required:true
    },
    num_sales: {
        type: Number,
        
    }
});

const Menu = mongoose.model('Menu', MenuItemSchema)
export default Menu;