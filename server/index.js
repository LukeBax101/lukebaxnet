const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
});
