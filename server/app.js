const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());

const aiRoutes = require('./routes/aiRoutes');
app.use('/api/ai', aiRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to AceAI!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
