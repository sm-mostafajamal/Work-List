const mongoose = require('mongoose');

const WorkListSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
})


module.exports = mongoose.model('Worklists', WorkListSchema);