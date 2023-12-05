const express = require('express');
const outlookRoutes = require('./routes/outlookRoutes');
const connectToMongoDB = require('./connections/dbConnect');

const app = express();
const PORT = process.env.PORT || 3001;

connectToMongoDB()

// Middleware
app.use(express.json());

// Routes
app.use('/outlook', outlookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on  http ://localhost:${PORT}`);
});
