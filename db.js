require('dotenv').config();
const mongoose = require('mongoose');
//const Table = require('./model');

const mongoConnect = async () => {
  try {
    if (!process.env.DB_URL) {
      throw 'DATABASE_URL not set!';
    }
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log('DB connected successfully');
    return connection;
  } catch (error) {
    console.error('Connection to db failed: ', error.message);
  }
};

//const pöytä1 = new Table({ koko: 3, vapaa: true });
//pöytä1.save();
module.exports = mongoConnect;
