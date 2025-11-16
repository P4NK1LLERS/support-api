const express = require('express');
const connectDB = require('./config/database');
const requestTypesRouter = require('./routes/requestTypes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/request-types', requestTypesRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
