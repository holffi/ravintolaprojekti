const mongoose = require('mongoose');
const pöytäSchema = new mongoose.Schema({
  koko: { type: Number, required: true },
  vapaa: { type: Boolean, default: true },
});

module.exports = mongoose.model('Table', pöytäSchema);
