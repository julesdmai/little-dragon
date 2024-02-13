const express = require('express');
const app = express();

// Port we are serving on
const PORT = 3000;

// Route '/' GET
app.get('/', (req, res) => {
    res.send('Hello World');
})



// Listens on port 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});