require('dotenv').config();
require('./config/database');
const axios = require('axios');
const Product = require('./models/product');
const mongoose = require('mongoose');

async function seedDatabase() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const products = response.data;
        await Product.insertMany(products);
    } catch (error) {
        console.error('Error seeding database', error);
    } finally { 
        await mongoose.connection.close();
        console.log('Database connection closed');
  }
}

seedDatabase();