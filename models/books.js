const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new mongoose.Schema({
	title    : { type: String, required: true },
	author   : { type: String, required: true },
	synopsis : String,
	date     : { type: Date, default: Date.now }
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
