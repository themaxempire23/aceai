const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to send notes to the Python AI service for summarization
router.post('/summarize', async (req, res) => {
    const { notes } = req.body;

    try {
        const response = await axios.post('http://localhost:5001/summarize', { notes });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to summarize notes' });
    }
});

module.exports = router;
