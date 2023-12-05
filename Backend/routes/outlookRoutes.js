const express = require('express');
const router = express.Router();
const Outlook = require('../models/outlookModels');

router.get('/', async (req, res) => {
  try {
    const outlookData = await Outlook.find();
    res.status(200).json(outlookData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


//  ~ NO NEEDED MOSTLY
router.post('/', async (req, res) => {
  try {
    const newOutlookData = new Outlook(req.body);
    const savedData = await newOutlookData.save();
    res.json(savedData);
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
