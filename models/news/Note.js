const mongoose = require('mongoose')
const NoteSchema = new mongoose.Schema({
    title: {
        type:String,
    },
    description: {
        type: String,
    }
})
mongoose.models = {}
module.exports = mongoose.models.Note || mongoose.model('news', NoteSchema)
