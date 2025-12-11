const express = require('express');
const router = express.Router();
const Updates = require('../models/updates'); // Import your model

// GET all articles
router.get('/updates', async (req, res) => {
    try {
        // Using an empty filter {} in find() returns all documents
        console.log("Fetching all updates from the database.");
        const updates = await Updates.find({});
        res.json(updates); // Send the retrieved data as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});


router.post('/updates', async (req, res) => {
    try {
        const newUpdate = new Updates(req.body);
        await newUpdate.save();
        res.status(201).json(newUpdate); // Send the retrieved data as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
