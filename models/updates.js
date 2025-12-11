const mongoose = require('mongoose');

const UpdatesSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String },
    date: { type: String },
    description: {type: String },
    icon: { type: String },
}, { collection: 'kids-camp-updates' }); // Explicitly define collection name if needed

const Updates = mongoose.model('Updates', UpdatesSchema);

module.exports = Updates;
