const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();

require('./config/database');

const app = express();
const CLIENTDEVPORT = 3000
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${CLIENTDEVPORT}` }))

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on ${port}`)
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/portfolio', require('./routes/api/portfolio'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
