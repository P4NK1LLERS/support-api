const express = require('express');
const RequestType = require('../models/RequestType');

const router = express.Router();

router.get('/', async (req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

router.get('/:id', async (req, res) => {
  const type = await RequestType.findById(req.params.id);
  if (!type) return res.status(404).json({ message: 'Not found' });
  res.json(type);
});

router.post('/', async (req, res) => {
  const type = new RequestType(req.body);
  await type.save();
  res.status(201).json(type);
});

module.exports = router;
