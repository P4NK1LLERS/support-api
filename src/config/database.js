const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/support-api'; 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected ✅');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
