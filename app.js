require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const updateRoute = require('./routes/updateRoute');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Optional: Define a simple route to confirm server is running
app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB!');
});

app.use('/api', updateRoute);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
