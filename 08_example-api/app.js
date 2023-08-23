const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const memberRouter = require('./src/routes/member-route');
app.use('/members', memberRouter);

app.listen(8888, () => console.log('Server is running on port 8888'));