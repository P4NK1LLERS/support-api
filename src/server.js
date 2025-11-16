const express = require('express');
const connectDB = require('./config/database');

const app = express();
app.use(express.json());
app.use('/api/request-types', require('./routes/requestTypes'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (process.env.NODE_ENV !== 'test') {
  const DB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/support-api';
  connectDB(DB_URI);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
