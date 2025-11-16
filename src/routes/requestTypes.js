const express = require('express');
const RequestType = require('../models/RequestType');

const router = express.Router();

// GET all active request types
router.get('/', async (req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

// GET by id
router.get('/:id', async (req, res) => {
  const doc = await RequestType.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Not found' });
  return res.json(doc);
});

// POST create
router.post('/', async (req, res) => {
  try {
    const created = await RequestType.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
