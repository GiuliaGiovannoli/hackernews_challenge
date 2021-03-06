const dotEnv = require('dotenv')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

require('./database/client');

const app = express();
dotEnv.config()
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts')

app.use('/api/posts', postsRouter)
app.use('/api/users', usersRouter);
app.use('/', indexRouter);


module.exports = app;
