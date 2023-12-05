const connectToMongoDB = require("./connections/dbConnect");
const jsonData = require('./jsondata.json');
const Outlook = require("./models/dataSchema");

async function insertData() {
  try {
    await connectToMongoDB();
    
    await Outlook.insertMany(jsonData);
    console.log('Data inserted successfully');

  } catch (err) {
    console.error('Error inserting data:', err);
  }
}

insertData();
