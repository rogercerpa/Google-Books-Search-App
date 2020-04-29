const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new mongoose.Schema({});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
