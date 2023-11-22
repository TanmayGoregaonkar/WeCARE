const express = require('express');
const cors = require('cors');
const runFiles = require('./components/runFiles');

const app = express();

app.use(express.json());
app.use(cors());

// runFiles.runPython();

app.listen(8000, () => {
    console.log('Server listening to port 8000');
});

app.post('/finalprediction', runFiles.runPython);