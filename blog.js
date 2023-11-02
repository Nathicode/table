const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nathiSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
type: String,
required: true,
    }
}, { timestamps: true });
const Blog = mongoose.model('Blog', nathiSchema);
module.exports = Blog;