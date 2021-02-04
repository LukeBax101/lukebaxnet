'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', express.static(path.join(__dirname, '../www')));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);