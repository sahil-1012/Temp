const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017'
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = connectToMongoDB;
