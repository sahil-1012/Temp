const mongoose = require('mongoose');
const Outlook = require('./models/outlookModels'); // Replace with the actual path to your model file

async function getDistinctPestleTypes() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Outlook.aggregate([
        {
          $group: {
            _id: '$pestle',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            pestle: '$_id',
            count: 1,
          },
        },
      ]);
  
      // Log or use the result
      console.log('Distinct Pestle Types with Count:', result);
  
      // Close the MongoDB connection

    // Close the MongoDB connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function to get distinct "pestle" types
getDistinctPestleTypes();
